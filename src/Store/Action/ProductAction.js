import axios from 'axios'
import {
    GET_DATA_PRODUCT,
    // ADD_PRODUCT,
    // DELETE_PRODUCT,
    // EDIT_PRODUCT,
    SET_IS_LOADING_PRODUCT,
    SET_NO_DATA_PRODUCT
} from './index'
const url = 'https://localhost:44359/api/PackageTour';

export const setLoadingProduct = (payload) => {
    return {
        type: SET_IS_LOADING_PRODUCT,
        payload
    }
}

export const setNoData = (payload) => {
    return {
        type: SET_NO_DATA_PRODUCT,
        payload
    }
}


export const getAllProductByCompanyId = (companyId) => {
    return async (dispatch) => {
        const onSuccess = (dataProduct) => {
            console.log('berhasil ');
            dispatch({
                type: GET_DATA_PRODUCT,
                payload: dataProduct.data
            })
            dispatch(setLoadingProduct(false))
        }

        try {
            dispatch(setLoadingProduct(true))
            dispatch(setNoData(false))
            const getDataProduct = await axios.get(
                `${url}/?companyId=${companyId}`,
                {
                    headers: {}
                }
            )
            onSuccess(getDataProduct)

        } catch (err) {
            dispatch(setNoData(true))
            console.log(err);
        }

    }
}

