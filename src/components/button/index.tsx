import { type ComponentProps } from "react";

import styles from './styles.module.css'

type ButtonProps = ComponentProps<'button'>;



export function Button({ children, ...props }: ButtonProps) {
    return (
        <button {...props} className={styles.container}>{children}</button>
    )
}