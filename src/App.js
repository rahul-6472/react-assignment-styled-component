import "./App.css";
import ButtonComponent from "./component/ButtonComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent  border = "none"  backgroundColor= "#42a5f5" color= "white" text = "Primary Button" />
      <ButtonComponent  border = "1px solid #cecece" text = "Default Button" />
      <ButtonComponent  border = "1px dashed #cecece" text = "Dashed Button" />
      <br/>
      <br/>
      <ButtonComponent  border = "none" text = "Text Button" />
      <ButtonComponent  border = "none" color= "#03a9f4" text = "Link Button" />
    </div>
  );
}

export default App;
