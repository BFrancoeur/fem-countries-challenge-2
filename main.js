// get data via api call
fetch("https://restcountries.eu/rest/v2/all?fields=flag;name;region;population;capital")
.then(response => response.json())
.then(data => {
    fillCountriesList(data);
});

// create list items and add them to ul
function fillCountriesList(array) {
   // create an <li> element to list each country
   // create a div to serve as a container for each country's details
   // append the country to the <li>
   // append the <li> to the #countries element
}