"use strict";
let employee = {
    id: 1,
    name: 'Gaddafi',
    retire: (date) => {
        console.log(date.toLocaleString());
    },
};
employee.retire(new Date());
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return 2 * weight;
    else
        return parseInt(weight) * 3;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10'));
//# sourceMappingURL=index.js.map