import React, {useState} from 'react'

export default function Appp({sport, index, handleClick}) {
  const [toggle, setToggle] = useState(true)

  const handleChange = (e) => {
    console.log(index)
    console.log(e.target.checked)

    if (e.target.checked === true) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
       */}
      <div>
        <input type="checkbox" onChange={(e) => handleChange(e)} />
        <span>{sport}</span>
        <button onClick={() => handleClick(index)} disabled={toggle}>
          X
        </button>
      </div>
    </div>
  )
}
