import React from "react";

export interface NavItem {
  id: string;
  label: string;
  DropdownComponent: React.ComponentType;
}

