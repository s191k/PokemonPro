
function toCapitalizeFirstLetter(sentence:string) {
    // if (sentence.charAt(0).match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u)) {
    if (sentence.charAt(0).match(/^[a-zA-Zа-яА-Я']$/)) {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);;
    }
    return "First char is not letter!!"
}

export default toCapitalizeFirstLetter;