import React, {useState, useEffect, useRef} from "react";
import "./style1.scss";

export default function App() {
  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [open, setOpen] = useState(false)
  const [config, setConfig] = useState(false)

  const ref = useRef()
  
  useOnClickOutside(ref, () => setConfig(!config))
 

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }




  return (
    <div className="web-page">
      <nav>
          {open ? 
              <img className="nav-x" onClick={() => setOpen(!open)} src="https://alvimurtaza.github.io/Interview-Front-end/images/l0-l1-l2-engineer/close.png" alt="close"/> :
              <img className="hamburger" onClick={() => setOpen(!open)} src="https://alvimurtaza.github.io/Interview-Front-end/images/l0-l1-l2-engineer/hamburger.png" alt="hamburger" /> }
          {open ? 
             <div className="drop-down-menu" >
                <p className="dashboard">Dashboard</p>
                <p className="account">Account</p>
                <p className="help">Help</p>
           </div>
             : null }
          <img id="logo" src="https://alvimurtaza.github.io/Interview-Front-end/images/l0-l1-l2-engineer/logo.png" alt="logo"/>
            <p className="nav-max">Dashboard</p>
            <p className="nav-max">Account</p>
            <p className="nav-max">Help</p>
            <p className="nav-max">Logout</p>
         <img className="logout" src="https://alvimurtaza.github.io/Interview-Front-end/images/l0-l1-l2-engineer/logout.png" alt="logout"/>
      </nav>
      <div className="center-under-nav">
          <img id="profilePic" src="https://alvimurtaza.github.io/Interview-Front-end/images/l0-l1-l2-engineer/profile.png" alt="profile"/>
          <div className="profile" >
              <h1>MY ACCOUNT</h1>       
              <div className="account-box">
                <div className="inputContainer box1">
                  <p className="placeholder">Name</p>
                  <input className="answer" id="name" />
                </div> 
                <div className="inputContainer box2">
                  <input id="mobile" className="answer" placeholder="Mobile" />
                </div>
                <div className="inputContainer box3"> 
                  <p className="placeholder">Email</p>       
                  <input className="answer" id="email" />
                </div>  
              </div>
        </div>
        <h1 className="subTitle">Select Configuration</h1>
        <div className="descriptions">
          <div className="grid-controller">
            <div className="circle-buttons">
              <img className="check" src="https://alvimurtaza.github.io/Interview-Front-end/images/l0-l1-l2-engineer/check.png" alt="check"/>
              <span className="input-circle-1" onClick={() => setChecked(!checked)}>
                <input type="radio" onChange={() => setChecked(!checked)} checked={checked} />
              </span>
              <span className="input-circle-2" onClick={() => setChecked2(!checked2)}>
                <input type="radio" onChange={() => setChecked2(!checked2)} checked={checked2}/>
              </span>
            </div>
            <div className="config-section">
              <section className="first-two-sections">
                <h3>Manual Configuration</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
              </section>
              <section className="first-two-sections">
                <h3>Service Access</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed massa leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu varius felis. Integer posuere urna ut mi porta, vel fringilla dolor convallis. Sed laoreet sodales sapien vel vestibulum. Nulla dictum eros ut efficitur porttitor. Mauris dignissim, lectus sit amet euismod pretium, ex purus condimentum erat, eu feugiat nisi ipsum ac eros.</p>
              </section> 
              <section>
                <h3>Semi-auto Configuration</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
              </section>
              <section>
                <h3>Automatic Configuration</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
              </section>
            </div>
          </div>
          <div className="buttons">
              <button className="config-button" onClick={()=>setConfig(!config)} >{<img className="config-image" src="https://alvimurtaza.github.io/Interview-Front-end/images/l0-l1-l2-engineer/configure.png" alt="configure"/>}Update Configuration</button>
              {config ? 
                <div className="modal-container">
                  <div className="modal" ref={ref}>
                    <img src="https://alvimurtaza.github.io/Interview-Front-end/images/l0-l1-l2-engineer/clap.png" alt="clap"/>
                    <h1>Great Job!</h1>
                    <p>Your configurations have been updated successfully</p>
                  </div>
                </div>
                : null}
              <button className="cancel-button">{<img className="cancel-image" src="https://alvimurtaza.github.io/Interview-Front-end/images/l0-l1-l2-engineer/cancel.png" alt="cancel"/>}Cancel</button>
          </div>
      </div>
      </div>
    </div>
  );
}
