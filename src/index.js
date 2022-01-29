module.exports = function reverse (n) {
    let res = 0;
    let decs = 0;
    n = Math.abs(n);
    while (n > 0) {
        d = n % 10;
        res = (res*10) + d;
        n = parseInt(n / 10);
    }
    return res;
    
}

