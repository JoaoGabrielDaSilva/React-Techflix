export default function DateHelper(date) {

    if (!date) {
        return ''
    }

    date = date.split('-')
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dez'
    ]

    const daySufix = [
        'st', 'nd', 'rd'
    ]

    let day = parseInt(date[2], 10)
    let month = parseInt(date[1], 10) - 1
    const year = date[0]
    
    for (let i = 0; i < daySufix.length + 1; i++) {
        if (day === i) {
            day += `${daySufix[i - 1]}`
            break
        }
       if (i === daySufix.length) {
            day += 'th'
       }
    }

    for (let i = 0; i < months.length; i++) {
        if (month === i) {
            month = months[i]
        }
    }

    const formatedData = `${month} ${day}, ${year}`
    return formatedData

}
