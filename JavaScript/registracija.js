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
    var prezime = document.getElementById("prezime").value;
    if(prezime ==""){
        window.alert("Morate uneti prezime!");
        return false;
    }
    var pass = document.getElementById("sifra").value;
    if(pass == ""){
        window.alert("Morate uneti šifru!");
        return false;
    }
    var re_pass = document.getElementById("resifra").value;
    if(re_pass == ""){
        window.alert("Morate ponoviti šifru!");
        return false;
    }
    var email = document.getElementById("email").value;
    if(email == "" ){
        window.alert("Morate uneti e-mail!");
        return false;
    }
    var drzava=document.getElementById("drzava").value;
    if(drzava == ""){
        window.alert("Morate uneti državu porekla!");
        return false;
    }
    var klijent =document.getElementById("klijent").value;
    if(klijent == ""){
        window.alert("Morate uneti tip kupovine!");
        return false;
    }
    var p = document.getElementById("zenski").checked;
    var d = document.getElementById("muski").checked;
    var t = document.getElementById("ns").checked;
    var pol;
    if(p==true){
        pol="zenski";
    }
    if(d==true){
        pol="muski";
    }
    if(t==true){
        pol="neizjasnjen";
    }
    var sifra = "";
    if(pass== re_pass){
        sifra=pass;
    }else{
        window.alert("Šifre u oba polja moraju biti iste!");
        return false;
    }
    if(email.includes("@") == false){
        window.alert("E-mail nije u dobrom formatu!");
        return false;
    }
    var poruka = "Uspešno ste se registrovali! \n Vaše ime je"+ime;
    poruka +="\n Vaše prezime je "+prezime;
    if(sifra==""){
        poruka += "\n Niste uneli šifru"
    }else{
        poruka += "\n Vaša šifra je "+sifra;
    }
    poruka +="\n Vaš email je "+email;
    poruka +="\n Vaš pol je "+pol;
    poruka += "\n Vaša država je "+drzava;
    poruka += "\n Vaš tip kupovine je "+klijent;
    confirm(poruka);
}