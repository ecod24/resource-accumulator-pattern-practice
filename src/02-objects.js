/**
 * Return an array of every object's name.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {string[]} - An array of names.
 */
function getAllNames(people) {
  let names=[];
  for(let person of people){
    names.push(person["name"])
  }
  return names;
}

/**
 * Given an array of people objects, return the single object with a name that matches the given name (case-insensitive). If no name matches, return `null`
 *
 * @param {Object[]} people - An array of people objects.
 * @param {string} name - A single name.
 * @returns {Object|null} - A person object or `null`.
 */
function findPersonByName(people, name) {
  let found= null;
  for(let person of people){
    if(person.name.toLowerCase() === name.toLowerCase()){
      found= person;
    }
  }
  return found;
}


/**
 * Return an array of objects, where each object represents a person under the age of 25.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleUnder25(people) {
  let youngins= [];
  for(let person of people){
    if(person.age < 25){
      youngins.push(person);
    }
  }
  return youngins;
}

/**
 * Return an array of objects, where each object represents a person with a `gmail.com` email address.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleWithGmail(people) {
  let gmailers= [];
  for(let person of people){
    if(person.email.includes("@gmail.com")){
      gmailers.push(person);
    }
  }
  return gmailers;
}

module.exports = {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
};
