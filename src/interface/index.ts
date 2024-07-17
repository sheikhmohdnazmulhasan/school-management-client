import { ReactNode } from "react";

export interface TRoutes {
    path: string;
    element: ReactNode;
}


export interface TUserPath {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
}

export interface TSidebarItem {
    key: string;
    label: ReactNode;
    children?: TSidebarItem[];
}