// import { useState } from "react";
// import './App.css'
// function CounterApp(){
//     let [Counter , setCounter] = useState(0);
//     return(
//         <div className="App">
//            <div style={{boxShadow:'8px 15px 25px 3px rgba(0,0,0,0.40)',border:'3px white',margin:'auto',marginTop:'10%',borderRadius:'8px',width:'500px',height:'300px',padding:'50px',backgroundColor:'rgb(0, 128, 128,0.799)',color:'#ffff'}}>
//               <h1>Counter</h1>
//               <h2 style={{fontSize:'55px',fontWeight:'600'}}>{Counter}</h2>

//               <div className="btn-group"                                        style={{display:'flex',justifyContent:'space-around'}}>
//                 <button onClick={()=>setCounter(Counter + 1)}                   style={{backgroundColor:'#ffff',color:'teal',padding:'10px 20px',borderRadius:'8px',fontSize:'19px',border:'none',fontWeight:'600'}}>Increament</button>
//                 <button onClick={()=>setCounter(0)}                             style={{backgroundColor:'#ffff',color:'teal',padding:'10px 20px',borderRadius:'8px',fontSize:'19px',border:'none',fontWeight:'600'}}>Reset</button>
//                 <button onClick={()=>setCounter(Counter > 0 ? Counter - 1 : 0)} style={{backgroundColor:'#ffff',color:'teal',padding:'10px 20px',borderRadius:'8px',fontSize:'19px',border:'none',fontWeight:'600'}}>Decreament</button>
//               </div>

//            </div>
//         </div>
//     )
// }
// export default CounterApp;

import { useState } from "react";


export default function App() {
  const [count, setcount] = useState(0);

  function CheckPrime() {
    let fact = 0;
    for (let i = 1; i <= count; i++)
    {
      if (count % i == 0) 
      {
        fact++;
      }
    }
    if (fact   == 2) 
    {
      return "true";
    } 
    else 
    {
      return "false";
    }
  }

  return (
    <div style={{boxShadow:'8px 15px 25px 3px rgba(0,0,0,0.40)',border:'3px white',margin:'auto',marginTop:'7%',borderRadius:'8px',width:'500px',height:'350px',padding:'50px',backgroundColor:'rgb(0, 128, 128,0.799)',color:'#ffff'}}>
      <h2>Welcome to Counter 2.0</h2>
       <div className="btn-group">
          <button style={{backgroundColor:'#ffff',color:'teal',padding:'10px 12px',borderRadius:'8px',fontSize:'21px',border:'none',fontWeight:'600'}} disabled={count == 0} onClick={() => setcount(count - 1)} >-1</button>
          <button style={{backgroundColor:'#ffff',color:'teal',padding:'10px 12px',borderRadius:'8px',fontSize:'21px',border:'none',fontWeight:'600',marginLeft:'5%'}} onClick={() => setcount(count + 1)}>+1</button>
          <br />
          <br />
          <button style={{backgroundColor:'#ffff',color:'teal',padding:'10px 20px',borderRadius:'8px',fontSize:'21px',border:'none',fontWeight:'600'}} onClick={() => setcount(0)}>Reset Count</button>
          <br />
          <br />
       </div>
      <h2 style={{fontSize:'30px',margin:'auto'}}>Count:{count}</h2>

      <h3 style={{fontSize:'21px'}}>This Number is : {count % 2 == 0 ? "Even" : "Odd"}</h3>
      <h3 style={{fontSize:'21px'}}>Prime Number is :{CheckPrime()}</h3>
    </div>
  );
}
