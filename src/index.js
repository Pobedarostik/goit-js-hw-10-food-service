import temlatet from "../app.hbs";
import menu from "../menu.json";

import 'material-icons/iconfont/material-icons.css';

const jsMenu = document.querySelector(".js-menu");
const elementMenu = createElementMenu(menu);
jsMenu.insertAdjacentHTML("beforeend", elementMenu);

function createElementMenu(menu) {
  return menu.map(temlatet).join('');
   
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body')
const checkbox = document.querySelector('#theme-switch-toggle');

checkbox.addEventListener('change', changeTheme);
checkbox.addEventListener('change', setLocaleStorage);

function changeTheme(event) {
  
  if (checkbox.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT)
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK)
  }
};

function setLocaleStorage(event) {
  if (checkbox.checked) {
    localStorage.setItem('theme', Theme.DARK);
    body.classList.add(Theme.DARK);
  checkbox.checked = true;

  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
};



const reloadLocalStorage = localStorage.getItem('theme');

if (reloadLocalStorage === Theme.DARK) {
 body.classList.add(Theme.DARK);
 checkbox.checked = true;
};
