import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const BeeScene = () => {
  const [blobUrl, setBlobUrl] = useState('');
  const [hasScanned, setHasScanned] = useState(false);

  useEffect(() => {
    // Create the warning page that will show after scanning
    const warningPage = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Security Alert!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 100vh;
            background: #000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            text-align: center;
          }
          .warning {
            color: #fff;
            font-size: 24px;
            font-weight: bold;
            padding: 20px;
            max-width: 90%;
            border: 3px solid #ff0000;
            border-radius: 10px;
            background: rgba(0,0,0,0.7);
            margin-bottom: 20px;
          }
          .tips {
            color: #fff;
            max-width: 80%;
            text-align: left;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="warning">
          ⚠️ NEXT TIME BE CAREFUL ABOUT YOUR INFORMATION! ⚠️
        </div>
        <div class="tips">
          <strong>Security Tips:</strong>
          <ul>
            <li>Never share passwords via messages</li>
            <li>Verify sender identities before responding</li>
            <li>Use two-factor authentication</li>
            <li>Check for HTTPS on websites</li>
            <li>Use a password manager to store and generate secure passwords</li>
            <li>Regularly monitor your online accounts for suspicious activity</li>
            <li>Be cautious when sharing personal information on social media</li>
            <li>Use antivirus software and keep it updated</li>
            <li>Enable encryption on your devices</li>
            <li>Be wary of public Wi-Fi; use a VPN when possible</li>
          </ul>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([warningPage], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    setBlobUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  // Check if coming back from QR scan (for demo purposes)
  useEffect(() => {
    if (window.location.search.includes('scanned=true')) {
      setHasScanned(true);
    }
  }, []);

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
            {blobUrl && (
              <QRCodeSVG 
                value={`${window.location.origin}/warning`}
                size={250}
                level="H"
                fgColor="#000000"
                bgColor="#ffffff"
                includeMargin={true}
              />
            )}
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