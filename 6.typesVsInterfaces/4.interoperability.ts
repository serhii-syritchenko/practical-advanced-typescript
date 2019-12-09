type Pet = {
	pose(): void;
}

interface IFeline {
	nightvision: boolean;
}

interface ICat extends IFeline, Pet {

}

type Cat = IFeline & Pet;

class HouseCat implements IFeline, Pet {}