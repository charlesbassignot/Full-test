const number = process.argv[2];

const isDivideBy5 = (value) => {
  const lastChar = value[value.length - 1];
  let reponse = false;
  if (lastChar == "0" || lastChar == "5") {
    reponse = "Buzz";
  }
  return reponse;
};

const isDivideBy3 = (value) => {
  let sumDigits = 0;
  let reponse = false;
  value.forEach((el) => {
    sumDigits += Number(el);
  });
  if (sumDigits % 3 === 0) {
    reponse = "Fizz";
  }
  return reponse;
};

const handler = (number) => {
  let result = false;
  const arrayNum = number.toString().split("");
  const divideBy3 = isDivideBy3(arrayNum);
  result = divideBy3 && divideBy3;
  const divideBy5 = isDivideBy5(arrayNum);
  result = result ? (divideBy5 ? result + divideBy5 : result) : number;
  console.log("result: ", result);
  return result;
};

handler(number);
