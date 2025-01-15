import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.fetch(new Request("https://data.sec.gov/submissions/CIK0001011006.json")).then((response) => response.json()).then((data) => {
    console.log(data);
});
