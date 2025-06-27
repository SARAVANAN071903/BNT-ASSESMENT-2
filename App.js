
import CheckBox from "./component/CheckBox";
import Controlled from "./component/Controlled";
import Counter from "./component/Counter";
import Counter1 from "./component/Counter1";
import Grandparent from "./component/Grandparent";
import InputFeild from "./component/InputFeild";

import List from "./component/List";
import Login from "./component/Login";
import ParentComponent from "./component/ParentComponent";
import ToggleMessage from "./component/ToggleMessage";

const label="Enter your email :";
const placeholder="Enter your email";

function App() {

  return (
    <> 
      <h1>Welcome to the Assessment App</h1>
      <Counter/> 
      <br/>
      <ToggleMessage/>
      <br/>
      <Grandparent/>
      <br/>
      <ParentComponent/>
      <List/>
      <br/>
      <InputFeild label={label} placeholder={placeholder}/>
      <Counter1/>
      <br/>
      <Controlled/>
      <br/>
      <CheckBox/>
      <br/>
      <Login />
      
    
    
    </>
  );
}

export default App;
