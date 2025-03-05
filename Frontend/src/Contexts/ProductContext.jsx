import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("Relevance");

  useEffect(() => {
    axios
      .get("https://my-meesho-git-main-sahildhage555s-projects.vercel.app/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));

    axios
      .get("https://my-meesho-git-main-sahildhage555s-projects.vercel.app/api/filters")
      .then((res) => setFilters(res.data))
      .catch((err) => console.error("Error fetching filters:", err));
  }, []);

  return (
    <ProductContext.Provider value={{ products, filters, selectedFilter, setSelectedFilter }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
