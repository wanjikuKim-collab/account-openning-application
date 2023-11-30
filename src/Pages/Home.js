// src/components/Home.js
// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-heading">Welcome to the Account Opening App</h2>

      <div className="dashboard-sections">
        {/* Account Overview */}
        <div className="dashboard-section">
          <h3 className="section-title">Account Overview</h3>
          <p className="section-description">
            View a summary of your account, including current balance, recent transactions, and account status.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-section">
          <h3 className="section-title">Quick Actions</h3>
          <ul className="section-list">
            <li>Make a transaction</li>
            <li>Update account information</li>
            <li>View transaction history</li>
          </ul>
        </div>

        {/* Notifications */}
        <div className="dashboard-section">
          <h3 className="section-title">Notifications</h3>
          <p className="section-description">
            Stay informed about account updates, transaction confirmations, and important announcements.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <Link to="/transactions" className="action-button">
          <button>View Transactions</button>
        </Link>
        <Link to="/account-settings" className="action-button">
          <button>Account Settings</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;