//Create interface for the Salary and other information 
interface employee {
    baseSalary: number;
    experince: number;
    rating: number;
}
//Declare the employee data 
const empInfo: Map<string, employee> = new Map<string, employee>();
//Add the Employee data
empInfo.set("Alice", { baseSalary: 75000, experince: 5.1, rating: 4.2 });
empInfo.set("Bob", { baseSalary: 68000, experince: 3.2, rating: 3.8 });
empInfo.set("Carol", { baseSalary: 82000, experince: 7.1, rating: 4.5 });
empInfo.set("David", { baseSalary: 90000, experince: 10.2, rating: 2.5 });
empInfo.set("Eva", { baseSalary: 60000, experince: 2.4, rating: 3.5 });
empInfo.set("Bhavin", { baseSalary: 50000, experince: 5, rating: 4.0 });

//Create empty map to store hike pecentage
let hikeData: Map<string, number> = new Map();

//calculate hike for each employee and store into in hike map
for (const [name, emp] of empInfo) {
    //get the array of values for employee
    let hikePercentage = calculateHikes(
        emp.baseSalary,
        emp.experince,
        emp.rating);
    hikeData.set(name, hikePercentage);

}

//console.log(hikeData)
//Function to Calculate the hike percentage
function calculateHikes(baseSalary: number, experince: number, rating: number): number {
    let variablePayPercentage: number = 0;
    let bonus: number = 0;
    let reward: number = 0;
    // based on rating assign the percetange of hike and bonus
    if (rating >= 4) {
        variablePayPercentage = 15;
        bonus = 1500;
    } else if (rating >= 3) {
        variablePayPercentage = 10;
        bonus = 1200;
    } else {
        variablePayPercentage = 3;
        bonus = 300;
    }

    if (experince >= 5) {
        reward = 5000;
    }
    let hikeamount = (baseSalary * variablePayPercentage) / 100 + bonus + reward;
    return (hikeamount / baseSalary)*100;
}

// Print the Result of the hike
for (let [name, hike] of hikeData) {
    console.log(name + " : " + hike.toFixed(2) + "%");
    //console.log(name+":"+ hike);
}
