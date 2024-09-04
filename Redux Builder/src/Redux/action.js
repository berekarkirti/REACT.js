//---------------counter---------------//

export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";

export function handleAdd() {
    return { type: INCREMENT, payload:1 };
}

export function handleReduce() {
    return { type: DECREMENT, payload:1 };
}

//---------------theme---------------//

export const DARKTHEME = "DARKTHEME";
export const LIGHTTHEME = "LIGHTTHEME";

export function handleTheme(payload) {
    return { type: payload === 'dark' ? DARKTHEME : LIGHTTHEME, payload };
}
