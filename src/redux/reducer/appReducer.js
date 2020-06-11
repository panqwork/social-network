import { isAuthThunk } from "./authReducer";

const APP_INIT = 'APP_INIT';

const initialState = {
    isInit: false
}

export const appReducer = (state=initialState,action) => {
    switch(action.type) {
        case APP_INIT:
            return {...state, isInit: true}
        default:
            return state;
    }
}

export const appInitAction = () => ({type: APP_INIT})


export const appInit = () => (dispatch) => {
    const promise = dispatch(isAuthThunk())

    promise.then(()=> {
        dispatch(appInitAction())
    })
}