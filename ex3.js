const traveler = {
    name: "Akhtari",
    countries: [
      {
        name: "Egypt",
        year: 2019
      },
      {
        model: "India",
        year: 2018
      },
      {
        model: "China",
        year: 2017
      }
    ]
  };

  fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(traveler)
  })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err.message);
    });