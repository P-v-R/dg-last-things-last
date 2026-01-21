'use client'

import { useState, useEffect, useCallback } from 'react'

export default function InvitePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(60)
  const [isDestroyed, setIsDestroyed] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [glitchText, setGlitchText] = useState(false)

  const CORRECT_PASSWORD = 'GREENHOUSE'

  // Self-destruct countdown
  useEffect(() => {
    if (!isAuthenticated || isDestroyed) return

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setIsDestroyed(true)
          return 0
        }
        // Glitch effect in final 10 seconds
        if (prev <= 10) {
          setGlitchText(true)
          setTimeout(() => setGlitchText(false), 100)
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isAuthenticated, isDestroyed])

  // Fade in content after authentication
  useEffect(() => {
    if (isAuthenticated && !isDestroyed) {
      setTimeout(() => setShowContent(true), 100)
    }
  }, [isAuthenticated, isDestroyed])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (password.toUpperCase() === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('ACCESS DENIED')
      setPassword('')
    }
  }, [password])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Destroyed state
  if (isDestroyed) {
    return (
      <div className="invite-container destroyed">
        <div className="static-overlay"></div>
        <div className="destroy-message">
          <div className="destroy-icon">△</div>
          <div className="destroy-text">TRANSMISSION TERMINATED</div>
          <div className="destroy-subtext">This message has been permanently erased.</div>
          <div className="destroy-code">ERR::0x4E554C4C</div>
        </div>
      </div>
    )
  }

  // Password entry
  if (!isAuthenticated) {
    return (
      <div className="invite-container">
        <div className="scanlines"></div>
        <div className="auth-window">
          <div className="auth-header">
            <span className="blink">●</span> SECURE CHANNEL
          </div>
          <div className="auth-body">
            <div className="auth-icon">◈</div>
            <div className="auth-prompt">AUTHORIZATION REQUIRED</div>
            <div className="auth-subtext">Enter verification code to proceed</div>
            <form onSubmit={handleSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                placeholder="••••••••••"
                autoFocus
                autoComplete="off"
              />
              <button type="submit" className="auth-button">
                VERIFY
              </button>
            </form>
            {error && <div className="auth-error">{error}</div>}
          </div>
          <div className="auth-footer">
            <span>ENCRYPTED TRANSMISSION</span>
            <span className="pulse">◆</span>
          </div>
        </div>
      </div>
    )
  }

  // Main content
  return (
    <div className="invite-container authenticated">
      <div className="scanlines"></div>

      {/* Self-destruct timer */}
      <div className={`destruct-timer ${timeRemaining <= 10 ? 'critical' : ''}`}>
        <div className="timer-label">AUTO-DESTRUCT</div>
        <div className="timer-value">{formatTime(timeRemaining)}</div>
        <div className="timer-bar">
          <div
            className="timer-fill"
            style={{ width: `${(timeRemaining / 60) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main message */}
      <div className={`message-window ${showContent ? 'visible' : ''} ${glitchText ? 'glitch' : ''}`}>
        <div className="message-header">
          <span>◢ PRIORITY COMMUNIQUÉ ◣</span>
        </div>

        <div className="message-body">
          <div className="message-classification">
            ▬▬▬ EYES ONLY ▬▬▬
          </div>

          <div className="message-greeting">
            Your recent work has not gone unnoticed.
          </div>

          <div className="message-content">
            <p>We represent an organization that deals with... <em>unusual problems</em>. Problems that require individuals with specific talents and, more importantly, discretion.</p>

            <p>You have been identified as a potential asset.</p>

            <p>Your presence is required at the following location:</p>
          </div>

          <div className="message-details">
            <div className="detail-row">
              <span className="detail-label">DATE:</span>
              <span className="detail-value">Friday, January 23rd</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">TIME:</span>
              <span className="detail-value">18:00 hours</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">LOCATION:</span>
              <span className="detail-value">3234 W 27th St, Los Angeles</span>
            </div>
          </div>

          <div className="message-warning">
            <p>Come alone. Tell no one.</p>
            <p>This communication will not be repeated.</p>
          </div>

          <div className="message-closing">
            <div className="closing-symbol">△</div>
          </div>

          <div className="message-footer">
            <span className="footer-code">REF: ██████-INITIATE-████</span>
          </div>
        </div>
      </div>

      {/* Warning overlay in final seconds */}
      {timeRemaining <= 5 && (
        <div className="final-warning">
          <span>⚠ ERASING ⚠</span>
        </div>
      )}
    </div>
  )
}
