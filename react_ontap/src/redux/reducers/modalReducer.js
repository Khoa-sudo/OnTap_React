import React from 'react'

const stateDefaute = {
    component:<p>Default com</p>,
    handleSubmit:()=>{
        alert('Default submit');
    }
}

export const modalReducer = (state = stateDefaute,action) => {
    switch (action.type) {
        case 'OPEN_FORM':
            {
                state.component=action.component;
                state.handleSubmit=action.handleSubmit;
                return {...state};
            }
        default:
            return state;
    }
}
