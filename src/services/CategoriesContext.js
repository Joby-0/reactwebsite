// CategoriesContext.js
import { createContext, useState, useEffect } from "react";
import { _productService } from "../services/productservice";
export const CategoriesContext = createContext([]);

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await _productService.readCategoriesAsync();
        setCategories(res);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories, loading }}>
      {children}
    </CategoriesContext.Provider>
  );
}
