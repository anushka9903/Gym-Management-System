import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {thunk} from "redux-thunk";
import authReducer from "./Auth/Reducer";
import subscriptionReducer from "./Subscription/Reducer";
import trainerReducer from "./Trainers/Reducer";


const rootReducers=combineReducers({

    auth:authReducer,
    subscription:subscriptionReducer,
    trainer:trainerReducer
    
   

});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))