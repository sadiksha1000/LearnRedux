import {useSelector,useDispatch} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';


function App() {
  const counter=useSelector(state=>state.counter);
  const isLogged=useSelector(state=>state.isLogged);
  const dispatch=useDispatch();

  return (
    <div>
      Counter {counter}
      {isLogged?<h3>Valuable info i shouldn't see</h3>:null}
      <br/>
      <br/>
      <button onClick={()=>dispatch(increment())}>+</button>
      <br/>
      <br/>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
