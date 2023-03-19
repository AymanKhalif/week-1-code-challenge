// Student Grade Generator
const marks = Number(prompt("Enter your grades between 0-100"));
let grade;
if (marks > 79 && marks <= 100) {
  grade = `A`;
  console.log(`your grade is ${grade}`);
} else if (marks >= 60 && marks <= 79) {
  grade = `B`;
  console.log(`your grade is ${grade}`);
} else if (marks >= 49 && marks <= 59) {
  grade = `C`;
  console.log(`your grade is ${grade}`);
} else if (marks >= 40 && marks < 49) {
  grade = `D`;
  console.log(`your grade is ${grade}`);
} else if (marks < 40) {
  grade = `E`;
  console.log(`your grade is ${grade}`);
} else {
  console.log(`Not a valid marks`);
}

// Speed Detector
const speedLimit = 70;
const kmPerPoint = 5;
function speedDetector(carspeed) {
  if (carspeed <= speedLimit) {
    console.log(`Ok`);
  } else {
    const points = Math.floor((carspeed - speedLimit) / kmPerPoint);
    if (points <= 12) {
      console.log(`Points:${points}`);
    } else {
      console.log(`Your lisence is suspended`);
    }
  }
}

// Net Salary Calculator

function taxCalc(basicSalary, bonuses) {
  const grossSalary = basicSalary + bonuses;
  // NHIF Calculation
  let nhifDeduction = ``;
  if (grossSalary <= 5999) {
    nhifDeduction = 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    nhifDeduction = 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    nhifDeduction = 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    nhifDeduction = 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    nhifDeduction = 600;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    nhifDeduction = 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    nhifDeduction = 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    nhifDeduction = 900;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    nhifDeduction = 950;
  } else {
    nhifDeduction = 1700;
  }

  // NSSF calcultion
  let nssfContribution = ``;
  if (grossSalary < 6000) {
    nssfContribution = 0;
  } else if (grossSalary >= 6000 && grossSalary <= 18000) {
    nssfContribution = grossSalary * 0.06;
  } else {
    nssfContribution = 1080;
  }
  // If statement for monthly and annual tax
  const personalRelief = 2400;
  let TaxableIncome =
    grossSalary - (nssfContribution + nhifDeduction + personalRelief);
  let monthlyTax = "";
  let annualTax = "";
  if (TaxableIncome <= 24000) {
    monthlyTax = TaxableIncome * 0.1;
    annualTax = TaxableIncome * 12 * 0.1;
  } else if (TaxableIncome > 24000 && TaxableIncome <= 32333) {
    monthlyTax = TaxableIncome * 0.25;
    annualTax = TaxableIncome * 12 * 0.25;
  } else if (TaxableIncome > 32333) {
    monthlyTax = TaxableIncome * 0.3;
    annualTax = TaxableIncome * 12 * 0.3;
  }
  let netSalary = grossSalary - (monthlyTax + nssfContribution + nhifDeduction);
  return `Your Payee tax is ${monthlyTax} monthly, ${annualTax} annually. NHIF is ${nhifDeduction}, NSSF is ${nssfContribution} netsalary is ${netSalary}monthly and yearly ${
    netSalary * 12
  }`;
}
