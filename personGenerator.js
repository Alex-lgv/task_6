const personGenerator = {
  surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

  firstNameMaleJson: `{
        "count": 16,
        "list": {     
          "id_1": "Александр",
          "id_2": "Максим",
          "id_3": "Иван",
          "id_4": "Артем",
          "id_5": "Дмитрий",
          "id_6": "Никита",
          "id_7": "Михаил",
          "id_8": "Даниил",
          "id_9": "Егор",
          "id_10": "Андрей",
          "id_11": "Роман",
          "id_12": "Петр",
          "id_13": "Леонид",
          "id_14": "Виктор",
          "id_15": "Федор",
          "id_16": "Степан"
        }
    }`,

  firstNameFemaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Кристина",
            "id_2": "Анастасия",
            "id_3": "Ирина",
            "id_4": "Светлана",
            "id_5": "Оксана",
            "id_6": "Ксения",
            "id_7": "Мария",
            "id_8": "Юлия",
            "id_9": "Ольга",
            "id_10": "Евгения",
            "id_11": "Анна",
            "id_12": "Диана",
            "id_13": "Маргарита",
            "id_14": "Галина",
            "id_15": "Валентина",
            "id_16": "Надежда"
        }
    }`,

  maleProfessionJson: `{  
      "count": 16,
      "list": {
          "id_1": "Сварщик",
          "id_2": "Грузчик",
          "id_3": "Упаковщик",
          "id_4": "Машинист",
          "id_5": "Таксист",
          "id_6": "Телохранитель",
          "id_7": "Дворник",
          "id_8": "Программист",
          "id_9": "Учитель",
          "id_10": "Офтальмолог",
          "id_11": "Физик",
          "id_12": "Инженер",
          "id_13": "Полицейский",
          "id_14": "Хирург",
          "id_15": "Пилот",
          "id_16": "Плотник"
      }
  }`,

  femaleProfessionJson: `{  
    "count": 16,
    "list": {
        "id_1": "Горничная",
        "id_2": "Официантка",
        "id_3": "Упаковщица",
        "id_4": "Стюардесса",
        "id_5": "Актриса",
        "id_6": "Телохранительница",
        "id_7": "Машинистка",
        "id_8": "Программистка",
        "id_9": "Учительница",
        "id_10": "Воспитательница",
        "id_11": "Кассирша",
        "id_12": "Художница",
        "id_13": "Баскетболистка",
        "id_14": "Футболистка",
        "id_15": "Медсестра",
        "id_16": "Писательница"
    }
}`,

  monthOfBirthJson: `{
  "count": 12,
  "list": {     
      "id_1": "Января",
      "id_2": "Февраля",
      "id_3": "Марта",
      "id_4": "Апреля",
      "id_5": "Мая",
      "id_6": "Июня",
      "id_7": "Июля",
      "id_8": "Августа",
      "id_9": "Сентября", 
      "id_10": "Октября",
      "id_11": "Ноября",
      "id_12": "Декабря"
  }
}`,

  GENDER_MALE: "Мужчина,",
  GENDER_FEMALE: "Женщина,",

  randomIntNumber: (max = 1, min = 0) =>
    Math.floor(Math.random() * (max - min + 1) + min),

  randomValue: function (json) {
    const obj = JSON.parse(json);
    const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
    return obj.list[prop];
  },

  randomGender: function () {
    return this.randomIntNumber() === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
  },

  randomFirstName: function () {
    if (this.person.gender === "Мужчина,") {
      return this.randomValue(this.firstNameMaleJson);
    } else {
      return this.randomValue(this.firstNameFemaleJson);
    }
  },

  randomSurname: function () {
    if (this.person.gender === "Мужчина,") {
      return this.randomValue(this.surnameJson);
    } else {
      return this.randomValue(this.surnameJson) + "a";
    }
  },

  randomDayOfBirth: function () {
    if (
      this.person.monthOfBirth === "Февраля" &&
      this.person.ageOfBirth === "1980 года рождения,"
    ) {
      return this.randomIntNumber(29, 1);
    } else if (
      this.person.monthOfBirth === "Февраля" &&
      this.person.ageOfBirth === "1984 года рождения,"
    ) {
      return this.randomIntNumber(29, 1);
    } else if (
      this.person.monthOfBirth === "Февраля" &&
      this.person.ageOfBirth === "1988 года рождения,"
    ) {
      return this.randomIntNumber(29, 1);
    } else if (
      this.person.monthOfBirth === "Февраля" &&
      this.person.ageOfBirth === "1992 года рождения,"
    ) {
      return this.randomIntNumber(29, 1);
    } else if (
      this.person.monthOfBirth === "Февраля" &&
      this.person.ageOfBirth !== "1980 года рождения,"
    ) {
      return this.randomIntNumber(28, 1);
    } else if (
      this.person.monthOfBirth === "Февраля" &&
      this.person.ageOfBirth !== "1984 года рождения,"
    ) {
      return this.randomIntNumber(28, 1);
    } else if (
      this.person.monthOfBirth === "Февраля" &&
      this.person.ageOfBirth !== "1988 года рождения,"
    ) {
      return this.randomIntNumber(28, 1);
    } else if (
      this.person.monthOfBirth === "Февраля" &&
      this.person.ageOfBirth !== "1992 года рождения,"
    ) {
      return this.randomIntNumber(28, 1);
    } else if (this.person.monthOfBirth === "Апреля") {
      return this.randomIntNumber(30, 1);
    } else if (this.person.monthOfBirth === "Июня") {
      return this.randomIntNumber(30, 1);
    } else if (this.person.monthOfBirth === "Сентября") {
      return this.randomIntNumber(30, 1);
    } else if (this.person.monthOfBirth === "Ноября") {
      return this.randomIntNumber(30, 1);
    } else {
      return this.randomIntNumber(31, 1);
    }
  },

  randomMonthOfBirth: function () {
    return this.randomValue(this.monthOfBirthJson);
  },

  randomAgeOfBirth: function () {
    return this.randomIntNumber(1995, 1980) + " года рождения,";
  },

  randomPatronymic: function () {
    if (this.person.gender === "Мужчина,") {
      return this.randomValue(this.firstNameMaleJson) + "ович";
    } else {
      return this.randomValue(this.firstNameMaleJson) + "овна";
    }
  },

  randomProfession: function () {
    if (this.person.gender === "Мужчина,") {
      return this.randomValue(this.maleProfessionJson);
    } else {
      return this.randomValue(this.femaleProfessionJson);
    }
  },

  getPerson: function () {
    this.person = {};
    this.person.gender = this.randomGender();
    this.person.firstName = this.randomFirstName();
    this.person.surname = this.randomSurname();
    this.person.ageOfBirth = this.randomAgeOfBirth();
    this.person.monthOfBirth = this.randomMonthOfBirth();
    this.person.dayOfBirth = this.randomDayOfBirth();
    this.person.profession = this.randomProfession();
    this.person.patronymic = this.randomPatronymic();
    return this.person;
  },
};
