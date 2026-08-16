import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [expName,setExpName]=useState("")
    const [amount,setAmount]=useState("")
    const [category,setCategory]=useState("")
    const [storeArray,setStoreArray]=useState([]);
    const [count,setCount]=useState(0);

    const add=()=>{
      if(expName==="" || amount==="" || category===""){
        alert("Invalid data!.. Please enter valid data!")
        return;
      }
      const obj={
        name:expName,
        price:amount,
        category:category
      }
      setStoreArray([...storeArray,obj])
      setExpName("");
      setAmount("");
      setCategory("");
    }
    const sum=()=>{
      setCount(Number(count)+Number(amount));
    }
    const calling=()=>{
      add()
      sum()
    }

  return (
   <div>
      <h1 id='title'>Expense Tracker</h1>
    <div id='main-card'>
      <div id='inputs'>
        <input type="text" placeholder='Enter Expanse Name...' value={expName} onChange={(e)=>setExpName(e.target.value)}/>
        <input type="number" placeholder='Enter Amount...' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <select id="expTracker" value={category} onChange={(e)=>setCategory(e.target.value)}>
           <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shoping">Shoping</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transport">Transport</option>
          <option value="Rent / Housing">Rent / Housing</option>
          <option value="Others">Others</option>
        </select>
        <button onClick={calling}>Add</button>
      </div>
        
        <div id='expTrackTable'>
          <table>
              <tr className='thead'>
                <th>Name</th>
                <th>Amount</th>
                <th>Category</th>
              </tr>
              {storeArray.map((key,index)=>{
                return(
                  <tr className='thead' key={index}>
                    <td>{key.name}</td>
                    <td>{key.price}</td>
                    <td>{key.category}</td>
                  </tr>
                )
              })}
               <tr>
                <td id="total">Total</td>
                <td>{count}</td>
              </tr>              
          </table>
        </div>
    </div>
    </div>
  )
}

export default App
