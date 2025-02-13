setTimeout(() => {
    document.getElementById("img1").classList.add("float");
}, 7000); 

setTimeout(() => {
    document.getElementById("img2").classList.add("float");
}, 9000); 

setTimeout(() => {
    document.getElementById("img3").classList.add("float");
}, 11000); 

setTimeout(() => {
    document.getElementById("img1").classList.add("floatUpp");
}, 9000);

setTimeout(() => {
    document.getElementById("img2").classList.add("floatUpp");
}, 11000);

setTimeout(() => {
    document.getElementById("img3").classList.add("floatUpp");
}, 13000);

setTimeout(() => {
    document.getElementById("yes").classList.add("show");
}, 19000);

setTimeout(() => {
    document.getElementById("no").classList.add("show");
}, 20000);

function nextPage() {
    window.location.href = "yes.html"; 
}

function showText() {
    document.getElementById("hiddenText").style.display = "block";
}
