import React from 'react';
import './styles.scss';


const Header: React.FC = () => {
  return (
    <header className="taskify-header">
      <div className="logo">
        {/* Replace with your own logo if you want */}
        <img src="/logo192.png" alt="Taskify Logo" />
        <h1>Taskify</h1>
      </div>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Boards</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
