const heroList = document.querySelector(".hero__list");

let users = [{
    surname: "Dessert(100g serving)",
    name: "Calories",
    matematika: "Fat(g)",
    fizika: "Carbs(g)",
    english: "Protein(g)",
    id: "T/R"
  },
  {
    surname: "Abdialimov",
    name: "Sohibjon",
    matematika: 5,
    fizika: 5,
    english: 5,
    id: 1
  },
  {
    surname: "Soliyev",
    name: "Ahror",
    matematika: 4,
    fizika: 5,
    english: 3,
    id: 2
  },
  {
    surname: "Qahhorov",
    name: "Odilbek",
    matematika: 3,
    fizika: 4,
    english: 5,
    id: 3
  },
  {
    surname: "Jurayev",
    name: "Sarvar",
    matematika: 5,
    fizika: 4,
    english: 3,
    id: 4
  },
  {
    surname: "Qalandarov",
    name: "Akmal",
    matematika: 5,
    fizika: 4,
    english: 3,
    id: 5
  },
  {
    surname: "Abdialimov",
    name: "Sohibjon",
    matematika: 5,
    fizika: 5,
    english: 5,
    id: 6
  },
  {
    surname: "Soliyev",
    name: "Ahror",
    matematika: 4,
    fizika: 5,
    english: 3,
    id: 7
  },
  {
    surname: "Qahhorov",
    name: "Odilbek",
    matematika: 3,
    fizika: 4,
    english: 5,
    id: 8
  },
  {
    surname: "Jurayev",
    name: "Sarvar",
    matematika: 5,
    fizika: 4,
    english: 3,
    id: 9
  },
  {
    surname: "Qalandarov",
    name: "Akmal",
    matematika: 5,
    fizika: 4,
    english: 3,
    id: 10
  },
  {
    surname: "Abdialimov",
    name: "Sohibjon",
    matematika: 5,
    fizika: 5,
    english: 5,
    id: 11
  },
  {
    surname: "Soliyev",
    name: "Ahror",
    matematika: 4,
    fizika: 5,
    english: 3,
    id: 12
  },
  {
    surname: "Qahhorov",
    name: "Odilbek",
    matematika: 3,
    fizika: 4,
    english: 5,
    id: 13
  },
  {
    surname: "Jurayev",
    name: "Sarvar",
    matematika: 5,
    fizika: 4,
    english: 3,
    id: 14
  },
  {
    surname: "Qalandarov",
    name: "Akmal",
    matematika: 5,
    fizika: 4,
    english: 3,
    id: 15
  },
  {
    surname: "Abdialimov",
    name: "Sohibjon",
    matematika: 5,
    fizika: 5,
    english: 5,
    id: 16
  },
  {
    surname: "Soliyev",
    name: "Ahror",
    matematika: 4,
    fizika: 5,
    english: 3,
    id: 17
  },
  {
    surname: "Qahhorov",
    name: "Odilbek",
    matematika: 3,
    fizika: 4,
    english: 5,
    id: 18
  },
  {
    surname: "Jurayev",
    name: "Sarvar",
    matematika: 5,
    fizika: 4,
    english: 3,
    id: 19
  },
  {
    surname: "Qalandarov",
    name: "Akmal",
    matematika: 5,
    fizika: 4,
    english: 3,
    id: 20
  },
]

function addItems5() {
  heroList.innerHTML = '';
  addHeader();
  for (let i = 1; i < 6; i++) {
    heroList.innerHTML += `
        <li class="hero__item">
          <a href="#" class="hero__text hero__link"><input type="checkbox" class="plus__check"> ${users[i].surname}</a>
          <a href="#" class="hero__text hero__link">${users[i].name}</a>
          <a href="#" class="hero__text hero__link">${users[i].matematika}</a>
          <a href="#" class="hero__text hero__link">${users[i].fizika}</a>
          <a href="#" class="hero__text hero__link">${users[i].id}</a>
        </li>
  `
  }
}

function addHeader() {
  for (let i = 0; i < 1; i++)
    heroList.innerHTML += `
  <li class="hero__item">
  <a href="#" class="hero__title hero__link"><input type="checkbox" id="minus__check"> ${users[i].surname}</a>
  <a href="#" class="hero__title hero__link">${users[i].name}</a>
  <a href="#" class="hero__title hero__link">${users[i].matematika}</a>
  <a href="#" class="hero__title hero__link">${users[i].fizika}</a>
  <a href="#" class="hero__title hero__link">${users[i].id}</a>
</li>
  `
}

function addItems10() {
  heroList.innerHTML = '';
  addHeader()
  for (let i = 1; i < 11; i++)
    heroList.innerHTML += `
        <li class="hero__item">
          <a href="#" class="hero__text hero__link"><input type="checkbox" class="plus__check"> ${users[i].surname}</a>
          <a href="#" class="hero__text hero__link">${users[i].name}</a>
          <a href="#" class="hero__text hero__link">${users[i].matematika}</a>
          <a href="#" class="hero__text hero__link">${users[i].fizika}</a>
          <a href="#" class="hero__text hero__link">${users[i].id}</a>
        </li>
  `
}

function addItems20() {
  heroList.innerHTML = '';
  addHeader();
  for (let i = 1; i < 21; i++)
    heroList.innerHTML += `
        <li class="hero__item">
          <a href="#" class="hero__text hero__link"><input type="checkbox" class="plus__check"> ${users[i].surname}</a>
          <a href="#" class="hero__text hero__link">${users[i].name}</a>
          <a href="#" class="hero__text hero__link">${users[i].matematika}</a>
          <a href="#" class="hero__text hero__link">${users[i].fizika}</a>
          <a href="#" class="hero__text hero__link">${users[i].id}</a>
        </li>
  `
}
addItems5();

const select = document.getElementById("select");



const section = document.getElementById("section");
const plusCheckbox = document.querySelectorAll(".plus__check");
let ItemNumber = document.querySelector(".item__number");
let headerTitleP = document.querySelector(".header__title p");
let headerTitleH3 = document.querySelector(".header__title h3");
let count = 0;
const trash = document.querySelector(".header__trash");
const minusCheck = document.getElementById("minus__check");
let itSum = 0;


// Select
select.addEventListener("change", () => {
  if (select.value == 5) {
    addItems5();
    checkValue();
    addShow(); 

  } else if (select.value == 10) {
    addItems10();
    checkValue();
    addShow()
  } else if (select.value == 20) {
    addItems20();
    checkValue();
    addShow();
  }
})




plusCheckbox.forEach((item) => {
  item.addEventListener("click", (e) => {
    checkValue();
    e.target.parentNode.parentNode.classList.add("styles");
    console.log(e.target);
    plusCheckbox.forEach((it) => {
      if (it.checked) {
        it.parentNode.parentNode.classList.add("styles");
      } else {
        it.parentNode.parentNode.classList.remove("styles");
      }
    })
    if (item.checked) {
      section.classList.add("show");
    } else {
      let itSum = 0;
      plusCheckbox.forEach((it) => {
        if (true) {
          itSum += it.checked;
        }
      })
      if (itSum === 0) {
        section.classList.remove("show");
      }
    }
  })
})






function addShow() {
  plusCheckbox.forEach((item) => {
    if (item.checked) {
      section.classList.add("show");
    } else {
      itSum = 0;
      plusCheckbox.forEach((it) => {
        if (true) {
          itSum += it.checked;
        }
      })
      if (itSum == 0) {
        section.classList.remove("show");
      }
    }
  })
}


// Value calculation
function checkValue() {
  count = 0;
  plusCheckbox.forEach((item) => {
    if (item.checked) {
      count++;
    }
  })
  ItemNumber.innerHTML = `${count}`;
}

// Remove Element

trash.addEventListener("click", () => {
  removeElement()
  addShow();
  checkValue();
});

function removeElement() {
  plusCheckbox.forEach((item) => {
    if (item.checked) {
      item.parentNode.parentNode.remove();
      count--;
    }
  })
}

// Every element select
minusCheck.addEventListener("click", () => {
  setAttributeSelected();
  removeAttributeSelected();
  addShow();
  checkValue();
})

function setAttributeSelected() {
  if (minusCheck.checked) {
    plusCheckbox.forEach((item) => {
      item.setAttribute("checked", '');
    })
  }
}

function removeAttributeSelected() {
  if (!minusCheck.checked) {
    plusCheckbox.forEach((it) => {
      it.removeAttribute("checked");
    })
  }
}