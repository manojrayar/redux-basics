import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNum,decNum } from './actions';


const App=()=> {
  const mystate=useSelector(state=>state.changeNumber)
  const dispatch=useDispatch();
  return (
    <div className="container text-center">
      <h1 className="display-1  mt-5">Redux Implementation</h1>
      <div className="mt-5">
        <h3 className="display-5"> <span className="m-3"><button className="btn btn-success btn-lg" onClick={()=>dispatch(incNum())}> Increment + </button> </span> <span >   {mystate} </span> <span className="m-3"><button className="btn btn-danger btn-lg" onClick={()=>dispatch(decNum())}> Decrement - </button> </span></h3>
      </div>
    </div>
  );
}

export default App;
