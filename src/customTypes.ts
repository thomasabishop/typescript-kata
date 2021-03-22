/*
type Age = {
  name: string;
  yearOfBirth: number;
  currentYear: number;
  ageNow(): number;
};

const thomas: Age = {
  name: 'Thomas',
  yearOfBirth: 1988,
  currentYear: 2021,
  ageNow: function () {
    return this.currentYear - this.yearOfBirth;
  },
};

console.log(thomas.ageNow());

// Use a function to generate method
function ageNowFunc(varName: Age): number {
  return varName.currentYear - varName.yearOfBirth;
}

console.log(ageNowFunc(thomas));

const martha = {
  name: 'Thomas',
  yearOfBirth: 1997,
  currentYear: 2021,
  ageNow: function () {
    return this.currentYear - this.yearOfBirth;
  },
  gender: 'female',
};

const addition: Age = martha;
console.log(martha.ageNow());

*/
