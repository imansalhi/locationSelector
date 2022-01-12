import './App.css';
import SelectLocation from './pages/SelectLocation';
import {
  Provider, createStoreHook,
  createDispatchHook,
  createSelectorHook
} from 'react-redux'
import { createStore } from 'redux';
import combineReducers  from './services/Redux/reducers';
import react, { useState } from "react";
const MyContext = react.createContext(null)

// Export your custom hooks if you wish to use them in other files.
// export const useStore = createStoreHook(MyContext)
// export const useDispatch = createDispatchHook(MyContext)
// export const useSelector = createSelectorHook(MyContext)

const myStore = createStore(combineReducers)

function App() {
 
  return (
    <Provider context={MyContext} store={myStore}>
      <SelectLocation />
    </Provider>
  );
}

export default App;
