class Person extends Component {
	constructor(name) {
		super();
		this.name = name;
		this._happiness = 0;
		this._valueElement = document.querySelector(`.column__value-name`);
		this._iconElement = document.querySelector(`.column__value-icon`);
	}

	hasCat() {
		return this._happiness++;
	}

	hasRest() {
		return this._happiness++;
	}

	hasMoney() {
		return this._happiness++;
	}
	/*Надо исправить: имя переменной должно максимально чётко соответствовать хранимым в ней данным. Например: "getRandomData" */
	isSunny() {
		const APIKey =
			'28c7d687accc7c75aabbc7fb71173feb'; /*Надо исправить: для объявления переменных необходимо использовать camelCase*/
		const city = 'Москва';
		const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;

		/*Надо исправить: нет проверки успешен ли запрос if (res.ok){} */
		return fetch(url).then((res) => res.json()).then((res) => {
			console.log(this._happiness); /*Можно лучше: стоит убрать лишний код*/
			if (res.main.temp - 273 > 15) {
				/*Надо исправить: мы не получим ответа если не будет выполнен if. return - должен обязательно выполняться*/
				return this._happiness++;
			}
			/*Надо исправить: отсутствует блок catch */
		});
	}
}
