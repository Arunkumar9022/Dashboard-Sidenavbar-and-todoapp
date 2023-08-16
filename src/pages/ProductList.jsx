import React, { useState } from 'react'

function Productlist() {
  const [newtask, setNewTask] = useState("");
  const [task, setTask] = useState([]);

  const addtask = () => {
    setTask([ ...task, newtask ])
  }
  const deletetask = (index) => {
    var duplicatearray = [...task];
    duplicatearray.splice(index, 1);
    setTask(duplicatearray);
  }

  const todolist = task.map((object, index) => {
    return <>
      <div className='row justify-content-center'>
        <h1 className='col-md-6 mb-2 text-left'>{index + 1}{object}</h1>
        <button onClick={() => deletetask(index)} className="col-md-2 mt-2 btn btn-danger mt-2">DELETE</button>
      </div>
    </>
  })
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6 mb-2'>
          <input type="text" className="form-control" value={newtask} name="newtask" onChange={(e) => setNewTask(e.target.value)} />
        </div>
        <div className='col-md-2 mb-2'>
          <button onClick={addtask} className='btn btn-warning'>ADD TASK</button>
        </div>
      </div>
      {
        todolist
      }
    </div>
  )
}

export default Productlist;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function ProductList() {
//     const [newtask, setNewTask] = useState("");
//     const [task, setTask] = useState([]);

//     const addtask = () => {
//         // alert(newtask);
//         setTask([...task, newtask])
//     }
//     const deletetask = (index) => {
//         var duplicatearray = [...task]

//         duplicatearray.splice(index, 1);

//         setTask(duplicatearray);
//     }

//     const tasklist = task.map((object, index) => {
//         return <><div className='row justify-content-center'>
//             <h1 className='col-md-6 mb-2 text-left'>{index + 1}{object}</h1>
//             <button onClick={()=>deletetask(index)} className='col-md-1 mt-2 btn btn-danger'>DELETE</button>
//         </div></>
//     })
//     return (
//         <div className='container'>
//             <h1>React-Todolist</h1>
//             <div className='row justify-content-center'>
//                 <div className="col-md-6">
//                     <input type="text" className='form-control' placeholder="taskname" value={newtask} onChange={(e) => { setNewTask(e.target.value) }} />
//                 </div>
//                 <div className='col-md-2'>
//                     <button onClick={addtask} className='btn btn-success'>ADD TASK</button>
//                 </div>
//             </div>
//             {
//                 tasklist
//             }
//         </div>
//     )
// }
// export default ProductList;