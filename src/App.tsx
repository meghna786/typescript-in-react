import React, { useState } from "react";
import Button from "./Button";
import ButtonTwo from "./ButtonTwo";
import ButtonThree from "./ButtonThree";
import ButtonFour from "./ButtonFour";
import ButtonWithHooks from "./ButtonWithHooks";

function App() {

  const onclick=(clicked: boolean)=>{
    return 'yes clicked'
  }

  const [count, setCount]=useState(0);

  return <>
  <Button style={{ 
    color: "red",
    backgroundColor:'blue'
  }} 
  
  borderRadius={{
    'topLeft':5,
    'topRight':8
  }}

  onclick={onclick}

  setCount={setCount}
  >Click Me </Button>;

  <ButtonTwo ><i></i></ButtonTwo>
  <ButtonThree />
  <ButtonFour />


  <ButtonWithHooks />
  </>
}

export default App;

