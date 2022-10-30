const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const loadBtnUser = document.querySelector(".js-loadUser");

loadBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
    .then((data) => {
      const res = data.json();
      return res;
    })
    .then((data) => {
      resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span></p>
                <p> О себе: <span>${data.bio}</span></p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span></p>
            </div>`;
    })
    .catch(() => {
      console.log("error");
    });
});

loadBtnUser.addEventListener("click", function (e) {
  try {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      let usersContainer = "";
      response.data.forEach((user) => {
        const usersCard = `<div class="user-card">
               <p >Имя: <span >${user.name}</span> </p>
               <p >Логин: <span >${user.username}</span></p>
               <p >Эл. почта: <span ><a href="mailto:${user.email}">${user.email}</a></span></p>    
               <p >Город: <span >${user.address.city}</span></p>       
           </div>`;
        usersContainer += usersCard;
      });
      resultsContainer.innerHTML = usersContainer;
      resultsContainer.style.cssText = `
      flex-direction: row;
      `;
    });
  } catch {
    (error) => {
      console.log(error);
    };
  }
});

const inputValidate = document.querySelector(".validate_input");
const inputValidateBtn = document.querySelector(".validate_btn");

inputValidateBtn.addEventListener("click", validate);
const validateOutput = document.querySelector(".validate_output");

function validate() {
  try {
    if (isNaN(inputValidate.value)) {
      throw new Error("Вы ввели не число");
    } else if (inputValidate.value === "") {
      throw new Error("Вы не ввели ничего. Введите значение");
    } else if (inputValidate.value < 5 || inputValidate.value > 10) {
      throw new Error("значение должно быть в диапозоне от 5 до 10");
    } else {
      validateOutput.innerHTML = `<div class="validate-block ok">Ура! Все введено правильно</div>`;
    }
  } catch (error) {
    validateOutput.innerHTML = `<div class="validate-block error">${error}</div>`;
  }
}
