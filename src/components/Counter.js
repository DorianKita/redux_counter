import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Component } from 'react';


const Counter = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const incrementHandler = () => {
    dispatch({type: "increment"})
  };

  const increaseHandler = (number) => {
    dispatch({type: "increase", amount:number})
  }

  const decrementHandler = () => {
    dispatch({type: "decrement"})
  };

  const toggleCounterHandler = () => {
    dispatch({type:'visibility'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {state.showCounter ?  <div className={classes.value}>{state.counter}</div> : <h2>Press toggle counter button to show counter</h2>}
      <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={() => increaseHandler(5)}>Increse by 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter

//Class based component 

// class Counter extends Component{

//   incrementHandler(){
//     this.props.increment();
//   }
//   decrementHandler(){
//     this.props.decrement();
//   }
//   toggleCounterHandler(){
    
//   }

//   render(){
//     return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//       <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//       <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return{
//     increment: () => dispatch({type:'increment'}),
//     decrement: () => dispatch({type:'decrement'}),

//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
