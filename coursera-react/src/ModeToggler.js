import React from 'react'

function ModeToggler() {
    let darkModeOn = true;
    const daarkMode = <h1>Dark mode on</h1>
    const lightMode = <h1>Dark mode on</h1>
    const clickHandler = () =>{
        darkModeOn = !darkModeOn
        if(darkModeOn){
            console.log("Dark mode on")
        }
        else{
            console.log("Light mode on")
        }
    }
  return (
    <div>
      {darkModeOn?daarkMode:lightMode}
      <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default ModeToggler
