function selectMaterii() {
    let select = document.getElementById("sel_materii");
    for (i = 0; i < select.options.length; i++) {
        var ds = select.options[i].value;
        var dm = document.getElementById(ds);
        if (select.options[i].selected) {
            dm.style.display = "flex";

        } else {
            dm.style.display = "none";
        }
    }
    let a = select.options[select.options.selectedIndex].value;
}


var f = document.forms[0];


function selectMate() {
    let formula = document.getElementById("formula");
    let x = formula.options[formula.options.selectedIndex].value;
    if (x == "1") {
        document.getElementById("f1").style.display = "inline";
        document.getElementById("f2").style.display = "none";
    } else {
        document.getElementById("f1").style.display = "none";
        document.getElementById("f2").style.display = "inline";
    }

}


function medieMateV1() {
    let n1 = parseFloat(f.n1_1.value);
    let n2 = parseFloat(f.n2_1.value);
    let n3 = parseFloat(f.n3_1.value);
    let ns = parseFloat(f.ns_1.value);
    if ((n1 > 10) || (n1 < 0) || isNaN(n1) ||
        (n2 > 10) || (n2 < 0) || isNaN(n2) ||
        (n3 > 10) || (n3 < 0) || isNaN(n3) ||
        (ns > 10) || (ns < 0) || isNaN(ns)) {
        document.getElementById("medieMAE").innerHTML = "Eroare!"
    } else {
        var mediafinalaV1 = Math.round(100 * ((2 * (n1 + n2 + n3) / 3) + ns) / 3) / 100;
        document.getElementById("medieMAE").innerHTML = "Media ta: " + mediafinalaV1 + " (" + Math.round(mediafinalaV1) + ")";
    }


}

function medieMateV2() {
    let n1 = parseFloat(f.n1_2.value);
    let n2 = parseFloat(f.n2_2.value);
    let n3 = parseFloat(f.n3_2.value);
    let np = parseFloat(f.np_2.value);
    let ns = parseFloat(f.ns_2.value);
    if ((n1 > 10) || (n1 < 0) || isNaN(n1) ||
        (n2 > 10) || (n2 < 0) || isNaN(n2) ||
        (n3 > 10) || (n3 < 0) || isNaN(n3) ||
        (np > 10) || (np < 0) || isNaN(np) ||
        (ns > 10) || (ns < 0) || isNaN(ns)) {
        document.getElementById("medieMAE").innerHTML = "Eroare!"
    } else {
        var mediafinalaV2 = Math.round(((((n1 + n2 + n3) / 3) + np + ns) / 3) * 100) / 100;
        document.getElementById("medieMAE").innerHTML = "Media ta: " + mediafinalaV2 + " (" + Math.round(mediafinalaV2) + ")";
    }
}

function medieMicro() {
    let nsm = parseFloat(f.nsm_3.value);
    let n1 = parseFloat(f.n1_3.value);
    let n2 = parseFloat(f.n2_3.value);
    let ns = parseFloat(f.ns_3.value);
    if ((n1 > 10) || (n1 < 0) || isNaN(n1) ||
        (n2 > 10) || (n2 < 0) || isNaN(n2) ||
        (ns > 10) || (ns < 0) || isNaN(ns) ||
        (nsm > 10) || (nsm < 0) || isNaN(nsm)) {
        document.getElementById("medieMIC").innerHTML = "Eroare!"
    } else {
        var mediafinalaMicro = Math.round(((nsm + n1 + n2 + 7 * ns) / 10) * 100) / 100;
        document.getElementById("medieMIC").innerHTML = "Media ta: " + mediafinalaMicro + " (" + Math.round(mediafinalaMicro) + ")"
    }
}
function medieMgm() {
    let nc = parseFloat(f.nc_4.value);
    let nsm = parseFloat(f.nsm_4.value);
    let ns = parseFloat(f.ns_4.value);
    if ((nc > 10) || (nc < 0) || isNaN(nc) ||
        (nsm > 10) || (nsm < 0) || isNaN(nsm) ||
        (ns > 10) || (ns < 0) || isNaN(ns)) {
        document.getElementById("medieMGM").innerHTML = "Eroare!"
    } else {
        var mediafinalaMgm = Math.round(((1 + 1, 5 * nc + 2, 5 * nsm + 5 * ns) / 10) * 100) / 100;
        document.getElementById("medieMGM").innerHTML = "Media ta: " + mediafinalaMgm + " (" + Math.round(mediafinalaMgm) + ")";
    }
}

function medieFP() {
    let nsm = parseFloat(f.nsm_5.value);
    let ns = parseFloat(f.ns_5.value);
    if ((nsm > 10) || (nsm < 0) || isNaN(nsm) ||
        (ns > 10) || (ns < 0) || isNaN(ns)) {
        document.getElementById("medieFP").innerHTML = "Eroare!"
    } else {
        var mediafinalaFP = Math.round(((8 * ns + 2 * nsm) / 10) * 100) / 100;
        document.getElementById("medieFP").innerHTML = "Media ta: " + mediafinalaFP + " (" + Math.round(mediafinalaFP) + ")";
    }
}

function medieEE() {
    let n1 = parseFloat(f.n1_6.value);
    let np = parseFloat(f.np_6.value);
    let ns = parseFloat(f.ns_6.value);
    if ((n1 > 10) || (n1 < 0) || isNaN(n1) ||
        (np > 10) || (np < 0) || isNaN(np) ||
        (ns > 10) || (ns < 0) || isNaN(ns)) {
        document.getElementById("medieEE").innerHTML = "Eroare!"
    } else {
        var mediafinalaEE = Math.round(((7 * ns + 3 * ((np + n1) / 2)) / 10) * 100) / 100;
        document.getElementById("medieEE").innerHTML = "Media ta: " + mediafinalaEE + " (" + Math.round(mediafinalaEE) + ")";
    }
}

function medieFS() {
    let ns = parseFloat(f.ns_7.value);
    let np = parseFloat(f.np_7.value);
    if ((np > 10) || (np < 0) || isNaN(np) ||
        (ns > 10) || (ns < 0) || isNaN(ns)) {
        document.getElementById("medieFS").innerHTML = "Eroare!"
    } else {
        var mediafinalaFS = Math.round(((10 + 3 * np + 6 * ns) / 10) * 100) / 100;
        document.getElementById("medieFS").innerHTML = "Media ta: " + mediafinalaFS + " (" + Math.round(mediafinalaFS) + ")";
    }
}
