import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { sortReducer } from './sort/reducer';
import { paginationReducer } from './pagination/reducer';
import { loginReducer } from './login/reducer';
import { homeReducer } from './home/reducer';
import { editReducer } from './edit/reducer';
import { formReducer } from './form/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const config = {
    key: 'SoftlexTask',
    storage,
    whitelist: ['login'],
}


const persistedReducer = persistReducer(
    config,
    combineReducers({
        home: homeReducer,
        pagination: paginationReducer,
        sort: sortReducer,
        login: loginReducer,
        edit: editReducer,
        form: formReducer
    })
)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);