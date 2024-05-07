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


const txts = document.querySelectorAll("p.hu");
txts.forEach((txt) => {
    txt.innerHTML = txt.innerHTML.replace(/( a )/g,' a\xa0');
    txt.innerHTML = txt.innerHTML.replace(/( az )/g,' az\xa0');
    txt.innerHTML = txt.innerHTML.replace(/(A )/g,'A\xa0');
    txt.innerHTML = txt.innerHTML.replace(/(Az )/g,'Az\xa0');
});
