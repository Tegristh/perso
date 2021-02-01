var boite = document.querySelector('#gnomebar');
function horloge()
{
var d = new Date();
var hours = d.getHours()+"H "+d.getMinutes()+'M '+d.getSeconds()+'s ';
var tabMonth = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre");
var date = d.getDate()+' '+(tabMonth[d.getMonth()]) +' '+d.getFullYear();
  
var fullDate = hours +` |  Le `+ date;
boite.textContent = fullDate;

}
setInterval("horloge()",1000)