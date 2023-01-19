import './App.css';
import { useState } from 'react';




// const FormEntry = () => {

//   const [value, setValue] = useState('Įveskite tekstą į laukelį');

//   const difValue = (e) => {
//     setValue(e.target.value)
//   }


//   return (
//     <>
//       {/* <input type="text" onChange={difValue} /> */}
//       <input type="text" onChange={(e) => setValue(e.target.value)} />
//       <div className="result">{value}</div>
//     </>
//   )
// }

const FormEntry = () => {
  const [task, setTask] = useState([]);
  const [currentTask, setCurrentTask] = useState({
    name: '',
    done: false
  });

  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState();

  const handleForm = (e) => {
    e.preventDefault();

    if (edit) {
      task[editId].name = currentTask.name;
      setTask([...task]);
      setEdit(false);
    } else {
      setTask([...task, currentTask])
    }

    setCurrentTask({
      name: '',
      done: false
    });
  }

  const handleDone = (e, index) => {
    task[index].done = !task[index].done;
    setTask([...task]);
  }

  // Delete task

  const handleDelete = (index) => {
    task.splice(index, 1);
    setTask([...task]);
  }

  // Edit task

  const handleEdit = (index) => {
    setCurrentTask(task[index])
    setEdit(true);
    setEditId(index);
  }


  return (
    <>
      <h1>To Do List</h1>
      <form className="input-group" onSubmit={handleForm}>
        <input type="text"
          className="form-control"
          onChange={(e) => setCurrentTask({ name: e.target.value, done: false })}
          value={currentTask.name} />

        <button className="btn btn-primary">Save</button>
      </form>
      {task.map((value, index) =>
        <li key={value.name + index} className={value.done ? 'done' : ''}>

          <div className="d-flex justify-content-between">
            <span onClick={(e) =>
              handleDone(e, index)}>{value.name}</span>

            <div className="d-flex">
              <button className="btn btn-primary" onClick={() => handleEdit(index)}>Edit</button>
              <button className="btn btn-danger" onClick={(() => handleDelete(index))}>Delete</button>
            </div>
          </div>
        </li>
      )}
    </>
  )
}


const App = () => {
  return (

    <main>
      <div className="container">
        <FormEntry />
      </div>
    </main>

  );
}

export default App;
