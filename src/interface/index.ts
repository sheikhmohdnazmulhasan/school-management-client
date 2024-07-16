import { ReactNode } from "react";

export interface TRoutes { path: string; element: ReactNode; }
export interface TSidebarItem { key: string; label: ReactNode; children?: TSidebarItem[]; }