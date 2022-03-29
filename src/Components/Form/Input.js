import React from 'react'
import styles from './Input.module.css';

const Input = ({label, id, type, value, onChange, error, onBlur}) => {
  return (
    <div className={styles.wrapper} >
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input onBlur={onBlur} onChange={onChange} value={value}  id={id} name={id} type={type} className={styles.input} />
      {error && <p className={styles.error}>{error}</p>}
    </div>

  )
}

export default Input