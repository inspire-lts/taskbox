import React, { FC } from 'react'
import { ThemeProps } from '../Icon/Icon'
export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  width?: number
  theme?: ThemeProps;
}

const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight,
    showText,
    width,
    theme,
  } = props
  return (
    <div className="viking-progress-bar" style={{width: `${width}px`}}>
      <div className="viking-progress-bar-outer" style={{ height: `${strokeHeight}px`}}>
        <div 
          className={`viking-progress-bar-inner color-${theme}`}
          style={{width: `${percent}%`}}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary",
  width: 500
}
export default Progress;
