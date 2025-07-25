import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const qrValue = "https://yourwebsite.com"; // Replace with your desired URL or information

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}>Scan the QR Code</h1>
      <QRCode
        value={qrValue}
        size={200}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
      />
      <p style={{ color: '#555', marginTop: '20px' }}>
        Point your camera at the QR code to visit the link.
      </p>
    </div>
  );
};

export default QRCodeGenerator;