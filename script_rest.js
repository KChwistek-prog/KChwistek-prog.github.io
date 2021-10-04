const url = "http://localhost:8080/v1/thermowelltmp";

const temperature = fetch(url)
  .then((response) => response.json())
  .then((tmp) => {
    document.getElementById("thermowell").innerHTML = tmp;
  });

