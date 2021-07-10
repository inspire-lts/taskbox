import Menu, { MenuProps } from "./menu";
import SubMenu from "./subMenu";
import MenuItem from "./menuItem";
import { Story } from "@storybook/react";

export default {
  title: 'lts/Menu',
  component: Menu,
} 



export const HorizontalMenu: React.VFC<{}>  = () => (
  <Menu mode={'horizontal'} defaultOpenSubMenus={['3']}>
    <MenuItem > 
      cool link
    </MenuItem>
    <MenuItem  disabled>
      cool link1
    </MenuItem>
    <MenuItem >
      cool link2
    </MenuItem>
    <SubMenu title='dropdown'>
      <MenuItem>1</MenuItem>
      <MenuItem>2</MenuItem>
      <MenuItem>3</MenuItem>
    </SubMenu>
  </Menu>
)

export const VerticalMenu: React.VFC<{}>  = () => (
  <Menu mode={'vertical'} defaultOpenSubMenus={['3']}>
    <MenuItem > 
      cool link
    </MenuItem>
    <MenuItem  disabled>
      cool link1
    </MenuItem>
    <MenuItem >
      cool link2
    </MenuItem>
    <SubMenu title='dropdown'>
      <MenuItem>1</MenuItem>
      <MenuItem>2</MenuItem>
      <MenuItem>3</MenuItem>
    </SubMenu>
  </Menu>
)


