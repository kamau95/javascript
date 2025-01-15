//read the following data structure and create a 
//function to calculate the total salary of the employees

let company = {
  marketing: [{name: "joy", salary: 12000}, {name: "kinoti", salary: 50000}],
  construction: {
    concrete: [{name: "risper", salary: 10000}, {name: "john", salary: 3490}],
    wood: {
      roofing: [{name: "janita", salary: 43000}, {name: "mashirima", salary: 3200}],
      finishing: [{name: "njoroge", salary: 23000}, {name: "jane", salary: 23450}]
    }
  }
};

function total_salary (department) {
  if(Array.isArray(department)) {
    return department.reduce( (prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for( let item of Object.values(department)) {
      sum += total_salary(item);
    }
    return sum;
  }
}

console.log(total_salary(company));

