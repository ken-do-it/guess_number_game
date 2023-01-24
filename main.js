let QNumber;
let PlayButton = document.getElementById("play-button");
let UserInput = document.getElementById("user-input");
let ResultDisplay = document.getElementById("result-display");
PlayButton.addEventListener("click", play); //paly() 괄호는 하지 않는다 하면 바로 그냥 실행이 된다 나는 클릭하면 실행이 되는걸 원하기 때문에 괄호는 뺀다

function RandomNumber() {
  QNumber = Math.floor(Math.random() * 100) + 1;
  console.log(QNumber);
}

function play() {
  let UserValue = UserInput.value;

  if (UserValue == QNumber) {
    console.log("정답입니다");
    ResultDisplay.textContent = "정답입니다";
  } else if (UserValue > QNumber) {
    console.log("다운");
    ResultDisplay.textContent = "다운";
  } else if (UserValue < QNumber) {
    console.log("업");
    ResultDisplay.textContent = "업";
  }
}

RandomNumber();
