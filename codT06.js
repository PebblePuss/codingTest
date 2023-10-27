const solution = ( num ) => {
    return Array.from({length: num}, (_, i) => i + 1).filter(value => (num % value) === 0);
}