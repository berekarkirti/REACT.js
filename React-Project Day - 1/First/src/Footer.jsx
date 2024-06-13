import React from 'react';

// ---------------- style ---------------- //
const footer = {
    backgroundColor: '#387490',
    color: '#fff',
    textAlign: 'left',
    bottom: 0,
    height: '80px',
    left: 0,
    width: '100%',

};

const text = {
    fontSize: '14px',
    marginLeft: '0.8%',
    padding: '25px',
};

// ---------------- code ---------------- //
const Footer = () => {
    return (
        <footer style={footer}>
            <p style={text}>© 2024 MyWebsite. All rights reserved.</p>
        </footer>
    );
}
export default Footer;
