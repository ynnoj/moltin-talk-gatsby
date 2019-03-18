import React from 'react'

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto',
        justifyContent: 'center',
        padding: '0 2rem',
        textAlign: 'left'
      }}>
      {children}
    </div>
    <footer
      style={{
        display: 'flex',
        fontSize: '1.25rem',
        justifyContent: 'space-between',
        padding: '2rem',
        width: '100vw',
        position: 'fixed',
        bottom: 0
      }}>
      @ynnoj
    </footer>
  </div>
)
