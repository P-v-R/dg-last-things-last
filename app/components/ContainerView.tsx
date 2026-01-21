'use client';

import { useState, useMemo, useEffect} from 'react';
import { Container, FileItem, fileTypeIcons, containerTypeLabels } from '../types';
import DocumentViewer from './DocumentViewer';

interface ContainerViewProps {
  container: Container;
}

// Secret code to unlock priority filter - handler tells players this
const SECRET_CODE = 'FIDELIS';

export default function ContainerView({ container }: ContainerViewProps) {
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [showPriorityOnly, setShowPriorityOnly] = useState(false);
  const [viewingDocument, setViewingDocument] = useState<FileItem | null>(null);
  const [priorityUnlocked, setPriorityUnlocked] = useState(false);
  const [typedKeys, setTypedKeys] = useState('');
  const [showUnlockFlash, setShowUnlockFlash] = useState(false);

  // Listen for secret code being typed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      // Only track letter keys
      if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
        setTypedKeys(prev => {
          const newKeys = (prev + e.key.toUpperCase()).slice(-SECRET_CODE.length);
          
          // Check if code was entered
          if (newKeys === SECRET_CODE && !priorityUnlocked) {
            setPriorityUnlocked(true);
            setShowUnlockFlash(true);
            setTimeout(() => setShowUnlockFlash(false), 600);
          }
          
          return newKeys;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [priorityUnlocked]);

  // Navigate to a folder
  const navigateToFolder = (file: FileItem) => {
    if (file.type === 'folder' && file.children) {
      setCurrentPath([...currentPath, file.id]);
      setSelectedFile(null);
    }
  };

  // Get current folder's files based on path
  const getCurrentFiles = (): FileItem[] => {
    let files = container.files;
    
    for (const pathId of currentPath) {
      const folder = files.find(f => f.id === pathId);
      if (folder?.children) {
        files = folder.children;
      }
    }
    
    return files;
  };

  // Get all files flattened for priority view
  const getAllPriorityFiles = (files: FileItem[]): FileItem[] => {
    const result: FileItem[] = [];
    
    function traverse(items: FileItem[]) {
      for (const item of items) {
        if (item.priority) {
          result.push(item);
        }
        if (item.children) {
          traverse(item.children);
        }
      }
    }
    
    traverse(files);
    return result;
  };

  const displayFiles = useMemo(() => {
    if (showPriorityOnly) {
      return getAllPriorityFiles(container.files);
    }
    return getCurrentFiles();
  }, [showPriorityOnly, currentPath, container.files]);

  // Breadcrumb items
  const getBreadcrumbs = () => {
    const crumbs: { name: string; path: string[] }[] = [
      { name: container.name, path: [] }
    ];
    
    let files = container.files;
    const pathSoFar: string[] = [];
    
    for (const pathId of currentPath) {
      const folder = files.find(f => f.id === pathId);
      if (folder) {
        pathSoFar.push(pathId);
        crumbs.push({ name: folder.name, path: [...pathSoFar] });
        if (folder.children) {
          files = folder.children;
        }
      }
    }
    
    return crumbs;
  };

  // Handle file double click
  const handleFileAction = (file: FileItem) => {
    if (file.type === 'folder' && file.children && !showPriorityOnly) {
      navigateToFolder(file);
    } else if (file.type !== 'folder') {
      setViewingDocument(file);
    }
  };

  // Get container icon based on type
  const getContainerIcon = () => {
    switch (container.type) {
      case 'filing-cabinet': return '🗄️';
      case 'footlocker': return '📦';
      case 'inbox': return '📧';
      default: return '📁';
    }
  };

  // Count priority files
  const priorityCount = getAllPriorityFiles(container.files).length;

  if (viewingDocument) {
    return (
      <div className="window" style={{ maxWidth: '900px', margin: '20px auto' }}>
        <div className="window-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="window-header-icon">{fileTypeIcons[viewingDocument.type]}</span>
            {viewingDocument.name}
          </div>
          <div className="window-controls">
            <button 
              className="window-btn window-btn-close"
              onClick={() => setViewingDocument(null)}
              title="Close"
            >
              ×
            </button>
          </div>
        </div>
        <DocumentViewer file={viewingDocument} />
      </div>
    );
  }

  return (
    <div className="window" style={{ maxWidth: '900px', margin: '20px auto' }}>
      {/* Window Title Bar */}
      <div className="window-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className="window-header-icon">{getContainerIcon()}</span>
          {containerTypeLabels[container.type]} - {container.name}
        </div>
        <div className="window-controls">
          <button className="window-btn" title="Minimize">_</button>
          <button className="window-btn" title="Maximize">□</button>
          <button className="window-btn window-btn-close" title="Close">×</button>
        </div>
      </div>

      {/* Toolbar */}
      <div 
        className="toolbar"
        style={showUnlockFlash ? { animation: 'unlockFlash 0.6s ease-out' } : undefined}
      >
        <button 
          className="toolbar-btn"
          onClick={() => {
            if (currentPath.length > 0) {
              setCurrentPath(currentPath.slice(0, -1));
            }
          }}
          disabled={currentPath.length === 0 || showPriorityOnly}
          style={{ opacity: (currentPath.length === 0 || showPriorityOnly) ? 0.5 : 1 }}
        >
          ⬆️ Up
        </button>
        {/* <button 
          className="toolbar-btn"
          onClick={() => {
            setCurrentPath([]);
            setShowPriorityOnly(false);
          }}
        >
          🏠 Root
        </button> */}
        <div style={{ flex: 1 }} />
        {priorityUnlocked && (
          <button 
            className={`toolbar-btn ${showPriorityOnly ? 'toolbar-btn-priority' : ''}`}
            onClick={() => setShowPriorityOnly(!showPriorityOnly)}
            style={{ 
              background: showPriorityOnly 
                ? 'linear-gradient(180deg, #ff6666 0%, #cc0000 85%, #990000 100%)' 
                : undefined,
              color: showPriorityOnly ? 'white' : undefined,
              fontWeight: 'bold',
              animation: 'fadeIn 0.3s ease-in'
            }}
          >
            {showPriorityOnly ? '📋 Show All Files' : `🔴 Priority Files (${priorityCount})`}
          </button>
        )}
      </div>

      {/* Breadcrumb / Address Bar */}
      <div className="breadcrumb">
        <span style={{ color: 'var(--text-secondary)', marginRight: '4px' }}>Location:</span>
        {!showPriorityOnly ? (
          getBreadcrumbs().map((crumb, index) => (
            <span key={index}>
              {index > 0 && <span className="breadcrumb-separator"> ▸ </span>}
              <span 
                className="breadcrumb-item"
                onClick={() => setCurrentPath(crumb.path)}
              >
                {crumb.name}
              </span>
            </span>
          ))
        ) : (
          <span style={{ fontWeight: 'bold', color: 'var(--priority-red)' }}>
            PRIORITY FILES - All Locations
          </span>
        )}
      </div>

      {/* File List */}
      <div className="content-area">
        <table className="file-list">
          <thead>
            <tr>
              <th style={{ width: priorityUnlocked ? '45%' : '50%' }}>Name</th>
              <th style={{ width: '20%' }}>Date Modified</th>
              <th style={{ width: '15%' }}>Type</th>
              <th style={{ width: priorityUnlocked ? '10%' : '15%' }}>Size</th>
              {priorityUnlocked && <th style={{ width: '10%' }}>Priority</th>}
            </tr>
          </thead>
          <tbody>
            {displayFiles.length === 0 ? (
              <tr>
                <td colSpan={priorityUnlocked ? 5 : 4} style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                  {showPriorityOnly ? 'No priority files found.' : 'This folder is empty.'}
                </td>
              </tr>
            ) : (
              displayFiles.map((file) => (
                <tr 
                  key={file.id}
                  className={`${selectedFile?.id === file.id ? 'selected' : ''} ${priorityUnlocked && file.priority ? 'priority' : ''}`}
                  onClick={() => setSelectedFile(file)}
                  onDoubleClick={() => handleFileAction(file)}
                >
                  <td>
                    <div className="file-name">
                      <span className="file-icon">{fileTypeIcons[file.type]}</span>
                      <span>{file.name}</span>
                    </div>
                  </td>
                  <td>{file.dateModified}</td>
                  <td style={{ textTransform: 'capitalize' }}>{file.type}</td>
                  <td>{file.size || (file.type === 'folder' ? '-' : '')}</td>
                  {priorityUnlocked && (
                    <td>
                      {file.priority && <span className="priority-dot" title="Priority Document" />}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <span>
          {displayFiles.length} item(s)
          {showPriorityOnly && ' (Priority view)'}
        </span>
        <span>
          {selectedFile ? `Selected: ${selectedFile.name}` : 'Double-click to open'}
        </span>
      </div>
    </div>
  );
}
