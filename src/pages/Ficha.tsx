
export function Ficha() {
  return (
    <div className="w-3/4 text-center mx-auto">
      <form
        action="cadastro.php"
        method="post"
        acceptCharset="UTF-8"
        encType="application/x-www-form-urlencoded"
        autoComplete="off"
        className="grid"
      >
        <div className="text-justify text-3xl">
          Esta ficha é para fazer parte do Grupo Algiz. Seja sincero(a) nas
          respostas e logo um administrador entrará em contato contigo. Dados:
        </div>

        <div className="w-1/2 text-center text-2xl mx-auto">
          <div className="justify-between w-full">
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" />
          </div>
          <div className="justify-between w-full">
            <label htmlFor="apelido">Como se apresenta no canal:</label>
            <input type="text" name="apelido" />
          </div>
          <div className="justify-between w-full">
            <label htmlFor="email">Email de contato:</label>
            <input type="email" name="email" />
          </div>
          <div className="justify-between w-full">
            <label htmlFor="nome_canal">Nome do Canal:</label>
            <input type="text" name="nome_canal" />
          </div>
          <div className="justify-between w-full">
            <label htmlFor="descricao">Descrição do Canal:</label>
            <textarea rows={5} cols={22} name="descricao" />
          </div>
          <div className="justify-between w-full">
            <label htmlFor="link_canal">Link do Canal:</label>
            <input type="text" name="link_canal" />
          </div>
          <div className="justify-between w-full">
            <label htmlFor="link_page">Link da Página no Facebook:</label>
            <input type="text" name="link_page" />
          </div>
          <div className="justify-between w-full">
            <label htmlFor="link_instagram">Link do Perfil no Instagram:</label>
            <input type="text" name="link_instagram" />
          </div>
          <div className="justify-between w-full">
            <label htmlFor="link_twitter">Link do Perfil no Twitter:</label>
            <input type="text" name="link_twitter" />
          </div>
          {/* <div className="justify-between w-full">
            <label htmlFor="" />
          </div>
          <div className="justify-between w-full">
            <label htmlFor="" />
          </div> */}
        </div>

        <div className="text-justify text-3xl">Perguntas essenciais:</div>

        <div className="text-justify text-2xl">
          É importante que todas as perguntas tenham respostas para que você
          seja avaliado!
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
