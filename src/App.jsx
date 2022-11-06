import styled from "styled-components";
import Input from "./Components/Input";
import Button from "./Components/Button";
import './index.css'


function App() {

  return (
    <div className="reg_page_student">

<div className="reg_page_leftside">
  <div className="reg_page_content">
    <h1 className="reg_page_text">Are you</h1>
    <h1 className="reg_page_text">an Admin?</h1>
    <button className="reg_page_admin">Admin Login</button>
  </div>
</div>
<div>
<div className="reg_page_Maincontent">
  <div className="reg_page_Helloadmin">Hello Student!!</div>
  <div className="reg_page_InputContainer">
    <Input type="text" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    <Input type="password" placeholder="Confirm Password" />
  </div>
  <div className="reg_page_Forgotpassword">forgot password?</div>
  <div className="reg_page_buttoncontainer">
    <Button content="Login" />
  </div>
  <HorizontalRule />
  <div className="reg_page_Register">Register Here</div>
  <div className="reg_page_buttoncontainer">
    <Button content="Sign Up" />
  </div>
</div>
</div>
    </div>  

  );
}
const HorizontalRule = styled.hr`
         position:relative;
         width:90%;
         height:0.5rem;
         border-radius:black;
         background:#24014E;
  `;
export default App;