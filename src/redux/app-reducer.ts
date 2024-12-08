import { getAuthUserData } from "./auth-reducer.ts";
import { InferActionsTypes } from "./redux-store.ts";

let initialState = {
    initialized: false,
    isMobile: window.innerWidth <= 768, // Добавлено для определения мобильного состояния
    drawerVisible: false, // Добавлено для управления состоянием бокового меню
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
            };
        case 'SN/APP/TOGGLE_DRAWER': // Добавлено
            return {
                ...state,
                drawerVisible: !state.drawerVisible,
            };
        case 'SN/APP/SET_IS_MOBILE': // Добавлено
            return {
                ...state,
                isMobile: action.payload,
            };
        default:
            return state;
    }
};

export const actions = {
    initializedSuccess: () => ({ type: 'SN/APP/INITIALIZED_SUCCESS' } as const),
    toggleDrawer: () => ({ type: 'SN/APP/TOGGLE_DRAWER' } as const), // Добавлено
    setIsMobile: (isMobile: boolean) => ({ type: 'SN/APP/SET_IS_MOBILE', payload: isMobile } as const), // Добавлено
};

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess());
    });
};

export default appReducer;
