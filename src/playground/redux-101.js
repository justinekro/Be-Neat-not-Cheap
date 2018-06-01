import { createStore } from 'redux';

// action generators - function that returns action object
// makes it easier to spot errors

const add = ({a,b}) => {
  return a + b
}

console.log(add({a:1, b:12}))

// destructuring allows to grab only incrementBy and if it's not defined, it equals 1

const incrementCount = ({incrementBy = 1} = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  };
};

const decrementCount = ({decrementBy = 1} = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  };
};

// THIS IS A REDUCER !!

// 1. reducers are pure function : what the function returns depends on the input !! (not even changing a variable outside of the reducer scope. input / state, that's all)
// 2. never change state or action. instead, you return an object that will change the state

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state
    };
}


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount())
store.dispatch(decrementCount({ decrementBy: 5 }))

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
})

unsubscribe()

store.dispatch({
  type: "RESET"
})
