// StatusCard.js
import React, { useState } from 'react';
import styles from './StatusCard.module.css'; // Import as "styles"

function StatusCard() {
  const [isOnline, setIsOnline] = useState(false);

  const toggleStatus = () => {
    setIsOnline(prev => !prev);
  };

  return (
    <div className={`${styles.card} ${isOnline ? styles.online : styles.offline}`}>
      <h2>Wada Abera</h2>
      <p>Status: {isOnline ? 'Online ✅' : 'Offline ❌'}</p>
      <button onClick={toggleStatus} className={styles.button}>
        {isOnline ? 'Go Offline' : 'Go Online'}
      </button>
    </div>
  );
}

export default StatusCard;
