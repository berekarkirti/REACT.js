//---------------counter---------------//

export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";

export function INCREMENTCounter(){
    return{type:INCREMENT,payload:1}
}

export function DECREMENTCounter(){
    return{type:DECREMENT,payload:1}
}

//---------------theme---------------//

export const DARKTHEME = "DARKTHEME";
export const LIGHTTHEME = "LIGHTTHEME";

export function setDarkTheme(){
    return {type: DARKTHEME, payload: 'dark'}
}

export function setLightTheme(){
    return {type: LIGHTTHEME, payload: 'light'}
}