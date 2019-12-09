interface IPetTest {
	name: string;
	age: number;
	weight?: number;
}

// type ReadonlyPet = {
// 	readonly [K in keyof IPetTest]-?: IPetTest[K];
// }

const petTest: IPetTest = { name: 'Test', age: 10 };
const readonlyPet: ReadonlyPet = { name: 'Test', age: 20, weight: 20 };

petTest.age = 25;
readonlyPet.age = 30;