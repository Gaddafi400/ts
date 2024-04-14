// employee

const groceries: {
  name: string;
} = {
  name: '',
};

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Gaddafi',
  retire: (date: Date) => {
    console.log(date.toLocaleString());
  },
};

employee.retire(new Date());

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') return 2 * weight;
  else return parseInt(weight) * 3;
}

console.log(kgToLbs(10));
console.log(kgToLbs('10'));

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UWidgets = Draggable & Resizable;

let textBox: UWidgets = {
  drag: () => {},
  resize: () => {},
};

type Quantity = 100 | 50;
let quantity: Quantity = 50;

function greet(name: string | null | undefined) {
  if (name) console.log('Hoila!');
  else console.log('Not possible to greet');
}

greet(null);

// +++++++++++++++++++
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(10);
if (customer !== null) console.log(customer.birthday);

// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?. [0]
// Optional call
let log: any = null;
log?.('a');


let cakes = [0, 10]
console.log(cakes?.[0])
