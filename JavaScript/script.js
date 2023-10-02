function otvoriIZatvoriPadajuciMeni() {
  var pom = document.getElementById("linkovi");
  if (pom.style.display === "block") {
    pom.style.display = "none";
  } else {
    pom.style.display = "block";
  }
}

function otvoriSideBar(){
  document.getElementById("sideBar").style.width = "250px";
  document.getElementById("pomeranjeProzora").style.marginLeft = "250px";
}  
function zatvoriSideBar(){
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("pomeranjeProzora").style.marginLeft= "0";
}

var brPodudzbina = 0;
var datumPorudzbine = (new Date()).toLocaleDateString('sr');
function proslediPorudzbinu(){
  if(confirm("Da li želite da poručite izabrani proizvod?")==true){
    brPodudzbina++;
    document.getElementById("brojPorudzbina").innerHTML = "Broj porudžbina: " + brPodudzbina;
    document.getElementById("datumPorudzbine").innerHTML = "Datum porudžbine: " + datumPorudzbine;
  }
  else{
    return;
  }
}
function otkaziPorudzbinu(){
  if(confirm("Da li želite da otkažete porudžbinu?")==true){
    if(brPodudzbina<=0){
      window.alert("Ne postoji ni jedna porudžbina!");
    }
    else{
      brPodudzbina--;
      if(brPodudzbina<1){
        document.getElementById("datumPorudzbine").innerHTML = "";
        document.getElementById("brojPorudzbina").innerHTML = "";
      }
      else{
        document.getElementById("brojPorudzbina").innerHTML = "Broj porudžbina: " + brPodudzbina;
      }
    }
  }
  else{
    return;
  }
}

var brojKlikova = 0;
$(document).ready(function(){
  $(".dugmeZaPrikazDesktopova").click(function(){
    brojKlikova++;
    if(brojKlikova%2!=0){
      $(".dugmeZaPrikazLaptopova").prop("disabled", true);
      $(".dugmeZaPrikazTelefona").prop("disabled", true);
      $(".dugmeZaPrikazSatova").prop("disabled", true);
    }
    else{
      $(".dugmeZaPrikazLaptopova").prop("disabled", false);
      $(".dugmeZaPrikazTelefona").prop("disabled", false);
      $(".dugmeZaPrikazSatova").prop("disabled", false);
      brojKlikova = 0;
    }
    $(".laptop").toggle();
    $(".telefon").toggle();
    $(".sat").toggle();
  });
});
$(document).ready(function(){
  $(".dugmeZaPrikazLaptopova").click(function(){
    brojKlikova++;
    if(brojKlikova%2!=0){
      $(".dugmeZaPrikazDesktopova").prop("disabled", true);
      $(".dugmeZaPrikazTelefona").prop("disabled", true);
      $(".dugmeZaPrikazSatova").prop("disabled", true);
    }
    else{
      $(".dugmeZaPrikazDesktopova").prop("disabled", false);
      $(".dugmeZaPrikazTelefona").prop("disabled", false);
      $(".dugmeZaPrikazSatova").prop("disabled", false);
      brojKlikova = 0;
    }
    $(".desktop").toggle();
    $(".telefon").toggle();
    $(".sat").toggle();
  });
});

$(document).ready(function(){
  $(".dugmeZaPrikazTelefona").click(function(){
    brojKlikova++;
    if(brojKlikova%2!=0){
      $(".dugmeZaPrikazDesktopova").prop("disabled", true);
      $(".dugmeZaPrikazLaptopova").prop("disabled", true);
      $(".dugmeZaPrikazSatova").prop("disabled", true);
    }
    else{
      $(".dugmeZaPrikazDesktopova").prop("disabled", false);
      $(".dugmeZaPrikazLaptopova").prop("disabled", false);
      $(".dugmeZaPrikazSatova").prop("disabled", false);
    }
    $(".desktop").toggle();
    $(".laptop").toggle();
    $(".sat").toggle();
  });
});

$(document).ready(function(){
  $(".dugmeZaPrikazSatova").click(function(){
    brojKlikova++;
    if(brojKlikova%2!=0){
      $(".dugmeZaPrikazDesktopova").prop("disabled", true);
      $(".dugmeZaPrikazLaptopova").prop("disabled", true);
      $(".dugmeZaPrikazTelefona").prop("disabled", true);
    }
    else{
      $(".dugmeZaPrikazDesktopova").prop("disabled", false);
      $(".dugmeZaPrikazLaptopova").prop("disabled", false);
      $(".dugmeZaPrikazTelefona").prop("disabled", false);
      brojKlikova = 0;
    }
    $(".desktop").toggle();
    $(".laptop").toggle();
    $(".telefon").toggle();
  });
});