import React from 'react'

const Input = (props) => {
  return (
    <div>
      <input
        className='p-2 w-full text-lg outline-secondaryColor'
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
        type={props.type}
        placeholder={props.placeholder}
        id={props.id} />
    </div>
  )
}

export default Input