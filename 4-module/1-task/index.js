// function makeFriendsList(friends) {
//   const body = document.body;
//   const layoutStr = friends.reduce((layout, item) => {

//     return layout += `<li>${item.firstName} ${item.lastName}</li>`;
//   }, '');

//   body.innerHTML = `<ul>
//    ${layoutStr}
//    </ul>`;

//   return body.querySelector('ul');
// }

function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  for (let name of friends) {

    let li = document.createElement('li');
    li.textContent = `${name.firstName} ${name.lastName}`;
    ul.append(li);
  }

  return ul;
}
