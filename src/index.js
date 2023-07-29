import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Appp from './details'
// import list from './list'

const arr = ['play cricket', 'play video game', 'read book']

function App() {
  const [data, setData] = useState(arr)
  // const [deleteToggle, setDeleteToggle] = useState(false)

  const handleClick = (index) => {
    setData(
      data.filter((sport, ind2) => {
        return index !== ind2
      }),
    )
  }

  return (
    <div className="App">
      <h>list</h>
      {data?.map((sport, index) => (
        <Appp
          sport={sport}
          index={index}
          handleClick={handleClick}
          // deleteToggle={deleteToggle}
        />
      ))}
      {/* <Appp
        handleClick={handleClick}
        data={data}
        toggle={toggle}
        setToggle={setToggle}
      /> */}
      {/* <list handleClick={handleClick} data={data} /> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
