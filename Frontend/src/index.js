import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../src/Components/style.css'

import { ProductProvider } from "./Contexts/ProductContext";

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById("root")
);
