const test: any = ['a', 'b', 'c', 'd', 'e'];

test.indexOf('a');
test.e;
test() // no error when test is any

function randomCustom(items: string[]) {
	return items[Math.floor(Math.random() * items.length)];
}

randomCustom(test)

interface IComment {
	date: Date;
	message: string;
}

interface IDataService {
	getData(): unknown;
}

let service: IDataService;

const response = service.getData();
// response.fd;

if (typeof response === 'object') {
	console.log(response.)
}
