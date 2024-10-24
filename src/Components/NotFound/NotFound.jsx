import React from 'react';

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Sorry, the page you are looking for does not exist.</p>
      <a href="/" style={styles.link}>Go Back Home</a>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  heading: {
    fontSize: '48px',
    color: '#FF5733',
  },
  text: {
    fontSize: '24px',
    margin: '20px 0',
  },
  link: {
    fontSize: '20px',
    color: '#3498DB',
    textDecoration: 'none',
  },
};

export default NotFound;
