import React, { useState } from "react";
import Context from '../context/Context';

function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState()
  return (
    <Context.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default AppProvider;
