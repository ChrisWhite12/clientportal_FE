
const timeConvert = (timeStart, timeEnd = new Date()) => {
    const zeroPad = (num, places) => {
        return String(num).padStart(places, '0')
    }
    
    const appStartDate = new Date(timeStart)
    const appEndDate = new Date(timeEnd)
    
    const dateStart = appStartDate.toDateString()

    const hrStart = zeroPad(appStartDate.getHours(),2)
    const minStart = zeroPad(appStartDate.getMinutes(),2)
    
    const hrEnd = zeroPad(appEndDate.getHours(),2)
    const minEnd = zeroPad(appEndDate.getMinutes(),2)

    return {hrStart, minStart, hrEnd, minEnd, dateStart}
}

export default timeConvert