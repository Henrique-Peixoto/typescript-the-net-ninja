// Interfaces
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: 'Henrique',
  age: 21,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  }
}

let someone: isPerson;

const greetPerson = (person: isPerson): void => {
  console.log('Hello, ', person.name);
}

greetPerson(me);
