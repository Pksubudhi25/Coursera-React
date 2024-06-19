import React from 'react'

export default function Btn() {
    const clickHandler = () =>{
        console.log('Clicked')
    }
  return (
    <div>
      <button onClick={clickHandler}>Click me</button>
    </div>
  )
}
