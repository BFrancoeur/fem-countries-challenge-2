
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
                    <img src="${country.flag}"/>
                </div>
                <div id="col2-details" class="column"> 
                    <h2 id="country-name">${country.name}</h2>      
                    <dl id="details-content">
                        <div>
                            <dt class="detail-label">Native Name </dt>
                            <dd class="detail-description">${country.nativeName}</dd>
                        </div>
                        <div>
                            <dt class="detail-label">Population </dt>
                            <dd class="detail-description">${country.population}</dd>
                        </div>
                        <div>
                            <dt class="detail-label">Region </dt>
                            <dd class="detail-description">${country.region}</dd>
                        </div>
                        <div>
                            <dt class="detail-label">Sub Region </dt>
                            <dd class="detail-description">${country.subregion}</dd>
                        </div>
                        <div>
                            <dt class="detail-label">Capital </dt>
                            <dd class="detail-description">${country.capital}</dd>
                        </div>
                        <div>
                            <dt class="detail-label">Top Level Domain </dt>
                            <dd class="detail-description">${country.topLevelDomain}</dd>
                        </div>
                        <div>
                            <dt class="detail-label">Currencies </dt>
                            <dd class="detail-description">${country.currencies[0].name}</dd>
                        </div>
                        <div>
                            <dt class="detail-label">Languages </dt>
                            <dd class="detail-description">${country.languages[0].name}</dd>
                        </div>
                    </dl>
                </div>
            `;

            getBorderCountryNames(country.borders);
            
            articleContainer.appendChild(div);
        }