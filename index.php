<?php require "new/bootstrap.php";?>
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio online de Steph Hoel" />
    <meta name="keywords" content="steph hoel porfolio online">
    <meta name="autor" content="Steph Hoel">
    <link href="css/home.css" type="text/css" rel="stylesheet">
    <title>Home | Steph Hoel</title>
    <script type="text/javascript" src="http://ajax.googlesapi.com/ajax/libs/jquery/jquery.min.js"></script>
    <?php
        require ("per/functions.php");
    ?>
</head>

<body>
    <header>
         <!--<img src="images/fotografamaisproducoes.png" alt=""> -->
        <nav>
            Steph Hoel
            <br><!-- Menu -->
            <a href="../StephHoel/" class="menuSelect">Home</a>
            <a href="?page=ficha" class="menuSelect">Ficha</a>
            <a href="?page=membros" class="menuSelect">Membros</a>
            <a href="?page=login" class="menuSelect">Login</a>
            <a href="?page=sobre" class="menuSelect">Sobre</a>
            <a href="?page=contato" class="menuSelect">Contato</a>
            <!-- Fim do Menu -->
            
            <div class="dropdown">
              <a href="#0" class="menuSelect">Dropdown</a>
              <div class="dropdown-content">
                <a href="#1" class="menuSelect">Link 1</a>
                <a href="#2" class="menuSelect">Link 2</a>
                <a href="#3" class="menuSelect">Link 3</a>
              </div>
            </div>
            
        </nav>
    </header>
    <main>
        <article>
            <div class="conteudo">
                <!-- Conteúdo -->
                <?php
                    try {
                        require load();
                    } catch (Exception $e) {
                        echo $e->getMessage();
                    }
                ?>
                <!-- Fim do Conteúdo -->
            </div>
        </article>
    </main>
</body>

</html>
