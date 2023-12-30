import { ADD_TODO, DELETE_ALL } from "../action";

const initialState = [
    {id:1, todo: 'Buy Laptop', completed: false},
    {id:2, todo: 'Learn Reducer', completed: false},
    {id:3, todo: 'Learn Firebase', completed: false},
];

export const operationsReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];

            case DELETE_ALL:
                return[]
        default: return state;
    }

}