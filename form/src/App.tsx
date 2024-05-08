import React from "react";
import "./index.css";
const App: React.FC = () => {
  return (
    <>
      <meta httpEquiv="Content-type" content="text/html; charset=UTF-8" />
      <div id="formmodal" className="formModal">
        <div id="header" className="header">
          <div className="logos">
            <img src="icon.svg" alt="" className="svg" />
            <img src="/logos.png" alt="" />
            <img src="icon.svg" alt="" className="svg" />
          </div>
          <div className="titulo">
            <h1>Quer saber mais sobre nossos produtos?</h1>
            <p>
              Preencha o formulário para que um de nossos especialistas entre em
              contato.
            </p>
          </div>
        </div>

        <form
          id="Formulario"
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D4T000000Fw59"
          method="POST"
        >
          <div id="hiddens">
            <input type="hidden" name="oid" value="00D4T000000Fw59" />
            <input
              type="hidden"
              name="retURL"
              value="http://grupotimber.com.br"
            />
            <input
              type="hidden"
              name="recordType"
              id="recordType"
              value="012Np000000BUIv"
            />
            <input
              type="hidden"
              name="lead_source"
              id="lead_source"
              value="Timber Construction"
            />
            <input
              type="hidden"
              name="00NNp000006pQ6n"
              id="00NNp000006pQ6n"
              value="{productName}"
            />
          </div>

          <div className="variousinputs" id="inputs">
            <div className="single" id="nome">
              <div className="container">
                <div className="entryarea">
                  <input id="last_name" name="last_name" type="text" required />
                  <div className="labelline">Coloque seu nome</div>
                </div>
              </div>
            </div>

            <div className="double" id="contato">
              <div className="container">
                <div className="entryarea">
                  <input
                    type="text"
                    id="00N4T00000701IT"
                    maxLength="15"
                    name="00N4T00000701IT"
                    required
                  />
                  <div className="labelline">Seu Telefone</div>
                </div>
              </div>

              <div className="container">
                <div className="entryarea">
                  <input
                    type="text"
                    id="email"
                    maxlength="80"
                    name="email"
                    required
                  />
                  <div className="labelline">Seu Email</div>
                </div>
              </div>
            </div>

            <div className="double" id="Empresa">
              <div className="container">
                <div className="entryarea">
                  <input type="text" id="company" name="company" />
                  <div className="labelline">Nome da Empresa</div>
                </div>
              </div>
              <div className="container">
                <div className="entryarea">
                  <input
                    type="text"
                    id="00N4T00000700nG"
                    maxLength="14"
                    name="00N4T00000700nG"
                  />
                  <div className="labelline">CNPJ da Empresa</div>
                </div>
              </div>
            </div>
            <div className="double" id="Local">
              <div className="container">
                <div className="entryarea">
                  <input id="city" name="city" type="text" required />
                  <div className="labelline">Sua cidade</div>
                </div>
              </div>
              <div className="container">
                <div className="entryarea">
                  <select
                  className="custom-select"
                    id="00NHY000000OY6P"
                    name="00NHY000000OY6P"
                    title="Filial"
                  >
                    <option value="">Filial</option>
                    <option value="Curitiba - PR">Curitiba - PR</option>
                    <option value="Guaíba - RS">Guaíba - RS</option>
                    <option value="Lages - SC">Lages - SC</option>
                    <option value="Três Lagoas - MS">Três Lagoas - MS</option>
                    <option value="Palhoça - SC">Palhoça - SC</option>
                  </select>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="divider" id="dividers">
          <hr className="solid" />
          <img src="/LogoIcon.svg" alt="" />
          <hr className="solid" />
        </div>

        <div className="buttons" id="botões">
          <button className="cancel">Voltar</button>
          <button className="enviar">Fazer Contato</button>
        </div>

        <div id="termos">
          <p>
            Por pressionar “Enviar”, você confirma o interesse de contatar a
            TIMBER. Essa ação significa que você aceitou os{" "}
            <span>
              <a href="/Condicoes">Termos e Condições</a>
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
