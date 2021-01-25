export function reverseString(string) {
    let newStr = '';
    let lastIndex = string.length - 1;
    for (let i = 0; i <= lastIndex; i++) {
        newStr += string[lastIndex - i];
    }
    return newStr;
}