const container = document.querySelector('.container')
const main = document.createElement('div')
const input = document.querySelector('#i-1')
container.appendChild(main)
main.classList.add('main')
function displayCountries(results) { 
    
    results.forEach(element => { 
    const { name: { common }, 
        population, region, 
        flags: {png}, 
        capital} = element 
 
    main.innerHTML += 
 
        ` 
            <div class="card"> 
            <img src="${png}" alt=""/> 
            <p><b> ${common}</b></p> 
            <p><b>Population:</b> ${population}</p> 
            <p><b>Region:</b> ${region}</p> 
            <p><b>Capital:</b> ${capital}</p> 
            </div> 
            ` 
        }); 
}

async function countryData(){

    try {
        const response = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await response.json();
        console.log(data)
        displayCountries(data)
    }
    catch(error){
        console.error(error)
    }
}

input.addEventListener("input", (event) => {
    let searchText = event.target.value;

    fetch(`https://restcountries.com/v3.1/all=${all}`)
      .then((response) => response.json())
      .then((data) => {
        const { name: { common }, 
        population, region, 
        flags: {png}, 
        capital} = data 
  
        let filteredArray = main.filter((key) =>
          key.main.toLowerCase().includes(searchText.toLowerCase())
        );

        countryData(filteredArray)
      });
  });
  countryData()

  




// displayCountries()
