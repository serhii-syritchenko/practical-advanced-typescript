interface Foo {
	a: string
}

interface Foo {
	b: string
}

let foo: Foo;
// same interfaces merged

type Too = {
	a: string;
}

type Too = {
	b: string;
}
// same types cann't merge