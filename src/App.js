import logo from './logo.svg';
import { useState } from 'react';
import List from './Components/List';
import Add from './Components/Add';
function App() {
  const [nums, setNums] = useState([])
  return (
    <div className="App">
      <h2 className='text-3xl mx-auto w-fit mb-16 text-pink-700'>Hello, Things To do</h2>
      <Add nums={nums} setNums={setNums}/>
      <List nums = {nums} setNums = {setNums}/>
      {console.log(nums)}
    </div>
  );
}

export default App;
