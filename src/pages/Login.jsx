import React, { useState } from 'react';
import '../pages/Login.css';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "NihonTechnology" && password === "reactjs") {
            swal("Login Successfull", "Your login is Successfully Verified");
        }
        else {
            swal("Login is  not Successfull", "Please Check your Name and Passsword ");
        }

    }
    return (
        <div className="container bg-container">
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <form onSubmit={handleSubmit}>
                            <h1 className='fw-bold fs-2 text-info'>User Authentication</h1>
                            <label>Name:</label>
                            <input type="text" value={name} className="form-control" placeholder="Enter your UserName" onChange={(e) => setName(e.target.value)} />

                            <label>Password:</label>
                            <input type="password" value={password} className="form-control" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} />
                            <div className='text-center mt-2' >
                                <button className='btn btn-warning'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

    )
}
export default Login;

//Below another Method//
// import React, { useState } from 'react';
// import '../App.css';
// import swal from 'sweetalert';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function Login() {
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (name === "NihonTechnology" && password === "reactjs") {
//             swal("Login Successfull", "Your login is Successfully Verified");
//         }
//         else {
//             swal("Login is  not Successfull", "Please Check your Name and Passsword ");
//         }

//     }
//     return (
//         <div className="container bg-container">
//                 <div className='row justify-content-center'>
//                     <div className='col-md-4'>
//                         <form onSubmit={handleSubmit}>
//                             <h1 className='fw-bold fs-2 text-info'>User Authentication</h1>
//                             <label>Name:</label>
//                             <input type="text" value={name} className="form-control" placeholder="Enter your UserName" onChange={(e) => setName(e.target.value)} />

//                             <label>Password:</label>
//                             <input type="password" value={password} className="form-control" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} />
//                             <div className='text-center mt-2' >
//                                 <button className='btn btn-warning'>Login</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//     )
// }
// export default Login;
