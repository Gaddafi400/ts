"use strict";
var _a;
const groceries = {
    name: '',
};
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
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log('Hoila!');
    else
        console.log('Not possible to greet');
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(10);
if (customer !== null)
    console.log(customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let cakes = [0, 10];
console.log(cakes === null || cakes === void 0 ? void 0 : cakes[0]);
//# sourceMappingURL=index.js.map