class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyName(): void {
        console.log(`I am ${this.name}`);
    }

    tellMyAge(): void {
        console.log(`I am ${this.age} years old`);
    }
}

// Instanciation des personnes
const john: Person = new Person("John", 40);
const mary: Person = new Person("Mary", 35);

// Appels des méthodes tellMyName et tellMyAge
john.tellMyName();
john.tellMyAge();

mary.tellMyName();
mary.tellMyAge();
