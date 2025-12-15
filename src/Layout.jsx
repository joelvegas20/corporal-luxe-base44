import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <style>{`
        :root {
          --rose-blush: #FCE8F6;
          --rose-dusty: #F3C4D3;
          --rose-deep: #E91E63;
          --rose-darker: #C2185B;
          --white: #FFFFFF;
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
        
        /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: var(--rose-blush);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--rose-deep);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: var(--rose-darker);
        }
        
        /* Custom Selection */
        ::selection {
          background: rgba(233, 30, 99, 0.2);
          color: var(--rose-darker);
        }
        
        /* Focus Styles for Accessibility */
        *:focus-visible {
          outline: 2px solid var(--rose-deep);
          outline-offset: 2px;
        }
        
        /* Smooth Transitions */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      {children}
    </>
  );
}