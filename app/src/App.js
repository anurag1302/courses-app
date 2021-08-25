import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const callAPI = async () => {
    const api = `https://localhost:5001/GetAllCourses`;
    let response = await fetch(api);
    let data = await response.json();
    setList(data);
  };
  return (
    <div className="App">
      <button onClick={callAPI}>Call API</button>
      {list.length > 0
        ? list.map((item) => {
            return (
              <div key={item.id}>
                <div>{item.courseName}</div>
                <div>
                  <img src={item.courseBook} alt="book-img" />
                </div>
                <div>{item.coordinatorName}</div>
                <div>--------------------------------</div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
