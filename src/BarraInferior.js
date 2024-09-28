import './BarraInferior.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Typography, Container as MuiContainer, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function BarraInferior() {
  return (
    <footer style={{ backgroundColor: '#424242', padding: '20px 0' }}>
      <MuiContainer>
        <Typography variant="body2" color="#FFFFFF" align="center">
          {'© '} CRAUTOS {new Date().getFullYear()} {' '}
        </Typography>
        <Typography variant="body2" color="#B0BEC5" align="center" style={{ marginTop: '10px' }}>
          Contáctenos: <Link href="mailto:soporte@crautos.com" color="#FFFFFF">soporte@crautos.com</Link>
        </Typography>       
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <Link href="https://www.facebook.com" target="_blank" color="inherit" style={{ margin: '0 10px' }}>
            <FacebookIcon style={{ color: '#FFFFFF' }} />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" color="inherit" style={{ margin: '0 10px' }}>
            <TwitterIcon style={{ color: '#FFFFFF' }} />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" color="inherit" style={{ margin: '0 10px' }}>
            <InstagramIcon style={{ color: '#FFFFFF' }} />
          </Link>
        </div>
      </MuiContainer>
    </footer>
  );
}

export default BarraInferior;
