// src/services/ServiceContext.jsx
import React, { createContext, useContext } from "react";
import  ProductService  from "./productservice";

const ServiceContext = createContext(null);

export const ServiceProvider = ({ children }) => {
  // const service = new ProductService("http://localhost:7020/api"); // ✅ Adjust URL as needed
  const service = new ProductService("https://joby-api-dev-gzejf4ewg7fygad4.swedencentral-01.azurewebsites.net/api"); // ✅ Adjust URL as needed


  return (
    <ServiceContext.Provider value={{ service }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useServices must be used inside a <ServiceProvider>");
  }
  return context;
}