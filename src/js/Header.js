import React from 'react';
import '../css/Header.css';
import logo from './google.jpg';

export default function Header() {
  return (
    <div>
      <img src={logo} style={{ margin:'auto', display:'block',height:'50px', width:'50px',paddingTop:'6px'}}/>
    </div>
  );
}