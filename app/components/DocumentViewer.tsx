'use client';

import { FileItem } from '../types';

interface DocumentViewerProps {
  file: FileItem;
}

export default function DocumentViewer({ file }: DocumentViewerProps) {
  // Render email format
  if (file.type === 'email') {
    return (
      <div style={{ background: 'white', minHeight: '400px' }}>
        <div className="email-header">
          <div className="email-field">
            <span className="email-field-label">From:</span>
            <span className="email-field-value">{file.from || 'Unknown'}</span>
          </div>
          <div className="email-field">
            <span className="email-field-label">To:</span>
            <span className="email-field-value">{file.to || 'Unknown'}</span>
          </div>
          <div className="email-field">
            <span className="email-field-label">Date:</span>
            <span className="email-field-value">{file.dateModified}</span>
          </div>
          <div className="email-subject">
            Subject: {file.subject || file.name}
          </div>
        </div>
        <div className="document-viewer" style={{ border: 'none', margin: 0 }}>
          {file.content || '[No content]'}
        </div>
      </div>
    );
  }

  // Render photo/evidence format with optional actual image
  if (file.type === 'photo' || file.type === 'evidence') {
    return (
      <div className="photo-container">
        <div className="photo-frame">
          {file.imageUrl ? (
            <img 
              src={file.imageUrl} 
              alt={file.name}
              style={{ 
                maxWidth: '100%', 
                maxHeight: '400px',
                display: 'block'
              }}
            />
          ) : (
            <div className="photo-placeholder">
              {file.content || '[Image data could not be displayed]'}
            </div>
          )}
          <div className="photo-label">
            File: {file.name}<br />
            Date: {file.dateModified}<br />
            Size: {file.size || 'Unknown'}
          </div>
          {file.imageUrl && file.content && (
            <div style={{ 
              marginTop: '12px', 
              padding: '12px', 
              background: '#f5f5f5', 
              fontFamily: '"Courier New", monospace',
              fontSize: '11px',
              whiteSpace: 'pre-wrap',
              textAlign: 'left'
            }}>
              {file.content}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default document format
  return (
    <div className="document-viewer">
      <div className="document-header">
        <div className="document-title">{file.name}</div>
        <div className="document-meta">
          Last Modified: {file.dateModified} | Size: {file.size || 'Unknown'}
        </div>
      </div>
      {file.content || '[Document content unavailable]'}
    </div>
  );
}
