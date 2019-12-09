type Cat = IPet & IFeline;

let cat: Cat;
// cat.

interface ICat extends IPet, IFeline {};

let iCat: ICat;
// iCat.

interface IPet {
	pose(): void;
}

interface IFeline {
	nightvision: boolean
}