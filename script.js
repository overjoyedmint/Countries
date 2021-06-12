const mainList = document.getElementById("country-list");
const main = document.getElementById('main')
const darkModeButton = document.getElementById('mode')
const shadow = document.querySelector(".shadow");
const modal = document.querySelector(".modal");
const header = document.getElementById('header')
const countrySearch = document.getElementById("country-search");
const regionSelect = document.getElementById("region-select");




const close = document.querySelector('.close')

var Flagdata;


  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
createFlag(data)

console.log(data[0])
    }
    )

    
    ;

    











function createFlag(data) {

data.forEach(country =>{
  const newCountry = document.createElement("div");
  newCountry.classList.add("country");


  newCountry.innerHTML = ` 
        
        
        <div>
                 <div class="flag"><img src="${country.flag}"></div>

                    <div class="country-info">
                    
                        <h2 id="country-name">${country.name}</h2>

                        <p><strong>Population:</strong>  <span id="population">${country.population}</span></p>
                        <p><strong>Region:</strong> <span id="region">${country.region}</span></p>
                        <p><strong>Capitol:</strong> <span id="Capitol">${country.capital}</span></p>
                    </div>
                </div>



`;

newCountry.addEventListener("click", () => {
  createPop(country)

  modal.classList.remove('inactive')
});




 darkModeButton.addEventListener("click", () => {

 });


  mainList.appendChild(newCountry);

  

})

 
}











     

function createPop(country){
   {
   
     shadow.classList.toggle("active");
    
     console.log(country.population);

     const modall = document.createElement("div");
     modall.classList.add('modall')
     

     




     modall.innerHTML = `



      <button class="close"><i class="far fa-window-close"></i>
</button>

     <div class="left">
        <img src = "${country.flag}">

    </div>

    <div class="right"> 
       <h1 class = title >Name: ${country.name}</h1>
        <div class="smallInfo">




            <div class="leftSmall">
                 
                <p><b>Native Name:</b>   &nbsp  ${country.nativeName}</p>
                <p><b>Population:</b>   &nbsp  ${country.population}</p>
                <p><b>Region:</b>    &nbsp ${country.region}</p>
                <p><b>SubRegion:</b>  &nbsp   ${country.subregion}</p>
                <p><b>Capital:</b>    &nbsp ${country.capital}</p> 
                <p><b>Top Level Domain:      </b>  &nbsp   ${country.name}</p>
                <P><b>Currency:</b> &nbsp    ${country.currencies.map(
                  (currency) => currency.code
                )}</P>
                <p><b>Language(s):</b>    &nbsp ${country.languages.map(
                  (language) => language.name
                )}</p>
            </div>




          


        </div>

    </div>


  
  `;

     modal.appendChild(modall);
   }
const close = document.querySelector(".close");

close.addEventListener("click", () => {
  shadow.classList.toggle("active");
  modal.classList.add("inactive");
  modal.innerHTML="";
  

});


   

}



function toggle(){
 
}



 darkModeButton.addEventListener('click', (country)=>{
  main.classList.toggle('dark')
  header.classList.toggle('dark')
mainList.classList.toggle("dark");
modal.classList.toggle("dark");
countrySearch.classList.toggle("dark");
regionSelect.classList.toggle("dark");

})

countrySearch.addEventListener("input", (e) => {
  const val = e.target.value;
  console.log(val);
  const countryName = document.querySelectorAll("#country-name");

  countryName.forEach((name) => {
    console.log(name)
    if (name.innerText.toLowerCase().includes(val.toLowerCase())) {
      // .card -> .card-body -> .country-name
      name.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      name.parentElement.parentElement.parentElement.style.display = "none";
    }

    
  });
});

