import React from 'react'

function Input(props) {
    const handleChange = (e) => {
        props.setForm({...props.form, [e.target.name]: e.target.value})
    }
  return (
    <input onChange={handleChange} value={props.value} name={props.name} className='outline-none mt-4 py-3 font-medium rounded px-4 text-sm bg-gray-100 placeholder:text-sm' type='text' placeholder={props.placeholder} />
  )
}

export default Input