import { DECREMENT, INCREMENT } from "./action";

const initialState = {
    counter: 10,
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + action.payload };
        case DECREMENT:
            return { counter: state.counter - action.payload };
        default:
            return state;
    }
};
