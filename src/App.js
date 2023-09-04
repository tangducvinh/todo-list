
import { useState } from 'react'

function App() {
  const inputSearchElement = document.querySelector('.input-search')

  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [status, setStatus] = useState(true)
  const [indexEdit, setIndexEdit] = useState()
  const [warning, setWarning] = useState(false)

  function handleGetValue(value) {
    setValue(value)
    setWarning(false)
  }

  function handleAdd() {
    if(value.trim() && data.includes(value.trim()) === false) {
      setData([...data, value.trim()])
      setValue('')
      inputSearchElement.focus()
    } else {
      handleWraning(value)
      inputSearchElement.focus()
    }
  }

  function handleDeleteItem(index) {
    setData(data.filter((work, ind) => ind !== index))
  }

  function handleDeleteAll() {
    setData([])
  }

  function handleSelectEdit(index) {
    setValue(data[index])
    inputSearchElement.focus()
    setStatus(false)

    setIndexEdit(index)
  }

  function handleEdit() {
    setStatus(true)
    setValue('')
    inputSearchElement.focus()

    if(value.trim() && data.includes(value.trim()) === false) {
      data.splice(indexEdit, 1, value.trim())
    } else {
      handleWraning(value)
      inputSearchElement.focus()
    }
  }

  function handleWraning(value) {
    if(data.includes(value.trim())) setWarning(true)
  }
  
  return (
    <div className="app">
      <div className="container">
        <div className="theme">
          <i className="fa-solid fa-moon icon-dart"></i>
        </div>

        <h1 className="title">Todo list</h1>

        <div className="search">
          <input
            className="input-search" 
            placeholder="Enter your task" 
            value={value}
            onChange={(e) => handleGetValue(e.target.value)}
          >
          </input>
          
          {warning ? <span className="warning-text">Work already exists</span> : ''}

          {status === true ? 
            <button 
              className="btn-add"
              onClick={handleAdd}
            >
              Add
            </button>
          :
            <button 
              className="btn-add"
              onClick={handleEdit}
            >
              Edit
            </button> 
          }
        </div>

        {data.length > 0 ? 
          <ul className="content">
            {data.map((work, index) => 
              <li className="item" key={index}>
                <span className="text">{index + 1}. {work}</span>
                <div 
                  className="delete"
                  onClick={() => handleDeleteItem(index)}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </div>
                <div 
                  className="edit"
                  onClick={() => handleSelectEdit(index)}
                >
                  <i className="fa-regular fa-note-sticky"></i>
                </div>
              </li>
            )}
          </ul>
        : ''}

        <button className="btn-delete" onClick={handleDeleteAll}>Delete All</button>

        <div></div>
      </div>
    </div>
  );
}

export default App
