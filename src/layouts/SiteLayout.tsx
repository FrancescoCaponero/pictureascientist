import React from 'react';
import './YourLayout.css'; // Importa i tuoi stili CSS

interface LayoutProps {
  children: React.ReactNode;
}

const YourLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="your-layout">
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default YourLayout;
