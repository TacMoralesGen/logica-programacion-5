

const guessNumber = () => {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let tryNumbers = [];
  let userGuessed = false;
  while (!userGuessed) {
      let tryNumber = Number(prompt("Adivina el número secreto (entre 1 y 100):"));
      if (isNaN(tryNumber) || tryNumber < 1 || tryNumber > 100) {
          console.log("Error: Debes ingresar un número válido entre 1 y 100.");
          continue;
      }
      tryNumbers.push(tryNumber);
      console.log("Los intentos realizados hasta ahora: ", tryNumbers);
      if (tryNumber === secretNumber) {
          console.tryNumbersg("Felicidades, adivinaste el número secreto");
          userGuessed = true;
      } else {
          console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
      }
  }
}
guessNumber();
