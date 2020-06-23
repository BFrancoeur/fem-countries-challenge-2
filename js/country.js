
getCountryDetails(window.location.search.slice(6), false);
        // get country
        function getCountryDetails(name, isBorder) {
            if(isBorder) {
                fetch(`https://restcountries.eu/rest/v2/alpha/${name}?fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders`)
                .then(response => response.json())
                .then(data => {
                    showCountryDetails(data);
                });
            } else {
                fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders`)
                .then(response => response.json())
                .then(data => {
                    showCountryDetails(data[0]);
                });
            }
        }
        
        function showCountryDetails(country) {

            // console.log('currencies ', country[0].currencies);

            let div = document.createElement('div'); 

            div.setAttribute('id', 'article-inner');

           let articleContainer = document.getElementById('content');

           articleContainer.innerHTML = `
                <div id="col1" class="column">
                    <img class="flag" src="${country.flag}"/>
                </div>
                <div id="col2-details" class="column"> 
                    <h2 id="country-name">${country.name}</h2>      
                    <dl id="details-content">
                        <div>
                            <dt class="detail-label"><strong>Native Name</strong></dt>
                            <dd class="detail-description">${country.nativeName}</dd>
                        </div>
                        <div>
                            <dt class="detail-label"><strong>Population</strong></dt>
                            <dd class="detail-description">${country.population}</dd>
                        </div>
                        <div>
                            <dt class="detail-label"><strong>Region</strong></dt>
                            <dd class="detail-description">${country.region}</dd>
                        </div>
                        <div>
                            <dt class="detail-label"><strong>Sub Region</strong></dt>
                            <dd class="detail-description">${country.subregion}</dd>
                        </div>
                        <div>
                            <dt class="detail-label"><strong>Capital</strong></dt>
                            <dd class="detail-description">${country.capital}</dd>
                        </div>
                        <div>
                            <dt class="detail-label"><strong>Top Level Domain</strong></dt>
                            <dd class="detail-description">${country.topLevelDomain}</dd>
                        </div>
                        <div>
                            <dt class="detail-label"><strong>Currencies</strong></dt>
                            <dd class="detail-description">${country.currencies[0].name}</dd>
                        </div>
                        <div>
                            <dt class="detail-label"><strong>Languages</strong></dt>
                            <dd class="detail-description">${country.languages[0].name}</dd>
                        </div>
                        <div id="border-countries">
                            <ul id="border-list"><strong>Border Countries: </strong></ul>
                        </div>
                    </dl>
                </div>
            `;

           country.borders.forEach(countryCode => {
                let borderCountriesListElem = document.getElementById('border-list');
                var li = document.createElement('li');
                li.innerHTML = countryCode + ', ';
                
                borderCountriesListElem.appendChild(li);
            }); 
            articleContainer.appendChild(div);
        }
