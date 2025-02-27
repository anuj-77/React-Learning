import { useState } from 'react';
function App() {

// let counter = 7;
const [counter, setCounter] = useState(7);

const addValue = () =>{
  console.log( counter )
  setCounter ( counter + 1);
  if (counter>20){
    setCounter(`Value can not go beyound ${20}`)
  }
  else{
    setCounter ( counter + 1);
  }
}

const removeValue = () =>{
  console.log( counter );
  // setCounter(counter - 1)
  if(counter > 0){
    setCounter(counter - 1)
  }
  else{
    console.log("Value can not go in -ve"+ counter)
    // setCounter(0)
  }
}

  return (

    <div>

      <h1>Learning about Forms Today</h1>

      <form>

        <p>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        </p>

        <p>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" />
        </p>

        <p>
          <input type="submit" />
        </p>

      </form>

      <p>
        <h2>Counter Value = {counter}</h2>
      </p>

      <p>
        <button onClick={addValue}>Add Value{counter}</button>
      </p>

      <p>
        <button onClick={removeValue}>Remove Value{counter}</button>
      </p>

      <p>
        <button onClick={addValue}>Random{counter}</button>
      </p>

    </div>

  );
}

export default App;
