import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const BeeScene = () => {
  const [hasScanned, setHasScanned] = useState(false);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      padding: '20px',
      backgroundColor: '#000',
      textAlign: 'center',
      boxSizing: 'border-box'
    }}>
      {!hasScanned ? (
        <>
          <h1 style={{ color: '#fff', marginBottom: '30px' }}>Scan for Important Message</h1>
          
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '30px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}>
            <QRCodeSVG 
              value={`${window.location.origin}/warning`}
              size={250}
              level="H"
              fgColor="#000000"
              bgColor="#ffffff"
              includeMargin={true}
            />
          </div>
          
          <p style={{ color: '#aaa', maxWidth: '300px' }}>
            Use your phone's camera to scan this code
          </p>
        </>
      ) : (
        <div style={{
          width: '100%',
          maxWidth: '500px',
          color: 'white',
          padding: '30px',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ color: '#ff5252', marginBottom: '20px' }}>⚠️ SECURITY WARNING ⚠️</h2>
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
            borderRadius: '5px'
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
      )}
    </div>
  );
};

export default BeeScene;