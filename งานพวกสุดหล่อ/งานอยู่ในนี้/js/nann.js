const cards = document.querySelectorAll(".card");
let current = 0;

function slot() {
    cards.forEach((card, i) => {
    card.classList.remove("show");

    if (i === current) {
      card.classList.add("show");
    }
  });

  current = (current + 1) % cards.length;
}
slot();
setInterval(slot, 2500);

const web = [
    {
        name: "HTML",
        url: "../html/loadhtml.html"
    },
    {
        name: "CSS",
        url: "../html/loadcss.html"
    },
    {
        name: "JAVASCRIPT",
        url: "../html/loadjs.html"
    }
];

const search = document.querySelector(".sh");
const barr = document.querySelector(".barr");

function showResult() {
    const keyweb = search.value.toLowerCase().trim();
    barr.innerHTML = "";
    if (keyweb === "") {
        barr.style.display = "none";
        return [];
    }
    const result = web.filter((item) => {
        return item.name.toLowerCase().includes(keyweb);
    });
    result.forEach((item) => {
        const goda = document.createElement("a");

        goda.textContent = item.name;
        goda.href = item.url;

        barr.appendChild(goda);
    });
    barr.style.display = result.length > 0 ? "block" : "none";
    return result;
}
search.addEventListener("input", () => {
    showResult();
});
search.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {

        const result = showResult();

        if (result.length > 0) {
            window.location.href = result[0].url;
        }
    }
});
const go = document.querySelector(".go");
const zaa = [
    document.getElementById("dd"),
    document.getElementById("mm"),
    document.getElementById("tt"),
    document.getElementById("ll"),
    document.getElementById("yy"),
    document.getElementById("gg"),
];
let suea=0;
go.addEventListener("click",()=>{
    if(suea<zaa.length){
        zaa[suea].scrollIntoView();
        suea++;
    }
    else{
        window.scrollTo({top: 0,});
        suea=0;
    }
})
