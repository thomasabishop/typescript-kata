class Age {
  personName: string;
  birthYear: number;
  constructor(personName: string, birthYear: number) {
    this.personName = personName;
    this.birthYear = birthYear;
  }
  currentYear(): number {
    return new Date().getFullYear();
  }
  get age(): number {
    return this.currentYear() - this.birthYear;
  }
  get dataOutput(): string {
    return `${this.personName} is ${this.age} years old`;
  }
}

const mum = new Age('Mary Jo', 1959);

console.log(mum.dataOutput);
