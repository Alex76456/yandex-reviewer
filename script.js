window.onload = () => {
	/*Надо исправить: для объявления переменных необходимо использовать camelCase*/
	const FORM_WRAPPER = document.querySelector(`.column_type_input`);
	const ratingArray = [];
	let countedRating = 5;

	const renderSearch = (allItemsData) => {
		PageEnum.SiteWrapper.SEARCH.innerHTML = ``;

		const searchComponent = new Search();

		PageEnum.SiteWrapper.SEARCH.appendChild(searchComponent.render());

		searchComponent.onChange = (value) => {
			const filteredItems = allItemsData.filter((currentItem) =>
				/*Надо исправить: чтобы поиск был регистронезависимым нужно привести currentItem._names и value к одинаковому регистру*/
				currentItem._names.includes(value)
			);

			PageEnum.SiteWrapper.rating.innerHTML = ``;

			value === `` ? ratingRender(countedRating, allItemsData) : ratingUpdate(filteredItems);
		};
	};

	const ratingRender = (ratingAmount, ratingArray) => {
		for (let i = 0; i < ratingAmount; i++) {
			ratingArray[i] = new PersonRating(returnRandomData());
		}
		ratingUpdate(ratingArray);
	};

	const ratingUpdate = (ratingArray) => {
		ratingArray.forEach((item) => {
			PageEnum.SiteWrapper.rating.appendChild(item.render());
		});
		if (ratingArray.length === 0) {
			PageEnum.SiteWrapper.rating.innerHTML = `Rating list is empty`;
		}
	};

	const renderForm = () => {
		const formComponent = new Form();
		FORM_WRAPPER.appendChild(formComponent.render());

		formComponent.onSubmit = (evt) => {
			evt.preventDefault();
			/*Надо исправить: выбор чекбоксов в данный момент не работает, querySelector находит первый попавшийся результат - всегда будет 'yes'*/
			const name = document.querySelector(`input[name=name]`).value;
			const cat = document.querySelector(`input[name=cat]`).value;
			const rest = document.querySelector(`input[name=rest]`).value;
			const money = document.querySelector(`input[name=money]`).value;
			/*Надо исправить: для объявления переменных необходимо использовать camelCase*/
			const Man = new Person(name);
			if (cat === 'yes') {
				Man.hasCat();
			}
			if (rest === 'yes') {
				Man.hasRest();
			}
			if (money === 'yes') {
				Man.hasMoney();
			}
			Man.isSunny().then((happiness) => {
				/*Надо исправить: innerHTML - подвергает приложание опасности XSS атак, подробнее: https://ru.stackoverflow.com/questions/1142971/xss-атаки-Что-нужно-использовать-вместо-innerhtml-insertadjacenthtml.
				 Лучше использовать textContent*/
				Man._valueElement.innerHTML = name;
				if (happiness === 4) {
					Man._iconElement.innerHTML = '😆';
				} else if (happiness === 3 || happiness === 2) {
					Man._iconElement.innerHTML = '😐';
				} else {
					Man._iconElement.innerHTML = '☹️';
				}
				/*Надо исправить: отсутствует блок catch */
			});
		};
	};

	renderForm();
	ratingRender(countedRating, ratingArray);
	renderSearch(ratingArray);
};
