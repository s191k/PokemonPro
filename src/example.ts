//homework
//Ex 1
function concat(wordOne:string, wordTwo:string):string {
    return wordOne + wordTwo;
}
//Ex 2
interface ExInterface {
    howIDoIt: string,
    simeArray: {[index: number]: any},
    withData: [object]
}

const MyHometask: ExInterface = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}
//Ex 3
interface MyArray<T> {
	[N: number]: T;
	reduce():T;
}