import { combineReducers, legacy_createStore} from "redux"
import { counterReducer } from "../Redux/counterReducer"
import { themeReducer } from "../Redux/themeReducer"

const rootreducer=combineReducers({counter: counterReducer,theme:themeReducer})
export const store=legacy_createStore(rootreducer)