export const CHANGE_NOMINAL = 'CHANGE_NOMINAL'
export const changeNominal = event => dispatch => {
    dispatch ({
        type: CHANGE_NOMINAL,
        payload: {
            value: event.target.value
        }
    })
};

export default {
    changeNominal
}
