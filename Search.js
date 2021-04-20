class Search extends Component {
	constructor() {
		super();
		this._onChange = null;
	}

	get template() {
		return `<input type="text" name="search" placeholder="Search">
      <button type="submit" class="visually-hidden">Search</button>`.trim(); /*Надо исправить: метод trim() удаляет пробельные символы с начала и конца строки-здесь метод не потребуется.*/
	}

	removeEventListener() {
		/*Надо исправить: removeEventListener не сработает , т.к. обращается к типу `keydown` - листенера с таким типом нет*/
		this._element.removeEventListener(`keydown`, this._onSearchChange);
	}

	_onSearchChange(event) {
		if (typeof this._onChange === `function`) {
			this._onChange(event.target.value);
		}
	}
	/*Можно лучше: запись this._onChange можно упростить, передав функцию сабмита в конструктор при создании экземпляра класса*/
	set onChange(fn) {
		this._onChange = fn;
	}

	setEventListener() {
		/*Надо исправить: метод this._onSearchChange должен принимать аргумент event. После исправления заработает поиск ;)*/
		this._element.addEventListener(`keyup`, this._onSearchChange);
	}
}
