const expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

expencesExamples[0].expectedSum = 40590;
expencesExamples[1].expectedSum = 148200;
expencesExamples[2].expectedSum = 25709;

function expenceSum(expenceExample) {
  return expenceExample.yearlyExpences.reduce(function (total, yearlyExpence) {
    if (yearlyExpence > 1000) {
      return total + yearlyExpence;
    } else {
      return total;
    }
  }, 0);
}

expencesExamples.forEach(function (expenceExample) {
  const result = expenceSum(expenceExample);
  if (result === expenceExample.expectedSum) {
    console.log('success');
  } else {
    console.log('error');
  }
});

// ДЗ 8.2

const arr = [];

expencesExamples.forEach(function (expenceExample) {
  expenceExample.yearlyExpences.forEach(function (yearlyExpence, i) {
    if (yearlyExpence <= 1000) {
      let day = new Date(2023, i);
      let month = day.toLocaleString('en-US', { month: 'long' });
      arr.push(month);
    }
  });
  console.log(...arr);
  arr.length = 0;
});
