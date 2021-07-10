import { FC } from 'react';
import { ThemeProps } from '../Icon/Icon';
export interface ProgressProps {
    percent: number;
    strokeHeight?: number;
    showText?: boolean;
    width?: number;
    theme?: ThemeProps;
}
declare const Progress: FC<ProgressProps>;
export default Progress;
