var nt = document.getElementById("nt");
var rt = document.getElementById("rt");
var list = document.getElementsByClassName("pag");
var count = list.length;

var current = 0; // página atual

function updatePages() {
    for (var i = 0; i < count; i++) {
        list[i].classList.remove("active");
    }
    list[current].classList.add("active");
}

// Próximo com loop
nt.onclick = () => {
    current++;
    if (current >= count) {
        current = 0; // volta para a primeira
    }
    updatePages();
};

// Anterior com loop
rt.onclick = () => {
    current--;
    if (current < 0) {
        current = count - 1; // vai para a última
    }
    updatePages();
};

// Inicializa
updatePages();
