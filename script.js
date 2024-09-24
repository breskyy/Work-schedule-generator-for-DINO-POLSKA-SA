// początkowa lista pracowników
const pracownicy = [
  "Pracownik1",
  "Pracownik2",
  "Pracownik3",
  "Pracownik4",
  "Pracownik5",
  "Pracownik6",
  "Pracownik7",
  "Pracownik8",
  "Pracownik9",
  "Pracownik10",
  "Pracownik11",
  "Pracownik12"
];
// console.log(pracownicy);

// testowe uzyskiwanie daty
let date = new Date();

const dni = [
  "niedziela",
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
  "sobota"
];

const miesiace = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listopad",
  "grudzień"
];

let thisDay = date.getDay();
// console.log(dni[thisDay]);

let thisMonth = date.getMonth();
// console.log(miesiace[thisMonth]);

const pracownicy.forEach((pracownik) => {
  const th = document.createElement("p");
      h2.innerHTML = pracownik;
      p.appendChild(h2);
})
