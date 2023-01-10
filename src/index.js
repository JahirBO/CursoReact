import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsKaD4dBXWFCbMgP-JGLjnzSlXLJYZRQI",
  authDomain: "proyecto-react-2c9a3.firebaseapp.com",
  projectId: "proyecto-react-2c9a3",
  storageBucket: "proyecto-react-2c9a3.appspot.com",
  messagingSenderId: "597862731922",
  appId: "1:597862731922:web:987c9e132d62dbbf5a164b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
