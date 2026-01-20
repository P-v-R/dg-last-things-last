import Link from 'next/link';
import { containers } from './data/sample-containers';
import { containerTypeLabels } from './types';

export default function Home() {
  // Get container icon based on type
  const getContainerIcon = (type: string) => {
    switch (type) {
      case 'filing-cabinet': return '🗄️';
      case 'footlocker': return '📦';
      case 'inbox': return '📧';
      default: return '📁';
    }
  };

  return (
    <div className="landing-container">
      {/* Header */}
      <div className="landing-header">
        <div className="landing-title">
          DELTA GREEN ARCHIVE SYSTEM
        </div>
        <div className="landing-subtitle">
          Secure Document Management Portal - Classification: NEED TO KNOW
        </div>
        <div style={{ fontSize: '11px', marginTop: '8px', opacity: 0.7 }}>
          System Date: {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Main Window */}
      <div className="window">
        <div className="window-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="window-header-icon">🔒</span>
            Archive Index - Available Containers
          </div>
          <div className="window-controls">
            <button className="window-btn" title="Minimize">_</button>
            <button className="window-btn" title="Maximize">□</button>
            <button className="window-btn window-btn-close" title="Close">×</button>
          </div>
        </div>

        <div className="toolbar">
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
            📋 {containers.length} container(s) available
          </span>
        </div>

        <div style={{ padding: '16px', background: '#ece9d8' }}>
          {/* Instructions */}
          <div style={{ 
            background: '#fffff0', 
            border: '1px solid #c0c0a0',
            padding: '12px',
            marginBottom: '16px',
            fontSize: '11px'
          }}>
            <strong>⚠️ NOTICE:</strong> This system contains classified materials. 
            Unauthorized access is prohibited. All activity is monitored and logged.
            <br /><br />
            <strong>Shareable Links:</strong> Copy the URL of any container page to share access with authorized personnel.
          </div>

          {/* Container List */}
          {containers.map((container) => (
            <Link 
              key={container.id} 
              href={`/container/${container.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="container-card">
                <div className="container-card-header">
                  <span>{getContainerIcon(container.type)}</span>
                  <span>{containerTypeLabels[container.type]}</span>
                </div>
                <div className="container-card-body">
                  <div className="container-card-type">
                    ID: {container.id}
                  </div>
                  <div className="container-card-name">
                    {container.name}
                  </div>
                  <div className="container-card-desc">
                    {container.description}
                  </div>
                  <div style={{ 
                    marginTop: '8px', 
                    fontSize: '10px', 
                    color: 'var(--text-secondary)' 
                  }}>
                    Created: {container.createdAt} | Files: {container.files.length}
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Footer info */}
          <div style={{ 
            marginTop: '20px', 
            textAlign: 'center',
            fontSize: '10px',
            color: 'var(--text-secondary)'
          }}>
            Delta Green Archive System v2.4.1 | © 2009 | For Official Use Only
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div style={{ 
        marginTop: '20px', 
        background: 'rgba(255,255,255,0.1)', 
        padding: '16px',
        borderRadius: '4px'
      }}>
        <div style={{ 
          color: 'white', 
          fontSize: '12px', 
          fontWeight: 'bold', 
          marginBottom: '8px',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          Quick Access Links:
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {containers.map((container) => (
            <Link 
              key={container.id}
              href={`/container/${container.id}`}
              style={{
                background: 'var(--btn-gradient)',
                border: '1px solid var(--border-control)',
                padding: '6px 12px',
                borderRadius: '3px',
                fontSize: '11px',
                color: 'var(--text-primary)',
                textDecoration: 'none'
              }}
            >
              {getContainerIcon(container.type)} {container.name.substring(0, 30)}...
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
