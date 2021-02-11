import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers , applyMiddleware } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { getNodeText } from '@testing-library/react';


// Combine Reducers
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});



const logger = store => {
    // This is the middileware 
    return next =>{
        return action =>{
           console.log('[Middleware] Dispatching', action);
           const result = next(action);
           console.log('[Middleware] Next state', store.getState())
           return result;
        }
    }
}


// Start Advanced React 

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
