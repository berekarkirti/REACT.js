import { useState } from "react";
import './App.css'
function CounterApp(){
    let [Counter , setCounter] = useState(0);
    return(
        <div className="App">
           <div style={{boxShadow:'8px 15px 25px 3px rgba(0,0,0,0.40)',border:'3px white',margin:'auto',marginTop:'10%',borderRadius:'8px',width:'500px',height:'300px',padding:'50px',backgroundColor:'rgb(0, 128, 128,0.799)',color:'#ffff'}}>
              <h1>Counter</h1>
              <h2 style={{fontSize:'55px',fontWeight:'600'}}>{Counter}</h2>

              <div className="btn-group"                                        style={{display:'flex',justifyContent:'space-around'}}>
                <button onClick={()=>setCounter(Counter + 1)}                   style={{backgroundColor:'#ffff',color:'teal',padding:'10px 20px',borderRadius:'8px',fontSize:'19px',border:'none',fontWeight:'600'}}>Increament</button>
                <button onClick={()=>setCounter(0)}                             style={{backgroundColor:'#ffff',color:'teal',padding:'10px 20px',borderRadius:'8px',fontSize:'19px',border:'none',fontWeight:'600'}}>Reset</button>
                <button onClick={()=>setCounter(Counter > 0 ? Counter - 1 : 0)} style={{backgroundColor:'#ffff',color:'teal',padding:'10px 20px',borderRadius:'8px',fontSize:'19px',border:'none',fontWeight:'600'}}>Decreament</button>
              </div>

           </div>
        </div>
    )
}
export default CounterApp;