let QNumber;
let PlayButton = document.getElementById("play-button");
let UserInput = document.getElementById("user-input");
let ResultDisplay = document.getElementById("result-display");
let ResetButton = document.getElementById("reset-button");
let ChanceArea = document.getElementById("chance-area");
let Chance = 5;
let GameOver = false;

PlayButton.addEventListener("click", play); //paly() 괄호는 하지 않는다 하면 바로 그냥 실행이 된다 나는 클릭하면 실행이 되는걸 원하기 때문에 괄호는 뺀다
ResetButton.addEventListener("click", reset);
function RandomNumber() {
  QNumber = Math.floor(Math.random() * 100) + 1;
  console.log(QNumber);
}

function play() {
  let UserValue = UserInput.value;

  Chance--;
  ChanceArea.textContent = `남은 찬스는 ${Chance}번`;
  //  ChanceArea.textContent = "남은 기회는" + Chance + "번"; 과 같다  동적인 값을 넣고 싶으면 backtick `` 를 쓴다
  // backtick 는 동적인 값과 정적인 값을 같이 넣을 수 있다

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
  if (Chance < 1) {
    GameOver = true;
    ResultDisplay.textContent = "실패!! 다시 도전해주세요";
  }

  if (GameOver == true) {
    PlayButton.disabled = true;
  }
}

function reset() {
  UserInput.value = "";
  RandomNumber();
  ResultDisplay.textContent = "결과값이 여기에 나옴";
}

RandomNumber();
