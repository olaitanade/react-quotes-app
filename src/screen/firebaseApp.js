import React, {useState, useEffect} from 'react';
import './home.css';
import { createUser } from '../feature/auth';

function FirebaseApp() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email:'',
    password:''
  })

  const inputChange = (e) => {
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const register = () => {
    createUser(data.email,data.password)
  };
  

  const mainview = () => {
    return (
        <div className="Home">
            <div>
                <label>
                Email:
                <input type="text" name="email" value={data.email} onChange={inputChange} />
                </label>
                <label>
                Password:
                <input type="text" name="password" value={data.password} onChange={inputChange} />
                </label>
                <button onClick={register}>
                    Register
                </button>
            </div>
        </div>
      );
  }

  return ((loading)? "Loading":mainview())
  
}

export default FirebaseApp;