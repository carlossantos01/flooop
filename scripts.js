const home = document.querySelector(".home");
const qsn = document.querySelector(".qsn");

qsn.style.display = "none";

function btnHome(){
    home.style.display = "flex";
    qsn.style.display = "none";

}
function btnQsn(){
    home.style.display = "none";
    qsn.style.display = "flex";
}