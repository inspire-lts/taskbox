import { FC } from 'react';
import { MenuItemProps } from './menuItem';
import { MenuProps } from './menu';
import { SubMenuProps } from './subMenu';
export declare type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
