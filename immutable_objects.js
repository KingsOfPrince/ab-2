const myName = "Prince";

console.log(myName);


const personData = {
    name: "Prince",
    age: 19,
    car: "Porsche Macan GTS"
};

console.log(personData);


const personDataTwo = {
    ...personData,
    job: ""
};

console.log(personDataTwo);


const personDataThree = {
    ...personDataTwo,
    job: "Jobless"
};

console.log(personDataThree);


const { job, ...newPerson} = personDataThree;

console.log(newPerson);

/*
-_-
*/