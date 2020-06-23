let countriesList = [];
let workingList = [];
let countries = document.getElementById('countries');
const select = document.getElementById('filter');
const search = document.getElementById('search');

select.addEventListener('change', filterCountriesList);
search.addEventListener('keyup', searchCountriesList);

function searchCountriesList(event) {
    workingList = countriesList;
    fillCountriesList(
        workingList.filter((country) => {
            return country.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
        })
    );
}


getAllCountries();

function getAllCountries() {
    fetch("https://restcountries.eu/rest/v2/all?fields=flag;name;region;population;capital")
    .then(response => response.json())
    .then(data => {
        countriesList = data;
        fillCountriesList(data);
    });

}

function getSingleRegion(name) {
    fetch(`https://restcountries.eu/rest/v2/region/${name}?fields=flag;name;region;population;capital`)
    .then(response => response.json())
    .then(data => {
        countriesList = data;
        fillCountriesList(data);
    });
}

function fillCountriesList(array) {
   countries.innerHTML = "";
   array.forEach((country) => {

    let li = document.createElement('li');
    li.classList.add('country-item');

    li.addEventListener('click', function() {
        window.location.assign(`country.html?name=${country.name}`);
    })
   
   li.innerHTML = `
    <img class="flag" src="${country.flag}"/>
    <div class="details">
        <h2>${country.name}</h2>
        <dl class="details-content">
            <div>
                <dt class="detail-label"><strong>Population</strong></dt>
                <dd class="detail-description">${country.population}</dd>
            </div>
            <div>
                <dt class="detail-label"><strong>Capital</strong></dt>
                <dd class="detail-description">${country.capital}</dd>
            </div>
            <div>
                <dt class="detail-label"><strong>Region</strong></dt>
                <dd class="detail-description">${country.region}</dd>
            </div>
        </dl>
    </div>
   `;

   countries.appendChild(li);

   }); 
}

function filterCountriesList(event) {
    event.target.value == "" ? getAllCountries() : getSingleRegion(event.target.value);
}


 
