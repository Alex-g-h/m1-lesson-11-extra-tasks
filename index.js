const peopleWithVisa = [
  {
    firstName: "Stasia",
    lastName: "Ward",
    criminalRecord: true,
    passportExpiration: "19.06.2040",
  },
  {
    firstName: "Elliot",
    lastName: "Baker",
    criminalRecord: false,
    passportExpiration: "04.06.2041",
  },
  {
    firstName: "Leighann",
    lastName: "Scott",
    criminalRecord: true,
    passportExpiration: "31.07.2039",
  },
  {
    firstName: "Nick",
    lastName: "Pop",
    criminalRecord: false,
    passportExpiration: "31.12.2010",
  },
];

/**
 * Allowing visa for non-criminal and not expired passport people
 * @param {*} people People info array
 * @returns People with allowed visa
 */
const allowVisa = (people) => {
  const result = people.filter((person) => {
    const isNonCriminal = !person.criminalRecord;
    const today = new Date();
    const passportExpired = new Date(
      person.passportExpiration.split(".").reverse()
    );
    const isNotExpired = today.getTime() < passportExpired.getTime();
    return isNonCriminal && isNotExpired;
  });
  return result;
};

const result = allowVisa(peopleWithVisa);
console.log("result", result);
