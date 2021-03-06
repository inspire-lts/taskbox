/// <reference types="react" />
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dart';
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
