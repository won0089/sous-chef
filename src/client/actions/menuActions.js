import menuApi from 'apis/menuApi';
import { menuActionTypes as types } from 'actions/actionTypes';

export function getMenus() {
    return async (dispatch) => {
        try {
            dispatch(fetchMenus());
            const weeklyMenu = await menuApi.getWeeklyMenus();
            dispatch(updateMenus(weeklyMenu));
        } catch (error) {
            dispatch(fetchMenuFailed());
        }
    };
}

export function fetchMenus() {
    return {
        type: types.fetchMenu
    };
}

export function updateMenus(menus) {
    return {
        type: types.fetchMenuSuccess,
        weekly: { ...menus }
    };
}

export function fetchMenuFailed() {
    return {
        type: types.fetchMenuFail
    };
}