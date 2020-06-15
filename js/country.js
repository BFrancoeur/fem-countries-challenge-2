getCountryDetails(window.location.search.slice(6), false);

        function getCountryDetails(name, isBorderCountry) {
            if(isBorderCountry) {
                fetch(`https://restcountries.eu/rest/v2/alpha/${name}?fields=flag;name;region;population;capital;borders;languages`)
                .then(response => response.json())
                .then(data => {
                    showCountryDetails(data);
                });
            } else {
                fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=flag;name;region;population;capital;borders; languages`)
                .then(response => response.json())
                .then(data => {
                    showCountryDetails(data[0]);
                });
            }
        }
        
        function showCountryDetails(country) {

            let dl = document.createElement('dl');
            dl.innerHTML = `
                <dt>Population: <dd>${country.population}</dd></dt>
                <dt>Capital: <dd>${country.capital}</dd></dt>
                <dt>Region: <dd>${country.region}</dd></dt>
                <dt>Border Countries: </dt>
           `;

           

           let articleContainer = document.getElementById('container');

           country.borders.map(border => {
               let dd = document.createElement('dd');
                dd.textContent = border;
                dd.addEventListener('click', function(event) {
                    getCountryDetails(event.target.textContent, true);
                    console.log(event);
                });

                dl.appendChild(dd);
           });

           articleContainer.innerHTML = `
                <img width="200" src="${country.flag}"/>
                <h2>${country.name}</h2>
            `;

            articleContainer.appendChild(dl);
        }