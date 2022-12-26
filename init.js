window.onload = function () {
  document.getElementById("btn1").addEventListener("click", function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById("firstNameOutput").innerText = initPerson.firstName;
    document.getElementById("surnameOutput").innerText = initPerson.surname;
    document.getElementById("genderOutput").innerText = initPerson.gender;
    document.getElementById("dayOfBirthOutput").innerText =
      initPerson.dayOfBirth;
    document.getElementById("monthOfBirthOutput").innerText =
      initPerson.monthOfBirth;
    document.getElementById("birthYearOutput").innerText =
      initPerson.ageOfBirth;
    document.getElementById("professionOutput").innerText =
      initPerson.profession;
    document.getElementById("patronymicOutput").innerText =
      initPerson.patronymic;
    if (initPerson.patronymic === "Никитаович") {
      return (document.getElementById("patronymicOutput").innerText =
        "Никитич");
    } else if (initPerson.patronymic === "Никитаовна") {
      return (document.getElementById("patronymicOutput").innerText =
        "Никитична");
    } else if (initPerson.patronymic === "Дмитрийович") {
      return (document.getElementById("patronymicOutput").innerText =
        "Дмитриевич");
    } else if (initPerson.patronymic === "Дмитрийовна") {
      return (document.getElementById("patronymicOutput").innerText =
        "Дмитриевна");
    } else if (initPerson.patronymic === "Михаилович") {
      return (document.getElementById("patronymicOutput").innerText =
        "Михайлович");
    } else if (initPerson.patronymic === "Михаиловна") {
      return (document.getElementById("patronymicOutput").innerText =
        "Михайловна");
    } else if (initPerson.patronymic === "Андрейович") {
      return (document.getElementById("patronymicOutput").innerText =
        "Андреевич");
    } else if (initPerson.patronymic === "Андрейовна") {
      return (document.getElementById("patronymicOutput").innerText =
        "Андреевна");
    }
  });
  document.getElementById("btn2").addEventListener("click", function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById("firstNameOutput").innerText = "Имя:";
    document.getElementById("surnameOutput").innerText = "Фамилия:";
    document.getElementById("genderOutput").innerText = "Пол:";
    document.getElementById("dayOfBirthOutput").innerText = "Число:";
    document.getElementById("monthOfBirthOutput").innerText = "Месяц:";
    document.getElementById("birthYearOutput").innerText = "Год рождения:";
    document.getElementById("patronymicOutput").innerText = "Отчество:";
    document.getElementById("professionOutput").innerText = "Профессия:";
  });
};
