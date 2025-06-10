class Organization {
  static orgType = "Non-Profit";
  #orgName;
  #orgLocation;

  constructor(name, location) {
    this.#orgName = name;
    this.#orgLocation = location;
  }

  getDetails() {
    console.log(`Organization: ${this.#orgName}`);
    console.log(`Location: ${this.#orgLocation}`);
    console.log(`Type: ${Organization.orgType}`);
  }
}

class Department extends Organization {
  #departmentName;

  constructor(orgName, location, deptName) {
    super(orgName, location);
    this.#departmentName = deptName;
  }

  getDetails() {
    super.getDetails(); // call Organization method
    console.log(`Department: ${this.#departmentName}`);
  }
}

class Team extends Department {
  #teamLeader;

  constructor(orgName, location, deptName, leader) {
    super(orgName, location, deptName);
    this.#teamLeader = leader;
  }

  getDetails() {
    super.getDetails(); // Organization + Department output
    console.log(`Team Leader: ${this.#teamLeader}`);
  }
}
const org = new Organization("Helping Hands", "Delhi");
org.getDetails();

console.log('---');

const dept = new Department("Helping Hands", "Delhi", "Outreach");
dept.getDetails();

console.log('---');

const team = new Team("Helping Hands", "Delhi", "Outreach", "Ravi");
team.getDetails();