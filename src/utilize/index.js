export const utilize = {
    truncateWord(word, endString) {
        if(word.length >= endString){
            return word.substring(0, endString)+'...';
        }
        return word
    }
}