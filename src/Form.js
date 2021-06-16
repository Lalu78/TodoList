import React, { useState, useEffect } from "react";
import "./Form.css";
import { db } from "./firebase";
import { auth } from './firebase';
import { Link, useHistory } from "react-router-dom";

function Form() {
  const history = useHistory();
  const [input, setInput] = useState();
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [input3, setInput3] = useState();
  const [input4, setInput4] = useState();
  const [input5, setInput5] = useState();
  const [input21, setInput21] = useState();
  const [input7, setInput7] = useState();
  const [input8, setInput8] = useState();
  const [state1, setState] = useState("");
  const [post, setPost] = useState([]);

  // Get data from firebase databse code start
  useEffect(() => {
    db.collection("Formdata").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // set data to firebase databse

    const onSubmit = (event) => {
      
       auth.createUserWithEmailAndPassword(input2, input21)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                   }
           
            })
        .catch(error=>alert(error.message))
      

    db.collection("Formdata").add({
      firstname: input,
      lastname: input1,
      email: input2,
      mobileNO: input3,
      dob: input4,
      State: input8,
      gender: input5,
      password:input21,
    

   
    });
    setPost("");
    };
    

    const onLogin = (e) => {
        auth.signInWithEmailAndPassword(input2, input21)
            .then((auth) => {
                history.push('/')
            })
        .catch(error=>alert(error.message))
    }

  const Inputdata = (e) => {
    const data = e.target.value;
    setInput(data);
  };
  const Inputdata1 = (e) => {
    const data = e.target.value;
    setInput1(data);
  };
  const Inputdata2 = (e) => {
    const data = e.target.value;
    setInput2(data);
    };
    const Inputdata21 = (e) => {
        const data = e.target.value;
        setInput21(data);
      };
  const Inputdata3 = (e) => {
    const data = e.target.value;
    setInput3(data);
  };
  const Inputdata4 = (e) => {
    const data = e.target.value;
    setInput4(data);
  };

  const Inputdata5 = (e) => {
    const data = e.target.value;
    setInput5(data);
  };
//   const Inputdata6 = (e) => {
//     const data = e.target.value;
//     setInput6(data);
//   };
  const Inputdata7 = (e) => {
    const data = e.target.value;
    setInput7(data);
  };
  const Inputdata8 = (e) => {
    const data = e.target.value;
    setInput8(data);
  };

  

    return (
      <div className="result">
    <div className="main_div">
      <div className="parent_div">
        <div className="child_div">
          <form className="form">
            <label>First Name</label>
            <input
              type="text"
              placeholder=" enter your first Name"
              onChange={Inputdata}
            />
            <br />
            <label>Last Name</label>
            <input
              type="text"
              placeholder="enter your last name"
              onChange={Inputdata1}
            />
            <br />
            <label>Email </label>
            <input
              type="emali"
              placeholder="enter your email"
              onChange={Inputdata2}
                      />
             <br/>
            <label>Password</label>
            <input
              type="password"
              placeholder="enter your password"
              onChange={Inputdata21}
            />
            <br />
            <label>Mobile No</label>
            <input
              type="number"
              placeholder="enter your Mobile No"
              onChange={Inputdata3}
            />
            <br />
            <label>D.O.B</label>
            <input type="date" onChange={Inputdata4} />
                      <br />
        <div onChange={Inputdata5} >
             <label>Gender</label>
            <input type="radio" name="gender" value="Male" /> Male
            <input type="radio" name="gender" value="Female" />Female
            <input type="radio" name="gender" value="Other"/> Other
            </div>

            
            <label>State</label>
            <select onChange={Inputdata8}>
              <option>Bihar</option>
              <option>U.P</option>
              <option>M.P</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Kolkata</option>
            </select>
            <br />
            <button type="submit" onClick={onSubmit}>
             SIGNUP
            </button>
          </form>
        </div>
        </div>

         <div className="parent_div">
        <div className="child_div">
          <form className="form">
            
            <br />
            <label>Email </label>
            <input
              type="emali"
              placeholder="enter your email"
              onChange={Inputdata2}
                      />
             <br/>
            <label>Password</label>
            <input
              type="password"
              placeholder="enter your password"
              onChange={Inputdata21}
             />
           
            <button type="submit" onClick={onLogin}>
            LOGIN
            </button>
          </form>
        </div>
      </div>       
      
      </div>
      {post.map((e) => (
        <div>
          <p><strong>firstname:</strong>{e.firstname}</p>
          <p> <strong>lastname:</strong>{e.lastname}</p>
          <p> <strong>email:</strong>{e.email}</p>
          <p> <strong>MobileNO:</strong>{e.mobileNO}</p>
          <p> <strong>DOB:</strong>{e.dob}</p>
          <p> <strong>STATE:</strong>{e.State}</p>
              <p> <strong>Gender:</strong>{e.gender}</p>
              <p> <strong>Password:</strong>{ e.password}</p>
        
        </div>
      ))}
            
      
      
    
 
   </div>
  );
}

export default Form;
