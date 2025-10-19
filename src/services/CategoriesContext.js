// CategoriesContext.js
import { createContext, useState, useEffect } from "react";
import ProductService from '../services/productservice';

export const CategoriesContext = createContext([]);

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const service = new ProductService('https://localhost:7020/api');

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await service.readCategoriesAsync();
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
