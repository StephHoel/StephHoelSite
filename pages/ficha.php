<form action="cadastro.php" method="post" accept-charset="UTF-8" enctype="application/x-www-form-urlencoded" autocomplete="off">

    <span style="font-size:28px;" class="justRegular">
        Esta ficha é para fazer parte do Grupo Algiz.<br>
        Seja sincero(a) nas respostas e logo um administrador entrará em contato contigo.
        <br><br>

        Dados:</span><br>
    <center>
        <table style="font-size:22px;" width="540px" class="centerRegular">
            <tr>
                <td width="265px" style="text-align: right;">Nome:</td>
                <td width="265px" style="text-align: left;"><input type="text" name="nome" /></td>
            </tr>
            <tr>
                <td width="265px" style="text-align: right;">Como se apresenta no canal:</td>
                <td width="265px" style="text-align: left;"><input type="text" name="apelido" /></td>
            </tr>
            <tr>
                <td width="265px" style="text-align: right;">Email de contato:</td>
                <td width="265px" style="text-align: left;"><input type="text" name="email" /></td>
            </tr>
            <tr>
                <td width="265px" style="text-align: right;">Nome do Canal:</td>
                <td width="265px" style="text-align: left;"><input type="text" name="nome_canal" /></td>
            </tr>
            <tr>
                <td width="265px" style="text-align: right;">Descrição do Canal:</td>
                <td width="265px" style="text-align: left;"><textarea rows="5" cols="22" name="descricao"></textarea></td>
            </tr>
            <tr>
                <td width="265px" style="text-align: right;">Link do Canal:</td>
                <td width="265px" style="text-align: left;"><input type="text" name="link_canal" /></td>
            </tr>
            <tr>
                <td width="265px" style="text-align: right;">Link da Página no Facebook:</td>
                <td width="265px" style="text-align: left;"><input type="text" name="link_page" /></td>
            </tr>
            <tr>
                <td width="265px" style="text-align: right;">Link do Perfil no Instagram:</td>
                <td width="265px" style="text-align: left;"><input type="text" name="link_instagram" /></td>
            </tr>
            <tr>
                <td width="265px" style="text-align: right;">Link do Perfil no Twitter:</td>
                <td width="265px" style="text-align: left;"><input type="text" name="link_twitter" /></td>
            </tr>
        </table>
    </center>

    <br><br><span style="font-size:28px;" class="justRegular">
        Perguntas essenciais:<br></span>
    <span style="font-size:22px;" class="justRegular">
        É importante que todas as perguntas tenham respostas para que você seja avaliado!
    </span><br><br>

    <?php perguntas($conexao); ?>

    <br><br>

    <input type="submit" value="Enviar" />
</form>

<br>
</span>
