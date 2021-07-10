import React, {FC, useState, ChangeEvent, ReactElement, useEffect} from "react";
import Icon from "../Icon/Icon";
import Input, { InputProps} from "../Input/input";
import { library} from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'
import useDebounce from "../../hooks/useDebounce";
import { KeyboardEvent } from "react";
import classNames from "classnames";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
library.add(fas)


interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = {}>  = T & DataSourceObject

export interface AuotoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: FC<AuotoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    renderOption,
    value,
    ...restProps
  } = props

  const [ inputValue, setInputValue] = useState(value)
  const [ suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const [ loading, setLoading] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1) // 下来菜单高亮
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const debouncedValue = useDebounce(inputValue, 500)
  useClickOutside(componentRef, () => { setSuggestions([])})

  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      const results = fetchSuggestions(debouncedValue)
      if (results instanceof Promise) {
        console.log('trigger')
        setLoading(true)
        results.then(data => {
          setSuggestions(data)
          setLoading(false)
        })
      } else {
        setSuggestions(results)
      }
    } else {
      setSuggestions([])
    }

    setHighlightIndex(-1)
    
  }, [debouncedValue])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true
  }

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generateDropDown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          const cnames = classNames('suggestion-item', {
            'item-highlighted': index === highlightIndex
          })
          return (
            <li key={index} onClick={() =>handleSelect(item)} className={cnames}>
              {renderTemplate(item)}
            </li>
          )
        })}
      </ul>
    )
  }

  const highLight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log("键盘事件")
    switch(e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      case 38:
        console.log(highlightIndex, '向上')
        highLight(highlightIndex - 1)
        break
      case 40:
        console.log(highlightIndex, '向下')
        highLight(highlightIndex + 1)
        break
      case 27: 
        console.log("esc键")
        setSuggestions([])
        break
      default: 
        break
    }
  }

  return (
    <div className='auto-complete' ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}/>
        {loading && <ul><Icon icon="spinner" spin/></ul>}
        {(suggestions.length > 0) && generateDropDown()}
    </div>
  )
}

export default AutoComplete