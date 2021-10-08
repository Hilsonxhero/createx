export function required(text) {
    return value => !!value || text;
}


export function verifyEmail(text = 'یک ایمیل درست را وارد کنید') {
    return value => /^([a-zA-Z0-9]([\.\w]*)@([\w]{2,9}[\.])[a-zA-Z]{2,4})$/.test(value) || text
}

export function verifyUsername(text = 'یک نام کاربری درست را وارد کنید') {
    return value => /^[a-z0-9_-]{3,15}$/.test(value) || text
}


export function lessThan(length, field, nullable = false) {

    return value => {
        if (!value) {
            if (nullable) {
                return true;
            }
            return field + ' الزامیست '
        }

        return (value ? value.length <= length : false) || `طول ${field} نباید بیشتر از ${length} کاراکتر باشد`
    }
}


export function moreThan(length, field, nullable = false) {
    return value => {
        if (!value) {
            if (nullable) {
                return true;
            }
            return field + ' الزامیست '
        }

        return (value ? value.length >= length : false) || `طول ${field} نباید کمتر از ${length} کاراکتر باشد`
    }
}