import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';

const BeeScene = () => {
  const navigate = useNavigate();

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
      
      <p style={{ color: '#aaa', maxWidth: '300px' }}>
        Use your phone's camera to scan this code
      </p>

    
    </div>
  );
};

export default BeeScene;