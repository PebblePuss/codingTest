const morse = {
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

const solution = (letter) => {
    let result = [];
    const text = letter.split(" ");

    for(value of text) {
        result.push(morse[value]);
    }

    return result.join("");
}

console.log(solution(".... . .-.. .-.. ---"));