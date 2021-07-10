import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";
import Icon from "../Icon/Icon";

type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'>{
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  width?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => {
  const {style,disabled, size, icon, prepend, append, width, ...restProps} = props
  const classes = classNames('input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })
  // 当value为空的时候组件会由非受控组件变成受控组件，会报错 
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  // defaultValue和 value不能同时存在
  if('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }
  return (
    <div className={classes} style={{ width: `${width}px`}}>
      {prepend && <div className='input-group-prepend'>{prepend}</div>}
      {icon && <div className='icon-wrapper'><Icon icon={icon} title={`title-${icon}`}></Icon></div>}
      <input
        className='input-inner'
        disabled={disabled}
        {...restProps}
        />
        {append && <div className='input-group-append'>{append}</div>}
    </div>
  )
}

export default Input