/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;

  constructor(rows) {
    this.rows = rows;

    this.#render();
  }

  #render() {
    const container = document.createElement('div');
    container.innerHTML = this.#template();

    this.elem = container;

    this.elem.addEventListener('click', this.#onButtonClick);
  }

  #onButtonClick(event) {

    if (event.target.nodeName == 'BUTTON') event.target.closest('tr').remove();
  }

  #template() {

    return `<table>
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>${this.rows.map((user) => {
      return `<tr>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.salary}</td>
            <td>${user.city}</td>
            <td><button>X</button></td>
        </tr>`
    })}
        
        </table>`;
  }
}
