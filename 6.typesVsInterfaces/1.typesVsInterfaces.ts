interface IAnimal {
	age: string;
	eat(): void;
	speak(): string;
}

type AnimalTypeAlias = {
	age: string;
	eat(): void;
	speak(): string;
}

let animalInterface: IAnimal;
let animalTypeAlias: AnimalTypeAlias;

animalTypeAlias = animalInterface;