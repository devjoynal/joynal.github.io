const links = document.querySelectorAll(".alternate-style"),
    totallinks = links.length;

function setActiveStyle(t) {
    for (let e = 0; e < totallinks; e++) t === links[e].getAttribute("title") ? links[e].removeAttribute("disabled") : links[e].setAttribute("disabled", "true")
}
const bodySkin = document.querySelectorAll(".body-skin"),
    totalBodySkin = bodySkin.length;
for (let t = 0; t < totalBodySkin; t++) bodySkin[t].addEventListener("change", function(){
    if("dark" === this.value){
        document.body.className = "dark";
        localStorage.setItem("prevCol",$("#theme-color").attr("content"));
        $("#theme-color").attr("content",'#333');
        }
    else{
        document.body.className = "";
        $("#theme-color").attr("content",localStorage.getItem("prevCol"));
    }
});
document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
});