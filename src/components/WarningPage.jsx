import React from 'react';

const WarningPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#000',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ color: '#ff5252', marginBottom: '20px' }}>⚠️ SECURITY WARNING ⚠️</h1>
      <p style={{
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '1.4',
        marginBottom: '30px'
      }}>
        NEXT TIME BE CAREFUL ABOUT YOUR INFORMATION!
      </p>
      <div style={{
        textAlign: 'left',
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '500px'
      }}>
        <h3>Security Tips:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Use strong, unique passwords</li>
          <li>Enable two-factor authentication</li>
          <li>Verify links before clicking</li>
          <li>Keep software updated</li>
          <li>Be cautious with personal data</li>
          <li>Use a password manager to store and generate secure passwords</li>
          <li>Regularly monitor your online accounts for suspicious activity</li>
          <li>Be cautious when sharing personal information on social media</li>
          <li>Use antivirus software and keep it updated</li>
          <li>Enable encryption on your devices</li>
          <li>Be wary of public Wi-Fi; use a VPN when possible</li>
        </ul>
      </div>
    </div>
  );
};

export default WarningPage;