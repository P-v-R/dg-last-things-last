'use client';

import { useState, useEffect } from 'react';
import './safe.css';

// Code found in cabin footlocker
const SAFE_CODE = '47291863';

interface SafeItem {
  id: string;
  name: string;
  type: string;
  description: string;
  condition: string;
}

const safeContents: SafeItem[] = [
  {
    id: 'shotgun',
    name: 'Remington 870 Shotgun',
    type: 'FIREARM',
    description: '12-gauge pump-action shotgun. Stock has minor scratches from use. Chamber empty. No ammunition present in safe.',
    condition: 'SERVICEABLE',
  },
  {
    id: 'rope',
    name: 'Coiled Nylon Rope',
    type: 'EQUIPMENT',
    description: '50ft braided nylon rope. 550lb test strength. Some dirt staining suggests prior outdoor use.',
    condition: 'GOOD',
  },
  {
    id: 'flashlight',
    name: 'Maglite Flashlight',
    type: 'EQUIPMENT',
    description: 'Heavy-duty aluminum flashlight. 3 D-cell batteries installed. Lens has minor scratching. Functional.',
    condition: 'GOOD',
  },
  {
    id: 'bear-spray',
    name: 'Counter Assault Bear Spray',
    type: 'DEFENSIVE',
    description: '10.2oz pressurized canister. EPA registered deterrent. Expiration date: 08/2011. Safety clip intact.',
    condition: 'GOOD',
  },
  {
    id: 'first-aid',
    name: 'First Aid Kit',
    type: 'MEDICAL',
    description: 'Basic trauma kit in red nylon pouch. Contains bandages, gauze pads, antiseptic wipes, elastic tourniquet. Some items show prior use.',
    condition: 'PARTIAL',
  },
  {
    id: 'lockbox',
    name: 'Small Metal Lockbox',
    type: 'CONTAINER',
    description: 'Steel security box, approx. 6"x4"x3". Keyhole lock mechanism. Contents rattle when shaken. Key not present in safe.',
    condition: 'LOCKED',
  },
  {
    id: 'binoculars',
    name: 'Bushnell Binoculars',
    type: 'OPTICS',
    description: '10x42 magnification. Rubber armor coating. Minor fog present on left objective lens. Neck strap attached.',
    condition: 'FAIR',
  },
];

export default function SafePage() {
  const [enteredCode, setEnteredCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [error, setError] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SafeItem | null>(null);
  const [bootState, setBootState] = useState<'init' | 'ready' | 'active'>('init');
  const [keyFlash, setKeyFlash] = useState(false);

  // Boot sequence on mount
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setBootState('ready');
    }, 1500);

    const timer2 = setTimeout(() => {
      setBootState('active');
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleKeyPress = (key: string) => {
    if (isUnlocked || isUnlocking || bootState !== 'active') return;

    setError(false);

    if (key === 'C') {
      setEnteredCode('');
      setKeyFlash(true);
      setTimeout(() => setKeyFlash(false), 100);
      return;
    }

    if (key === 'E') {
      // Enter/submit
      if (enteredCode === SAFE_CODE) {
        setIsUnlocking(true);
        setTimeout(() => {
          setIsUnlocked(true);
          setIsUnlocking(false);
        }, 2000);
      } else {
        setError(true);
        setTimeout(() => {
          setEnteredCode('');
          setError(false);
        }, 1000);
      }
      return;
    }

    if (enteredCode.length < 8) {
      setKeyFlash(true);
      setTimeout(() => setKeyFlash(false), 100);
      setEnteredCode(prev => prev + key);
    }
  };

  // Get display text based on state
  const getDisplayText = () => {
    if (bootState === 'init') return 'INIT...';
    if (bootState === 'ready') return 'READY';
    if (isUnlocking) return 'UNLOCKING';
    if (error) return 'DENIED';
    if (enteredCode) return enteredCode.replace(/./g, '●');
    return '--------';
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        handleKeyPress(e.key);
      } else if (e.key === 'Enter') {
        handleKeyPress('E');
      } else if (e.key === 'Backspace' || e.key === 'Escape') {
        handleKeyPress('C');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enteredCode, isUnlocked, isUnlocking, bootState]);

  if (isUnlocked) {
    return (
      <div className="safe-room unlocked">
        <div className="evidence-window">
          {/* Window Title Bar */}
          <div className="evidence-header">
            <span>Evidence Inventory - Gun Safe Contents</span>
            <div className="window-controls">
              <button className="win-btn">_</button>
              <button className="win-btn">□</button>
              <button className="win-btn close">×</button>
            </div>
          </div>

          {/* Toolbar */}
          <div className="evidence-toolbar">
            <span className="toolbar-label">Location:</span>
            <span className="toolbar-path">2847 Pinecrest Dr, Crestline, CA \ Garage \ Gun Safe</span>
          </div>

          {/* File list table */}
          <div className="evidence-content">
            <table className="evidence-table">
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>Item</th>
                  <th style={{ width: '15%' }}>Type</th>
                  <th style={{ width: '15%' }}>Condition</th>
                  <th style={{ width: '35%' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {safeContents.map((item) => (
                  <tr
                    key={item.id}
                    className={selectedItem?.id === item.id ? 'selected' : ''}
                    onClick={() => setSelectedItem(selectedItem?.id === item.id ? null : item)}
                  >
                    <td className="item-name-cell">{item.name}</td>
                    <td className="item-type-cell">{item.type}</td>
                    <td className={`item-condition-cell ${item.condition.toLowerCase()}`}>{item.condition}</td>
                    <td className="item-notes-cell">{item.description.substring(0, 50)}...</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detail panel */}
          {selectedItem && (
            <div className="evidence-detail">
              <div className="detail-title">{selectedItem.name}</div>
              <div className="detail-meta">
                <span className="meta-item">TYPE: {selectedItem.type}</span>
                <span className="meta-item">CONDITION: {selectedItem.condition}</span>
              </div>
              <div className="detail-body">{selectedItem.description}</div>
            </div>
          )}

          {/* Status bar */}
          <div className="evidence-status">
            <span>{safeContents.length} item(s)</span>
            <span>{selectedItem ? `Selected: ${selectedItem.name}` : 'Click item for details'}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="safe-room">
      <div className={`gun-safe ${isUnlocking ? 'unlocking' : ''} ${error ? 'shake' : ''}`}>
        {/* Safe door texture */}
        <div className="safe-texture"></div>

        {/* Brand plate */}
        <div className="brand-plate">
          <div className="brand-name">LIBERTY</div>
          <div className="brand-model">FATBOY JR.</div>
        </div>

        {/* Digital keypad area */}
        <div className="keypad-housing">
          {/* LED Display */}
          <div className={`led-display ${error ? 'error' : ''} ${isUnlocking ? 'success' : ''} ${keyFlash ? 'flash' : ''} ${bootState === 'init' ? 'booting' : ''} ${bootState === 'ready' ? 'ready-state' : ''}`}>
            <div className="led-text">
              {getDisplayText()}
            </div>
          </div>

          {/* Keypad */}
          <div className="keypad">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', 'E'].map((key) => (
              <button
                key={key}
                className={`keypad-btn ${key === 'C' ? 'clear' : ''} ${key === 'E' ? 'enter' : ''}`}
                onClick={() => handleKeyPress(key)}
                disabled={isUnlocking}
              >
                {key === 'C' ? 'CLR' : key === 'E' ? 'ENT' : key}
              </button>
            ))}
          </div>
        </div>

        {/* Hinges */}
        <div className="hinge hinge-top"></div>
        <div className="hinge hinge-bottom"></div>

        {/* Lock bolts indicator */}
        <div className="bolt-indicator">
          <div className={`bolt ${isUnlocking ? 'retracting' : ''}`}></div>
          <div className={`bolt ${isUnlocking ? 'retracting' : ''}`}></div>
          <div className={`bolt ${isUnlocking ? 'retracting' : ''}`}></div>
        </div>
      </div>

      {/* Instructions */}
      <div className="safe-instructions">
        Enter 8-digit code to unlock
      </div>
    </div>
  );
}
