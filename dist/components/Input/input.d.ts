import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";
declare type InputSize = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    width?: number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<InputProps>;
export default Input;
