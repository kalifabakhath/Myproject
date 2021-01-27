import { createStore, combineReducers, applyMiddleware} from 'redux';
import {auth} from './reducers/authreducer';
import {food } from './reducers/foodreducer';
import { apiMiddleware } from 'redux-api-middleware';
import {errors} from './reducers/errorreducer';
import thunk from 'redux-thunk';
//import {persistStore,persistReducer} from 'redux-persist';
//import storage from 'redux-persist/lib/storage'
//import createEncryptor from 'redux-persist-transform-encrypt'
//import logger from 'redux-logger';


/*const encryptor = createEncryptor({
    secretKey: 'my-super-secret-key',
    onError: function(error) {
      console.log(error);
    }
  })
/*const rootConfig = {
    key:'auth',
    secretKey: 'my-super-secret-key',
    storage:storage,
    transforms: [encryptor],
    blacklist:['errors']
}*/
//const rootReducer = combineReducers({auth,errors})
//const perReducer = persistReducer(rootReducer,rootConfig)
const middleware = [apiMiddleware,thunk]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const perReducer = combineReducers({auth,errors,food})
export const store = createStoreWithMiddleware(
                    perReducer,
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
             );
             
//export const perStore= persistStore(store);
       
