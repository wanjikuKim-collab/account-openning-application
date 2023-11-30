import React, { useState } from 'react';
import './AccountSettings.css';

function AccountSettings() {
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleChangePassword = () => {
    // Implement change password logic here
  };

  const handleChangeEmail = () => {
    // Implement change email logic here
  };

  return (
    <div>
      <h2>Account Settings</h2>
      <form>
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

        <button type="button" className='bg-blue-light' onClick={handleChangePassword}>
          Change Password
        </button>

        <label>New Email:</label>
        <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />

        <button type="button" className='bg-orange-light' onClick={handleChangeEmail}>
          Change Email
        </button>
      </form>
    </div>
  );
}

export default AccountSettings;