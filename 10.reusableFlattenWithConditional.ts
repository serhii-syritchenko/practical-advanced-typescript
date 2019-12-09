const numbers = [2, 1];

const someObject = {
	id: 21,
	name: "john"
}

const someBoolean = true;

// type FlattenArray<T extends any[]> = T[number];
// type FlattenObject<T extends object> = T[keyof T];

type Flatten<T> = T extends any[] ? T[number] : T extends object ? T[keyof T] : T;

// keyof T => 'id' | 'name'
// T['id' | 'name'] => T['id' | T['name'] => number | string

type NumbersArrayFlattened = Flatten<number>; // number
type SomeObjectFlattened = Flatten<object>; // number | string
type SomeBooleanFlattened = Flatten<typeof someBoolean>; // boolean

let sraka: NumbersArrayFlattened = [1,2,'3'];

const numbersArrayFlattened: NumbersArrayFlattened = '12';
const someObjectFlattened: SomeObjectFlattened = true;
// const someBooleanFlattened: SomeBooleanFlattened = true;