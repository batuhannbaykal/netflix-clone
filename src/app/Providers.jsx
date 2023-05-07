"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

//dark-light mode için.
const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
