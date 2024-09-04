import { DARKTHEME, LIGHTTHEME } from "./action";

const initialThemeState = {
    theme: "light",
};

export const themeReducer = (state = initialThemeState, action) => {
    switch (action.type) {
        case DARKTHEME:
            return { theme: 'dark' };
        case LIGHTTHEME:
            return { theme: 'light' };
        default:
            return state;
    }
};
