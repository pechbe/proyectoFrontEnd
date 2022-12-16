function $_GET(param)
{
/* Obtener la url completa */
url = document.URL;
/* Buscar a partir del signo de interrogación ? */
url = String(url.match(/\?+.+/));
/* limpiar la cadena quitándole el signo ? */
url = url.replace("?", "");
/* Crear un array con parametro=valor */
url = url.split("&");

/* 
Recorrer el array url
obtener el valor y dividirlo en dos partes a través del signo = 
0 = parametro
1 = valor
Si el parámetro existe devolver su valor
*/
x = 0;
while (x < url.length)
{
p = url[x].split("=");
if (p[0] == param)
{
return decodeURIComponent(p[1]);
}
x++;
}
}

function pagos(){
    if($_GET("source_detail") == "Lite" && $_GET("source_page") == "Membership+Landing" && $_GET("membership_id") == "1444")
    {
        document.querySelector("#tipo_membresia").innerHTML="Acceda a todo el catálogo con una Membresía Premium Lite";
        document.querySelector("#total_a_pagar_impnew").innerHTML="S/174,00";
        document.querySelector("#total_a_pagar_impold").innerHTML="";
    };
    if($_GET("source_detail") == "Individual" && $_GET("source_page") == "Membership+Landing" && $_GET("membership_id") == "34")
    {
        document.querySelector("#tipo_membresia").innerHTML="Acceda a todo el catálogo con una Membresía Premium";
        document.querySelector("#total_a_pagar_impnew").innerHTML="S/279,00";
        document.querySelector("#total_a_pagar_impold").innerHTML="S/408,00";
    };
    if($_GET("source_detail") == "Dúo" && $_GET("source_page") == "Membership+Landing" && $_GET("membership_id") == "325")
    {
        document.querySelector("#tipo_membresia").innerHTML="Membresía Dúo";
        document.querySelector("#total_a_pagar_impnew").innerHTML="S/319,00";
        document.querySelector("#total_a_pagar_impold").innerHTML="S/490,00";
    }
};

pagos();


const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.bloque')

li.forEach(( cadaLi, i)=>{
    li[i].addEventListener('click',()=> {
        li.forEach(( cadaauc, y )=>{
            li[y].classList.remove('activo')
            bloque[y].classList.remove('activo')
        })

        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
});

//For Card Number formatted input
var cardNum = document.getElementById('card');
cardNum.onkeyup = function (e) {
    if (this.value == this.lastValue) return;
    var caretPosition = this.selectionStart;
    var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
    var parts = [];
    
    for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
        parts.push(sanitizedValue.substring(i, i + 4));
    }
    
    for (var i = caretPosition - 1; i >= 0; i--) {
        var c = this.value[i];
        if (c < '0' || c > '9') {
            caretPosition--;
        }
    }
    caretPosition += Math.floor(caretPosition / 4);
    
    this.value = this.lastValue = parts.join('-');
    this.selectionStart = this.selectionEnd = caretPosition;
};

//For Date formatted input
var expDate = document.getElementById('exp');
expDate.onkeyup = function (e) {
    if (this.value == this.lastValue) return;
    var caretPosition = this.selectionStart;
    var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
    var parts = [];
    
    for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
        parts.push(sanitizedValue.substring(i, i + 2));
    }
    
    for (var i = caretPosition - 1; i >= 0; i--) {
        var c = this.value[i];
        if (c < '0' || c > '9') {
            caretPosition--;
        }
    }
    caretPosition += Math.floor(caretPosition / 2);
    
    this.value = this.lastValue = parts.join('/');
    this.selectionStart = this.selectionEnd = caretPosition;
};

var menuOpenPopup = document.getElementById('open-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnClosePopup = document.getElementById('btn-cerrar-popup');

    menuOpenPopup.addEventListener('click', function(){
        overlay.classList.add('active');
        popup.classList.add('active');
    });
    
    btnClosePopup.addEventListener('click', function(e){
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    });
