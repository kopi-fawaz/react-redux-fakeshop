import { ActionTypes } from "../contants/action-types"

export const setProducts = (porducts) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: porducts
    };
}

export const selectedProduct = (porduct) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: porduct
    };
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    };
}