import './Button.css'

export function Button({ onClick, className, type, children, ...rest }) {

    return (
        <button className={`button ${className}`} type={type} onClick={onClick} {...rest}>{children}</button>
    )
}

