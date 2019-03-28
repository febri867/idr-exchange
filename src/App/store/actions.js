export const CHANGE_NOMINAL = 'CHANGE_NOMINAL';
export const changeNominal = value => dispatch => {
    dispatch ({
        type: CHANGE_NOMINAL,
        payload: value
    })
};

export default {
    changeNominal,
}