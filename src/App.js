import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Main from './components/main';
import {store} from './redux/configurestore';
import {loaduser} from './redux/actions/actioncreators';
//import { PersistGate } from 'redux-persist/integration/react';

class App extends Component {
componentDidMount(){
 store.dispatch(loaduser());

}

render(){
  return (
    <Provider store={store} >
      
        <BrowserRouter>     
          <Main/>
        </BrowserRouter>
     
    </Provider> 
  );
}}

export default App 