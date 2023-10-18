<?php


   

    $ime = $_POST["ime"];

 

    $prezime = $_POST["prezime"];

    $sifra = $_POST["sifra"];

    $resifra = $_POST["resifra"];

   

    $email = $_POST["email"];

   

    $pol= $_POST["muski"];

    $drzava= $_POST["drzava"];

    $tipKupovine= $_POST["klijent"];

   


   

   

   

   

   

     

   

    $host = 'localhost';

   

    $dbname = 'registracija_mysql';

   

    $username = 'root';

   

    $password = '';

   

     

 

    $conn = mysqli_connect( hostname:$host,

   

                            username: $username,

   

                            password: $password,

   

                            database: $dbname);

   

     

   

    if (mysqli_connect_errno()){

   

        die("Greska pri konekciji: " . mysqli_connect_error());

   

    }

   

     

   

    $sql = "INSERT INTO registracija (ime,

   

                                    prezime,

   

                                    sifra,

   

                                    resifra,

   

                                    email,

   

                                    pol,

   

                                    drzava,

 

                                    klijent)

   

            VALUES (?,?,?,?,?,?,?,?)" ;

   

     

   

    $stmt = mysqli_stmt_init($conn);

    if(! mysqli_stmt_prepare($stmt,$sql)){

        die(mysqli_error($conn));

   

    }

   

     

   

    mysqli_stmt_bind_param($stmt, "ssssssss",

   

                            $ime,

   

                            $prezime,

   

                            $sifra,

   

                            $resifra,

   

                            $email,

   

                            $pol,

   

                            $drzava,

 

                            $tipKupovine

   

                            );

   

     

   

    mysqli_stmt_execute($stmt);

   
   $connection = mysqli_connect("localhost", "root", "", "registracija_mysql");


    if (!$connection) {

        die("Konekcija na bazu nije uspela: " . mysqli_connect_error());
    }
    $query="SELECT * FROM registracija";   

    $result = mysqli_query($connection, $query);

    $data = array();
   

    while ($row = mysqli_fetch_assoc($result)) {


        $data[] = $row;
    }

    $json_data = json_encode($data, JSON_PRETTY_PRINT);

    file_put_contents('klijenti.json', $json_data);

    mysqli_close($connection);

    echo "Prijava uspesno evidentirana."

     

     

 

 

 

?>
