const findTheOldest = function(people) {
  var oldestName="";
  var biggestNumber = 0;
  let deathDate = 0;
for(let i=0; i<people.length;i++){
  if (!people[i].yearOfDeath){
    deathDate = 2023;
  }else{
    deathDate = people[i].yearOfDeath;
}
  let birthDate = people[i].yearOfBirth;
  let yearsOld = deathDate-birthDate;
  if(yearsOld>biggestNumber){
    biggestNumber=yearsOld;
    oldestName = people[i];
  }
}
return oldestName;
};


// Do not edit below this line
module.exports = findTheOldest;





















/*  let oldestPerson = people[0];
  for (let i = 1; i < people.length; i++) {
    const currentPerson = people[i];
    const oldestYearOfDeath = oldestPerson.yearOfDeath || new Date().getFullYear();
    const currentYearOfDeath = currentPerson.yearOfDeath || new Date().getFullYear();
    const oldestAge = oldestYearOfDeath - oldestPerson.yearOfBirth;
    const currentAge = currentYearOfDeath - currentPerson.yearOfBirth;
    if (currentAge > oldestAge) {
      oldestPerson = currentPerson;
    }
  }
  return oldestPerson;
};*/
