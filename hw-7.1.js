let postmate = [0, 0, 0, 'A001DFX0', 0];
let balance = 100;
let code = 'A001DFX0';
if (postmate[3] === code) {
  balance -= 100;
  console.log(
    `Вы получили посылку из ячейки ${postmate.length - 1}
    и ваш счет составляет ${balance} р.`
  );
}
