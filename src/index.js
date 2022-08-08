import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB3P8_TZ74U73-z2-EBanTa3_fpmp7-DM",
  authDomain: "ryan-edwards-portfolio.firebaseapp.com",
  projectId: "ryan-edwards-portfolio",
  storageBucket: "ryan-edwards-portfolio.appspot.com",
  messagingSenderId: "176867234745",
  appId: "1:176867234745:web:e9bf4cef7fdf8e102c5c68",
  measurementId: "G-5E463DE2DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

registerServiceWorker();
