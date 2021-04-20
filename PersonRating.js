class PersonRating extends Component {
	constructor(data) {
		super(data);
		this._names = data.names;
		this._ratings = data.ratings;
	}
	get template() {
		return `<article class="columns__rating-item">
        <h3 class="columns__rating-title">${this._names}</h3>
        <span class="columns__rating-count">${this._ratings}</span>
      </article>`.trim(); /*Надо исправить: метод trim() удаляет пробельные символы с начала и конца строки-здесь метод не потребуется.*/
	}
}
