import {combineReducers} from "redux"
import {DonateReducer} from "./donateReducer"
import {CharityReducer} from "./charityReducer"
import {VolunteerReducer} from "./volunteerReducer"
import { PostReducer } from "./postReducer"
export const rootReducer=combineReducers({DonateReducer,CharityReducer,VolunteerReducer,PostReducer})