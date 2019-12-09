interface StringContainer {
	value: string;
	format(): string;
	split(): string[];
}

interface NumberContainer {
	value: number;
	nearestPrime: number;
	round(): number;
}

interface Item<T> {
	id: T,
	container: T extends string ? StringContainer : NumberContainer;
}

type ReadonlyPet<T> = {
	readonly [K in keyof Item<T>]-?: Item<T>[K];
}

let item: ReadonlyPet<string> = {
	id: '12',
	container: null
}

item.id = 'dfs'

// item.container.

// never ignore
type ArrayFilter<T> = T extends any[] ? T : never;

type StringOrNumbers = ArrayFilter<string | number | string[] | number[]>