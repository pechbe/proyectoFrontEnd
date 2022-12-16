
const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
      onlyCountries: ["pe", "co", "ar", "br", "cl", "mx", "es"],
      separateDialCode: "true",
      
    initialCountry: "pe",
    geoIpLookup: getIp,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });


   


   function getIp(callback) {
    fetch('https://ipinfo.io/json?token=<your token>', { headers: { 'Accept': 'application/json' }})
      .then((resp) => resp.json())
      .catch(() => {
        return {
          country: 'us',
        };
      })
      .then((resp) => callback(resp.country));
   }

   const input_membershipid = document.querySelector("#membership_id");

   const dropdowns = document.querySelectorAll('.dropdown');

   dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

  
      

   select.addEventListener('click', ()=>{
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
   });

   options.forEach(option => {
    option.addEventListener('click', ()=>{
      selected.innerText = option.innerText;

      console.log(selected.innerText);
      if(selected.innerText === "2 Estudiantes")
        document.querySelector("#membership_id").innerText = "325";

      if(selected.innerText === "4 Estudiantes")
        document.querySelector("#membership_id").innerText = "326";

        console.log(document.querySelector("#membership_id").innerTex);
      
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach(option =>{
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
   });

  });


  let p = document.getElementById("LiteClick"); // Obtiene el elemento con el id LiteClick
  p.onclick = muestraAlerta; // Agrega función onclick al elemento
  
  function muestraAlerta(evento) {

    document.querySelector("#details-aux-tit-d1").innerHTML="&#10004";
    document.querySelector("#details-aux-tit-d1").style.color = "#9da0bb";

    document.querySelector("#details-aux-tit-d2").innerHTML="1";
    document.querySelector("#details-aux-tit-d2").style.color = "#9da0bb";

    document.querySelector("#details-aux-tit-d3").innerHTML="Max. 3";
    document.querySelector("#details-aux-tit-d3").style.color = "#9da0bb";

    document.querySelector("#details-aux-tit-d4").innerHTML="--";
    document.querySelector("#details-aux-tit-d4").style.color = "#9da0bb";

    document.querySelector("#details-aux-tit-d5").innerHTML="&#10004";
    document.querySelector("#details-aux-tit-d5").style.color = "#9da0bb";
  }

  let p2 = document.getElementById("IndiClick"); // Obtiene el elemento con el id IndiClick
  p2.onclick = muestraAlerta2; // Agrega función onclick al elemento
    
  function muestraAlerta2(evento) {
    
    document.querySelector("#details-aux-tit-d1").innerHTML="&#10004";
    document.querySelector("#details-aux-tit-d1").style.color = "#9da0bb";
  
    document.querySelector("#details-aux-tit-d2").innerHTML="1";
    document.querySelector("#details-aux-tit-d2").style.color = "#9da0bb";

    document.querySelector("#details-aux-tit-d3").innerHTML="Ilimitadas";
    document.querySelector("#details-aux-tit-d3").style.color = "#9da0bb";

    document.querySelector("#details-aux-tit-d4").innerHTML="&#10004";
    document.querySelector("#details-aux-tit-d4").style.color = "#9da0bb";

    document.querySelector("#details-aux-tit-d5").innerHTML="&#10004";
    document.querySelector("#details-aux-tit-d5").style.color = "#9da0bb";
  }

  let p3 = document.getElementById("DuoClick"); // Obtiene el elemento con el id DuoClick
  p3.onclick = muestraAlerta3; // Agrega función onclick al elemento
    
  function muestraAlerta3(evento) {
    
    document.querySelector("#details-aux-tit-d1").innerHTML="&#10004";
    document.querySelector("#details-aux-tit-d1").style.color = "#ffd166";

    document.querySelector("#details-aux-tit-d2").innerHTML="2";
    document.querySelector("#details-aux-tit-d2").style.color = "#ffd166";

    document.querySelector("#details-aux-tit-d3").innerHTML="Ilimitadas";
    document.querySelector("#details-aux-tit-d3").style.color = "#ffd166";

    document.querySelector("#details-aux-tit-d4").innerHTML="&#10004";
    document.querySelector("#details-aux-tit-d4").style.color = "#ffd166";

    document.querySelector("#details-aux-tit-d5").innerHTML="&#10004";
    document.querySelector("#details-aux-tit-d5").style.color = "#ffd166";
  }
