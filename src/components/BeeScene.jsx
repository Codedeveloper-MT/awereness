import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';

const BeeScene = () => {
  const navigate = useNavigate();

  const handleScan = () => {
    // Navigate to the /warning route
    navigate('/warning');
  };

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
      
      <p style={{ color: '#aaa', maxWidth: '300px', marginBottom: '20px' }}>
        Use your phone's camera to scan this code
      </p>

      <button 
        onClick={handleScan}
        style={{
          padding: '10px 20px',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        I’ve Scanned the QR Code
      </button>
    </div>
  );
};

export default BeeScene;