import MenuItem from './menuItem';
import Menu from './menu';
import SubMenu from './subMenu';
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
