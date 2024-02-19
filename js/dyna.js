let itempage = document.querySelector("body.item");
if(itempage) {
    hutitle = document.querySelector("body.item #page-header h2.hu").textContent;
    entitle = document.querySelector("body.item #page-header h2.en").textContent;
} else {
    hutitle = "Kőszeghy Csilla";
    entitle = "Csilla Kőszeghy";
}

if (navigator.language.includes("hu")) {
    document.querySelector("html").lang = "hu";
    document.title = hutitle;
} else {
    document.title = entitle;
}
document.querySelector(".lang.hu").onclick = () => {document.querySelector("html").lang = "en"; document.title = entitle;}
document.querySelector(".lang.en").onclick = () => {document.querySelector("html").lang = "hu"; document.title = hutitle;}