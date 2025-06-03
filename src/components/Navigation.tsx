import React from 'react';
import NavTile from './NavTile';

const styles = {
  nav: {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    justifyContent: 'center',
    gap: '20px', // Better spacing
    padding: '10px',
    backgroundColor: '#282c34', // Optional styling
  },
};

const Navigation: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <NavTile title="About Us" path="/" />
      <NavTile title="See the CodeFore Difference" path="/portfolio" />
      <NavTile title="Contact" path="/contact" />
      <NavTile title="Testimonials/Partners" path="/resume" />
    </nav>
  );
};

export default Navigation;
