function validInput(amount) {
    const validate = new RegExp(/(?=.*\d)^[^-][Rp]?.?(([0-9]\d{0,12}([.]\d{3})*)|0)?(,\d{1,2})?$/)
    if (validate.test(amount)){
        amount = parseInt(amount.replace('Rp','').replace(/\./g, ''))
    } else {
        amount = 0
    }
    return amount
}

export default validInput