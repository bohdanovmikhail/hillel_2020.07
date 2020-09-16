const usersEl = ge('#users');

getUsers();


// Запрашиваем всех пользователей
function getUsers() {
    fetch('/users')
        // После успешного выполнения запроса, промис который вернулся из fetch выполнится
        // Разбираем результат и получаем из него json
        .then(response => response.json())
        // Полученный массив перебираем через forEach и отображаем каждого пользователя
        .then(result => result.forEach(addUser));
}

function addUser(info) {
    const userEl = ce('div', { class: 'user' }, info.firstName + ' ' + info.lastName);
    usersEl.append(userEl);
}

function ce(tag, attrs, children) {
	if (!children) {
  	children = [];
  }
  
	if (!Array.isArray(children)) {
  	children = [children];
  }

	const element = document.createElement(tag);
  
  for (let attrKey in attrs) {
    element.setAttribute(attrKey, attrs[attrKey]);
  }
  
  children.forEach(child => element.append(child));
  
  return element;
}

function ge(selector) {
	return document.querySelector(selector);
}
