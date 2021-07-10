import classNames from "classnames"
import React, { useState } from "react"
import { useContext } from "react"
import { CSSTransition } from "react-transition-group"
import Icon from "../Icon/Icon"
import { MenuContext } from "./menu"
import { MenuItemProps } from "./menuItem"

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = ({index, title, children, className}) => {
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
  const [menuOpen, setMenuOpen] = useState(isOpened)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })

  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 300)
  }

  // 这两个事件处理可以写成一个，但是这样分开感觉更好区分
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleOpen
  } : {}
  const hoverEnvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
  }: {}

  const renderChildren = () => {
    const subMenuClasses = classNames('submenu', {
      'menu-opened': menuOpen,
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName} = childElement.type
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
        }
      else {
        console.error('Warning: SubMenu has a child which is not a MenuItem')
        }
      })

    return (
      <CSSTransition
        in={menuOpen}
        timeout={300}
        classNames='zoom-in-top'
        appear
        unmountOnExit>
      <ul className={subMenuClasses}>
         {childrenComponent}
      </ul>
      </CSSTransition>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEnvents}>
      <div className='submenu-title' {...clickEvents}>
        {title}
        <Icon icon='angle-down' className='arrow-icon'/>
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu