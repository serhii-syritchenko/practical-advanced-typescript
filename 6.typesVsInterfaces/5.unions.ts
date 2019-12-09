type PetType = IDog | ICat; // different - we cann't union inteface for class

interface IPet extends PetType { // error

}

class Pet implements PetType { // error

}

interface IDog {
	
}

interface ICat {
	
}