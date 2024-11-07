// import { useState } from "react";
// import "./App.css";
// import instagram from "./assets/instagram.png";

// function App() {
//   const [toggle, setToggle] = useState(true);

//   return (
//     <>
//       {toggle ? (
//         <div className="container">
//           <div className="signInLogo">
//               <img src={instagram} alt="instagram" />
//           </div>
//           <div className="box">
//             <input type="text" placeholder="Phone number,username,or email" />
//             <input type="text" placeholder="Password" />
//             <button onClick={() => setToggle(!toggle)}>Sign in</button>
//             {console.log(toggle)}
//             <p className="signInPara">
//               Don't have account?<span> Sign up</span>
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="container">
//           <div className="signUpLogo">
//             <img src={instagram} alt="instagram" />
//           </div>
//           <div className="box">
//             <input type="text" placeholder="Mobile Number or Email"/>
//             <input type="text" placeholder="FullName"/>
//             <input type="text" placeholder="Phone number,username,or email" />
//             <input type="text" placeholder="Password" />
//             <button>Sign up</button>
//             <p className="signUpPara">have an account?<span> Log in</span></p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

//--------------------------------------------------

import { useState } from 'react';
import './App.css';
 
import logo from "./assets/instagram.png"

function App() {
  const [login,setlogin]=useState(true)

  const loginSwitch = () => {
    setlogin(!login)
  }
  
  return (
   <div id='Container'>
        <div id="user">
              <img src={logo} alt="" />
              <input hidden={login} type="text" name="" placeholder='Mobile Number or Email' id="" />
              <input hidden={login} type="text" name="" placeholder='Full Name' id="" />
              <input type="email" name="" id="" placeholder='Phone number, username, or email'/>
              <input type="text" name="" id="" placeholder='Password' />
              <button>{login?"Sign in":"Sign up"}</button>
          <div id='footer'>
            {login?"Don't have account?":"have an account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
          </div>
          </div>  
   </div>
  );
}

export default App;

