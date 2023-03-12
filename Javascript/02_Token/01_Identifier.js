/**
 * TODO :: firstName, lastName and age are variable Identifier
 */
var firstName = "Akhil";
let lastName = "Kandula";
const age =
  new Date().getDate() === new Date("1998-03-14").getDate()
    ? new Date().getFullYear() - new Date("1998-03-14").getFullYear()
    : new Date().getFullYear() - new Date("1998-03-14").getFullYear() - 1;
console.log("First Name :: " + firstName);
console.warn("Last Name :: " + lastName);
console.error(`Age :: ${age}`);

/**
 * TODO :: educationDetails is function declaration
 */
function educationDetails(
  schoolName,
  schoolAddress,
  schoolYear,
  collegeName,
  collegeAddress,
  collegeYear
) {
  /**
   * TODO :: School Details
   */
  console.log("School Name :: " + schoolName);
  console.warn("School Address :: " + schoolAddress);
  console.error(`School Completion Year :: ${schoolYear}`);

  /**
   * TODO :: College Details
   */
  console.log("College Name :: " + collegeName);
  console.warn("College Address :: " + collegeAddress);
  console.error(`College Completion Year :: ${collegeYear}`);
}

educationDetails(
  "Sri Chaitanya Techno School",
  "Boyapalem,Visakhapatnam",
  2013,
  "Sri Chaitanya JR College",
  "Maddilapalem, Visakhapatnam",
  2016
);

/**
 * employeeDetails in Object Identifier
 */
let employeeDetails = {
  companyName: "TCS",
  companyLocation: "Waverock,Hyderabad",
  salary: "4,12,000",
  displayCompanyDetails: function () {
    console.log("Company Name :: " + this.companyName);
    console.warn("Company Location :: " + this.companyLocation);
    console.error("Salary :: " + this.salary);
  },
};

employeeDetails.displayCompanyDetails();
