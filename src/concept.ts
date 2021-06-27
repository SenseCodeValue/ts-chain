

const sayHi = (name:string, age:number, gender:string): string => {
    return `hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi("대윤3", 29, "male"));

interface InterfaceHuman {
    name: string,
    gender: string,
    age: number
}

const person = {
    name: "Interface_대윤",
    gender: "male",
    age: 28,
}

const sayHi2 = (person: InterfaceHuman): string => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi2(person));


/* 
    만약 object를 params로 넘기고 싶으면
    TS가 object를 이해할 수 있도록 해줘야한다.
    그것을 해주는 것이 바로~~ interface이다.
    그런데 interface들은 JS로 컴파일되지 않는다. 그래서 정말 JS로 변환되어 사용되고 싶을 경우에는
    Class를 사용하면 된다.
*/

class ClassHuman {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    };
}

const yoon = new ClassHuman("Class_대윤", 28, "male");

const sayHi3 = (person: ClassHuman): string => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi2(yoon)); // Interface 또한 구조가 똑같기 때문에 가능하다.
console.log(sayHi3(yoon));
export {};
         