
function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="theme">
          <i className="fa-solid fa-moon icon-dart"></i>
        </div>

        <h1 className="title">Todo list</h1>

        <div className="search">
          <input className="input-search" placeholder="Enter your task"></input>
          <button className="btn-add">Add</button>
        </div>

        <ul className="content">
          <li className="item">
            <span className="text">First task</span>
            <div className="delete">
              <i class="fa-regular fa-trash-can"></i>
            </div>
            <div className="edit">
              <i class="fa-regular fa-note-sticky"></i>
            </div>
          </li>

          <li className="item">
            <span className="text">First task</span>
            <div className="delete">
              <i class="fa-regular fa-trash-can"></i>
            </div>
            <div className="edit">
              <i class="fa-regular fa-note-sticky"></i>
            </div>
          </li>
        </ul>

        <button className="btn-delete">Delete All</button>

        <div></div>
      </div>
    </div>
  );
}

export default App;
