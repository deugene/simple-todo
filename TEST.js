let gmt = new Date().getTimezoneOffset();
let i = Date.now();
i -= gmt;
console.log(new Date(i).toISOString());
