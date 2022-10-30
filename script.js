async function lottery() {
  console.log("Вы начали игру");
  let promise = await new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
    }, 1000);
  });
  try {
    console.log("Вы выиграли");
    console.log("Вам заплатили");
  } catch {
    console.log("Вы проиграли");
  }
  return promise;
}

lottery().finally(() => console.log("Игра закончена"));
