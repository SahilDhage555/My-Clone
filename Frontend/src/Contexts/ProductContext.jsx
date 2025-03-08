import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("Relevance");

  useEffect(() => {
    axios
      .get("https://my-clone-back.vercel.app/products")
      .then((res) => {
        console.log("Products API Response:", res.data);
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error("Products response is not an array:", res.data);
        }
      })
      .catch((err) => console.error("Error fetching products:", err));

      axios.get("https://my-clone-back.vercel.app/filters")
  .then((res) => {
    console.log("Filters API Response:", res.data);
    if (Array.isArray(res.data)) {
      setFilters(res.data);  // ✅ Correct way
    } else {
      console.error("Filters response is not an array:", res.data);
    }
  })
  .catch((err) => console.error("Error fetching filters:", err));
  }, []);

  return (
    <ProductContext.Provider value={{ products, filters, selectedFilter, setSelectedFilter }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
