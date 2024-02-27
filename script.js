
  
// FILTER FUNCTION 
//    fetch("https://restcountries.com/v3.1/all")
//   .then(response => response.json())
//   .then(data => {
//     // Filtering countries from Asia
//     const asianCountries = data.filter(country => country.region === "Asia");

//     // Displaying the list of Asian countries
//     console.log("Countries from Asia:", asianCountries.map(country => country.name.common));
//   })
//   .catch(error => console.log("Error fetching data:", error));

// FILTER FUNCTION


// fetch("https://restcountries.com/v3.1/all")
//   .then(response => response.json())
//   .then(data => {
//     const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);
//     console.log(countriesWithPopulationLessThan2Lakhs);
//   })
//   .catch(error => console.log("Error fetching data:", error));


// FOREACH FUNCTION

// fetch("https://restcountries.com/v3.1/all")
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(country => {
//       const name = country.name.common;
//       const capital = country.capital[0] || "N/A"; // Handle cases where capital is not available
//       const flag = country.flags.png;
//       console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
//     });
//   })
//   .catch(error => console.log("Error fetching data:", error));



// REDUCE FUNCTION

// fetch("https://restcountries.com/v3.1/all")
//   .then(response => response.json())
//   .then(data => {
//     const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);
//     console.log("Total population of all countries:", totalPopulation);
//   })
//   .catch(error => console.log("Error fetching data:", error));


fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    const countryUsingUSD = data.find(country => country.currencies?.USD);
    if (countryUsingUSD) {
      console.log("Country that uses US dollars as currency:", countryUsingUSD.name.common);
    } else {
      console.log("No country uses US dollars as currency.");
    }
  })
  .catch(error => console.log("Error fetching data:", error));


