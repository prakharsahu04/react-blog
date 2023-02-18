import { Link } from "react-router-dom";
import "./topbar.css" 

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topleft">
      <i className="topicon fa-brands fa-square-facebook"></i>
      <i className="topicon fa-brands fa-twitter"></i>
      <i className="topicon fa-brands fa-pinterest"></i>
      <i className="topicon fa-brands fa-instagram"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
            <li className="toplistitem">
              <Link className="link" to="/">Home</Link>
            </li>
            <li className="toplistitem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="toplistitem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="toplistitem"><Link className="link" to="/">WRITE</Link></li>
            <li className="toplistitem">
              {user && "LOGOUT"}</li>
              
        </ul>
      </div>

      <div className="topright">
        {
          user ? (
            <img 
            className="topimg"
            src="https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg" alt=""
            />
          ) : (
            <ul className="toplist">
              <li className="toplistitem">
            <Link className="link" to="/login">
              LOGIN
              </Link>
              </li>
              <li className="toplistitem">
            <Link className="link" to="/register">
             REGISTER
              </Link>
              </li>
           
              </ul>
          )
        }
       
   
        <i className="topsearchicon1 fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
