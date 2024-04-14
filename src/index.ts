// employee

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
