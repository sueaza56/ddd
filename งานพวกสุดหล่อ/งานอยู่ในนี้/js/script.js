const suea = document.getElementsByClassName("suea")[0];
const info = document.getElementsByClassName("info")[0];
const ying = document.getElementsByClassName("suea")[1];
const infoying = document.getElementsByClassName("info")[1];
const boom = document.getElementsByClassName("suea")[2];
const infoboom = document.getElementsByClassName("info")[2];
const smart = document.getElementsByClassName("suea")[3];
const infosmart = document.getElementsByClassName("info")[3];
const f = document.getElementsByClassName("suea")[4];
const infof = document.getElementsByClassName("info")[4];
const g = document.getElementsByClassName("suea")[5];
const infog = document.getElementsByClassName("info")[5];
const d = document.getElementsByClassName("suea")[6];
const infod = document.getElementsByClassName("info")[6];
const ig = document.getElementsByClassName("suea")[7];
const infoig = document.getElementsByClassName("info")[7];
// suea

suea.addEventListener("mouseenter", () => {
    suea.classList.remove("numberone-out")
    info.classList.add("show");
    suea.classList.add("numberone");
});

suea.addEventListener("mouseleave", () => {
    info.classList.remove("show");
    suea.classList.remove("numberone");
    suea.classList.add("numberone-out");
});
// suea.addEventListener("mouseenter",() =>{
//     delay = setTimeout(() =>{
//     suea.classList.remove("numberone-out"); 
//     info.classList.remove("dejad-out");
//     info.classList.add("dejad");
//     suea.classList.add("numberone");
//     info.style.display="inline-block";
//     },100
//     )});


// suea.addEventListener("animationend",(s)=>{
//     if(s.animationName === "namein"){
//         suea.classList.remove("dejad");
//         info.classList.remove("numberone");
//     }
// })

// suea.addEventListener("mouseleave",()=>{
//     suea.classList.add("numberone-out");
//     info.classList.add("dejad-out");
//     clearTimeout(delay);
// })

// info.addEventListener("animationend", (e)=>{
//     if(e.animationName==="popupwowww-out"){
//         info.classList.remove("dejad-out");
//         info.style.display="none";
//     }
// });

// suea.addEventListener("animationend",(a)=>{
//     if(a.animationName==="nameout"){
//         suea.classList.remove("numberone-out");
//         info.classList.remove("dejad")
//         suea.classList.remove("numberone");
//     }
// })

// ying yai
// ying.addEventListener("mouseenter",() =>{
//    infoying.classList.add("dejad");
//     ying.classList.add("numberone");
//     infoying.style.display="inline-block";
// })

// ying.addEventListener("animationend",(s)=>{
//     if(s.animationName === "namein"){
//         ying.classList.remove("dejad");
//         infoying.classList.remove("numberone");
//     }
// })

// ying.addEventListener("mouseleave",()=>{
//     ying.classList.add("numberone-out");
//     infoying.classList.add("dejad-out");
// })

// infoying.addEventListener("animationend", (e)=>{
//     if(e.animationName==="popupwowww-out"){
//         infoying.classList.remove("dejad-out");
//         infoying.style.display="none";
//     }
// });

// ying.addEventListener("animationend",(a)=>{
//     if(a.animationName==="nameout"){
//         ying.classList.remove("numberone-out");
//         infoying.classList.remove("dejad")
//         ying.classList.remove("numberone");
//     }
// })

ying.addEventListener("mouseenter", () => {
    ying.classList.remove("numberone-out")
    infoying.classList.add("show");
    ying.classList.add("numberone");
});

ying.addEventListener("mouseleave", () => {
    infoying.classList.remove("show");
    ying.classList.remove("numberone");
    ying.classList.add("numberone-out");
});

boom.addEventListener("mouseenter", () => {
    boom.classList.remove("numberone-out")
    infoboom.classList.add("show");
    boom.classList.add("numberone");
});

boom.addEventListener("mouseleave", () => {
    infoboom.classList.remove("show");
    boom.classList.remove("numberone");
    boom.classList.add("numberone-out");
});

smart.addEventListener("mouseenter",()=>{
    smart.classList.remove("numberone-out");
    infosmart.classList.add("show");
    smart.classList.add("numberone");
    
})

smart.addEventListener("mouseleave",()=>{
    infosmart.classList.remove("show");
    smart.classList.remove("numberone");
    smart.classList.add("numberone-out");
    
})

f.addEventListener("mouseenter",()=>{
    f.classList.remove("numberone-out");
    infof.classList.add("show");
    f.classList.add("numberone");
    
})

f.addEventListener("mouseleave",()=>{
    infof.classList.remove("show");
    f.classList.remove("numberone");
    f.classList.add("numberone-out");
    
})

g.addEventListener("mouseenter",()=>{
    g.classList.remove("numberone-out");
    infog.classList.add("show");
    g.classList.add("numberone");
    
})

g.addEventListener("mouseleave",()=>{
    infog.classList.remove("show");
    g.classList.remove("numberone");
    g.classList.add("numberone-out");
    
})

d.addEventListener("mouseenter",()=>{
    d.classList.remove("numberone-out");
    infod.classList.add("show");
    d.classList.add("numberone");
    
})

d.addEventListener("mouseleave",()=>{
    infod.classList.remove("show");
    d.classList.remove("numberone");
    d.classList.add("numberone-out");
    
})

ig.addEventListener("mouseenter",()=>{
    ig.classList.remove("numberone-out");
    infoig.classList.add("show");
    ig.classList.add("numberone");
    
})

ig.addEventListener("mouseleave",()=>{
    infoig.classList.remove("show");
    ig.classList.remove("numberone");
    ig.classList.add("numberone-out");
    
})

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