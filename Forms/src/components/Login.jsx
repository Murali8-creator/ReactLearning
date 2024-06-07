import { useRef, useState } from "react";


export default function Login() {

  // const [emailIsInvalid, setEmailIsInvalid]=useState();

  const [invalid, setInvalid] = useState({
    email: false,
    password: false,
  });

   const emailRef = useRef();
   const passwordRef = useRef();

   function handleSubmit(event) {
     event.preventDefault();
     const email = emailRef.current.value;
     const password = passwordRef.current.value;
     
     const emailIsInvalid = !email.includes('@');
     const passwordIsInvalid = password.trim().length < 8;

     if(emailIsInvalid){
      setInvalid((prevInvalid) => ({
        ...prevInvalid,
        email: true,
      }));
      
     }

      if(passwordIsInvalid){
        setInvalid((prevInvalid) => ({
          ...prevInvalid,
          password: true,
        }));
      }

    }
 
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef}/>
          <div className="control-error">{invalid.email && <p>Invalid Email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={passwordRef}/>
          <div className="control-error">{invalid.password && <p>Invalid Password</p>}</div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
