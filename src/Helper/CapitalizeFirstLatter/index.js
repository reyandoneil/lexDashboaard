export const CapitalizeFirstLatter = (str) => {
    var splitStr = str.toLowerCase().split(' ')
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).topUpperCase() + splitStr[i].substring(1)
    }
    console.log(splitStr,'string');
    return splitStr.join(' ')
}