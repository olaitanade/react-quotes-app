import React, {useState, useEffect} from 'react';
import './home.css';
import { createUser } from '../feature/auth';
import {uploadImage} from '../feature/storage'

function FirebaseApp() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email:'',
    password:''
  })

  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    uploadImage(file,(URL)=>{
      setFile(null);
      setURL(URL);
    })
  }

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
            <div>
              <h1>Upload image</h1>
              <form onSubmit={handleUpload}>
                <input 
                  type="file"
                  onChange={handleChange}
                  accept="image/*"
                />
                <button>upload to firebase</button>
              </form>
              <img src={url} alt="" />
            </div>
        </div>
      );
  }

  return ((loading)? "Loading":mainview())
  
}

export default FirebaseApp;