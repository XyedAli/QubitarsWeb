import React from "react";

export interface NavItem {
  id: string;
  label: string;
  DropdownComponent?: React.ComponentType<any>;
}

export interface CapabilityItem {
  id: string;
  name: string;
  href?: string;
  icon: {
    type: string;
    component: React.ComponentType<any>;
  };
}

