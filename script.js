const worldPeople = [
    {
      name: "Нельсон Мандела",
      portrait: "https://avatars.mds.yandex.net/i?id=c8513b74484270f1ddc12f18de71e61d26d2558a-12384317-images-thumbs&n=13",  // Замените на актуальное изображение
      shortDescription: "Южноафриканский политик и активист.",
      century: "20th",
      detailedInfo: {
        birthDate: "18 июля 1918",
        deathDate: "5 декабря 2013",
        biography: "Нельсон Мандела был одним из крупнейших борцов против апартеида в Южной Африке.",
        achievements: "Первый чернокожий президент Южной Африки, лауреат Нобелевской премии мира.",
      },
    },
    {
      name: "Альберт Эйнштейн",
      portrait: "https://avatars.mds.yandex.net/i?id=513c56f68d249ed8db31fcaa299a18581e42ee47-10414807-images-thumbs&n=13",  // Замените на актуальное изображение
      shortDescription: "Физик-теоретик, автор теории относительности.",
      century: "20th",
      detailedInfo: {
        birthDate: "14 марта 1879",
        deathDate: "18 апреля 1955",
        biography: "Альберт Эйнштейн считается одним из самых великих ученых всех времен.",
        achievements: "Разработал теорию относительности, лауреат Нобелевской премии по физике.",
      },
    },
  ];
  
  const russianPeople = [
    {
      name: "Петр I",
      portrait: "https://avatars.mds.yandex.net/i?id=f6974a34038893b9f8703d59c6d15a343384c18c-7020937-images-thumbs&n=13",  // Замените на актуальное изображение
      shortDescription: "Царь России, основатель Санкт-Петербурга.",
      century: "17th",
      detailedInfo: {
        birthDate: "9 июня 1672",
        deathDate: "8 февраля 1725",
        biography: "Петр I был российским царем, который радикально изменил страну.",
        achievements: "Провел реформы, основал Санкт-Петербург, сделал Россию великим морским государством.",
      },
    },
    {
      name: "Лев Толстой",
      portrait: "https://avatars.mds.yandex.net/i?id=2a00000179ee7a77f45123cb7b44ea3bd26a-4863363-images-thumbs&n=13",  // Замените на актуальное изображение
      shortDescription: "Великий русский писатель.",
      century: "19th",
      detailedInfo: {
        birthDate: "9 сентября 1828",
        deathDate: "20 ноября 1910",
        biography: "Лев Толстой — один из величайших писателей России.",
        achievements: "Автор романов «Война и мир», «Анна Каренина».",
      },
    },
  ];
  
  // Функция для отображения выбранной категории
  function showCategory(category) {
    const categories = ['world', 'russian'];
    categories.forEach(cat => {
      const container = document.getElementById(cat);
      container.style.display = cat === category ? 'block' : 'none';
    });
  
    const people = category === 'world' ? worldPeople : russianPeople;
    renderPeople(people, category);
  
    document.getElementById('world-tab').classList.toggle('active', category === 'world');
    document.getElementById('russian-tab').classList.toggle('active', category === 'russian');
  }
  
  // Функция для отображения карточек людей
  function renderPeople(people, category) {
    const container = document.getElementById(category);
    container.innerHTML = '';
  
    people.forEach(person => {
      const card = document.createElement('div');
      card.classList.add('person-card');
      card.innerHTML = `
        <img src="${person.portrait}" alt="${person.name}">
        <h3>${person.name}</h3>
        <p>${person.shortDescription}</p>
        <button onclick="showDetails('${person.name}')">Подробнее</button>
        <div class="details" id="details-${person.name}" style="display: none;">
          <p><strong>Дата рождения:</strong> ${person.detailedInfo.birthDate}</p>
          <p><strong>Дата смерти:</strong> ${person.detailedInfo.deathDate}</p>
          <p><strong>Биография:</strong> ${person.detailedInfo.biography}</p>
          <p><strong>Достижения:</strong> ${person.detailedInfo.achievements}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // Функция для отображения подробностей
  function showDetails(personName) {
    const detailsDiv = document.getElementById('details-' + personName);
    const cardDiv = detailsDiv.closest('.person-card'); // Находим ближайшую карточку
  
    const isVisible = detailsDiv.style.display === 'block';
    
    // Плавно увеличиваем карточку, если она не была открыта
    if (!isVisible) {
      detailsDiv.style.display = 'block';
      cardDiv.style.height = 'auto'; // Автоматически увеличиваем высоту карточки
    } else {
      detailsDiv.style.display = 'none';
      cardDiv.style.height = ''; // Возвращаем высоту карточки к исходной
    }
  }
  
  // Инициализация
  showCategory('world');
  