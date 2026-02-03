document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  // Input validation
  if (!day || day < 1 || day > 31) {
    alert("Please enter a valid day (1–31)");
    return;
  }

  if (!month || month < 1 || month > 12) {
    alert("Please enter a valid month (1–12)");
    return;
  }

  if (!year) {
    alert("Please enter a valid year");
    return;
  }

  if (!gender) {
    alert("Please select a gender");
    return;
  }

  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const MM = month;
  const DD = day;

  const d = ((4 * CC - 2 * CC - 1) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];

  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];

  const dayName = days[d];
  const akanName = gender === "male" ? maleNames[d] : femaleNames[d];

  document.getElementById("result").textContent =
    `You were born on a ${dayName}. Your Akan name is ${akanName}.`;
});