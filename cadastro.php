<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Alterar quando souber exatamente o que estiver fazendo aqui !!!
            <meta name="description" content="Aqui descrição do site" />
            <meta name="keywords" content="palavras chaves do site">
            <link rel="stylesheet" href="css/style.css">
        -->
        <meta name="autor" content="Steph Hoel">
        <link href="per/css2.css" type="text/css" rel="stylesheet">
        <title>Cadastrando | Algiz</title>
        <script type="text/javascript" src="http://ajax.googlesapi.com/ajax/libs/jquery/jquery.min.js"></script>
        <?php
            include ("per/functions.php");
            include ("uni.php");
        ?>
    </head>
    <body>
        <header>
        <!-- Foto <img src="images/fotografamaisproducoes.png" alt=""> -->
        <div class="cabecalho">Algiz</div>
        <nav>
            <?php include_once ("menu.php");  ?>
        </nav>
	</header>
	<main>
		<article>
			<!--
                <h1>Fotografia e Filmagem</h1>
                <hr>
                <p>A Fotografa+ Produções realiza fotografia e filmagem de eventos (festas, </p>

                <p>Fazemos filmagem e edição para youtube com thumbnail (capa)!</p>

                <p>Fazemos também edição de podcast!</p>
            -->
            
            <div class="pubEcont"><!-- Publicidade e Conteúdo -->

                <?php echo $pubEsq; ?>

                <div class="conteudo"><!-- Conteúdo -->
                    <br><span class="justRegular" style="font-size:28px;">

                    <?php
                        $nome 			 = $_POST['nome'];
                        $apelido 		 = $_POST['apelido'];
                        $email 			 = $_POST['email'];
                        $nome_canal 	 = $_POST['nome_canal'];
                        $descricao 		 = $_POST['descricao'];
                        $link_canal 	 = $_POST['link_canal'];
                        $link_page 		 = $_POST['link_page'];
                        $link_instagram = $_POST['link_instagram'];
                        $link_twitter 	 = $_POST['link_twitter'];

                        enviaPerfil($conexao1, $nome, $apelido, $email, $nome_canal, $descricao, $link_canal, $link_page, $link_instagram, $link_twitter);
                        //{

                        $numPergunta = numPerg($conexao1);
                        for($i=1; $i <= $numPergunta; $i++) {
                            enviaPergunta ($conexao1, $email, $i, $_POST[$i]);
                        }

                    ?>

                    <br><br>

                    Aguarde o contato de um administrador para ter uma posição sobre sua ficha.

                    <br><br><br><br>
                    </span>
                </div><!-- Fim do Conteúdo -->

                <?php echo $pubDir; ?>

            </div><!-- Fim do Publicidade e Conteúdo -->
            
		</article>
	</main>
	<footer>
		<p>Site desenvolvido por Steph Hoel</p>
	</footer>
    </body>
</html>