import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../src/Components/style.css'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { ProductProvider } from "./Contexts/ProductContext";

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById("root")
);
