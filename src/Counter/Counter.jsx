
import { useDispatch,useSelector } from 'react-redux'
import { decrement } from '../Redux/Counter'
import { increment } from '../Redux/Counter'
export default function Counter() {

   const {count}=useSelector(state=>state.counter)  
   const dispatch=useDispatch()
  return (
    <>
   <div class="card"style={{width:"30%",marginLeft:"30%",marginTop:"5%",padding:"2%"}}>
  {/* <div class="card-body"> */}

<h6 style={{marginLeft:"50%",color:"blue"}}>{count}</h6>
<div id="counter">
    <button onClick={()=>{dispatch(increment())}}style={{width:"40%",border:"red",marginLeft:"5%"}}>+</button>
    
    <button onClick={()=>{dispatch(decrement())}}style={{width:"40%",border:"green",marginLeft:"10%"}}>-</button>
</div>
  {/* </div> */}
</div>
    </>
  )
}
