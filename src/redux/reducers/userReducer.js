import { CALLBACK_TYPE } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture";

const { CHANGE_NAME, CHANGE_EMAIL, CHANGE_SURNAME, CHANGE_TELNUMBER } = require("../actions/actionTypes");

const initialState = {
    name: "",
    surName:"",
    email:"",
    telNumber:""

};

const userReducer = (state = initialState, action ) => {

    console.log("state",state,"action",action)

    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name : action.payload};
        case CHANGE_SURNAME:
            return {...state, surName:action.payload};
        case CHANGE_EMAIL:
            return {...state, email:action.payload};
        case CHANGE_TELNUMBER:
            return {...state, telNumber:action.payload};
            
    }
    return state;
};

export default userReducer;