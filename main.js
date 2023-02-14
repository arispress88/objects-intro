/*const empireStateBuilding = {
  //  stories: 103,
    //height: 1453,
    //address: "350 Fifth Avenue, Manhattan, New York 10118",
    //squareFeet: 2768591,
    //constructionDate: 1931,
    //cost: 40948900,
    //owner: "Empire State Realty Trust",
    //eastWestLength: 424,
    //northSouthLength: 187,
    //architect: "Shreve, Lamb & Harmon"
    */

//}
/* console.log(empireStateBuilding["cost"]);
console.log(empireStateBuilding["owner"]);
console.log(empireStateBuilding["constructionDate"]);
console.log(empireStateBuilding["address"]);
console.log(empireStateBuilding["architect"]);
*/

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

for (let singleInstructor = 0; singleInstructor < nashvilleSoftwareSchool.instructors.fullTime.length; singleInstructor++)
{
    console.log(nashvilleSoftwareSchool.instructors.fullTime[singleInstructor]);
} 
console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);

