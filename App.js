
import Controlled from "./component/Controlled";
import Counter from "./component/Counter";
import Counter1 from "./component/Counter1";
// import InputField from "./component/Inputfield";
import List from "./component/List";
import ParentComponent from "./component/ParentComponent";
import ToggleMessage from "./component/ToggleMessage";



function App() {
  return (
    <> 
      <h1>Welcome to the Assessment App</h1>
      <Counter/> 
      <br/>
      <ToggleMessage/>
      <br/>
      <ParentComponent/>
      <List/>
      <br/>
      {/* <InputField/> */}
      <Counter1/>
      <br/>
      <Controlled/>
      <br/>
      
      
    
    </>
  );
}

export default App;
