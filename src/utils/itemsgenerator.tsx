
import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../interface";

export function itemsGenerator(items: TUserPath[]) {
    const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
        if (item.name && item.path) {
            acc.push({
                key: item.name,
                label: <NavLink to={item.path}>{item.name}</NavLink>
            })
        }

        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map(child => ({
                    key: child.name,
                    label: <NavLink to={child.path as string}>{child.name}</NavLink>
                }))
            })
        }

        return acc;

    }, [])

    return sidebarItems;
}