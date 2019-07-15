import React from "react";

export const SidebarContext = React.createContext({
  isOpen: true,
  toggleTheme: () => {}
});
