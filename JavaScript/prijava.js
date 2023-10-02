function otvoriIZatvoriPadajuciMeni() {
    var x = document.getElementById("linkovi");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function funkcija(){
    var ime = document.getElementById("ime").value;
    if(ime == ""){
        window.alert("Morate uneti ime!");
        return false;
    }
    var sifra = document.getElementById("sifra").value;
    if(sifra == ""){
        window.alert("Morate uneti šifru!");
        return false;
    }
    var poruka = "Uspesno ste se ulogovali \n Vase ime je: "+ime;
    if(sifra==""){
        poruka += "\n Niste uneli šifru!"
    }else{
        poruka += "\n Vasa šifra je: "+sifra;
    }
    confirm(poruka);
}