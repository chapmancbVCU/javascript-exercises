const findTheOldest = function(people) {
    const oldest = people.sort(function(a, b) {
        const lastPerson = getYear(a) - a.yearOfBirth;
        const nextPerson = getYear(b) - b.yearOfBirth;

        return lastPerson > nextPerson ? -1 : 1;
    });
    return oldest[0];
};

function getYear(people) {
    if(people.hasOwnProperty('yearOfDeath')) {
        return people.yearOfDeath;
    } else {
        return new Date().getFullYear();
    }
}

// Do not edit below this line
module.exports = findTheOldest;
