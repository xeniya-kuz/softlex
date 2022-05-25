import './Input.css'


export function Input({ id, placeholder, value, onChange, type, inputRef, className, autoComplete, ...rest }) {

    return (
        <input className={`input ${className}`} id={id} value={value} type={type} ref={inputRef} onChange={onChange} placeholder={placeholder} autoComplete={autoComplete} {...rest}></input>
    )
}