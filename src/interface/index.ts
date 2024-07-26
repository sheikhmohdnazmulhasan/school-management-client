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

export interface TUser {
    userId: string;
    role: string;
    iat: number;
    exp: number
}

export interface TAuthState {
    user: null | TUser;
    token: null | string
}

export interface TLoginCredential {
    id: string;
    password: string;
}