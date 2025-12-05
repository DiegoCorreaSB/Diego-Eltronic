import logo from '../public/logo.png'

import './App.css'

function App() {
  return (
    <>
      <main>
        <nav>
          <article>

            <article id="logo-empresa">
              <img src={logo} alt="Logo Diego Eltronic" />
              <h1>Diego Eltronic</h1>
            </article>
          </article>

          <article id="lista-opcoes">
            <ul>
              <li>Home</li>
              <li>Sobre</li>
              <li>Projetos</li>
              <li>Contato</li>
            </ul>
          </article>

          <article >
            <span id="contato-nav">
              <a href="#">Entre em Contato </a>
            </span>
          </article>
        </nav>

        <section id="container-apresentacao">
          <article id="texto-apresentacao">
            <h2>Olá, somos a Diego Eltronic</h2>
            <p>Sua empresa Especialista em Manutenção Eletrônica</p>
            <span><a href="#">Saiba Mais</a></span>
          </article>

          <article id="img-apresentacao">
            <img src={logo} alt="Logo Diego Eltronic" />
          </article>
        </section>

        <section id="container-servicos">
          <article id="titulo-servicos">
            <h2>Nossos Serviços</h2>
            <p>Oferecemos uma variedade de serviços para atender às suas necessidades eletrônicas.</p>
          </article>
          <article id="lista-servicos">
            <div className="servico">
              <h3>Reparo de Placas Eletrônicas</h3>
              <p>Diagnóstico e reparo especializado para placas eletrônicas de diversos dispositivos.</p>
            </div>
            <div className="servico">
              <h3>Troca de Tela</h3>
              <p>Substituição rápida e eficiente de telas danificadas em smartphones e tablets.</p>
            </div>
            <div className="servico">
              <h3>Consultoria Técnica</h3>
              <p>Orientação especializada para otimizar o desempenho dos seus sistemas eletrônicos.</p>
            </div>

            <div className="servico">
              <h3>Acessórios</h3>
              <p>Venda de acessórios eletrônicos de alta qualidade para complementar seus dispositivos.</p>
              <ul>
                <li>Carregadores</li>
                <li>Capas protetoras</li>
                <li>Fones de ouvido</li>
                <li>Cabos e adaptadores</li>
              </ul>
            </div>

            <div className='servico'>
              <h3>Atualização de Software</h3>
              <p>Serviço de atualização e otimização de software para melhorar o desempenho dos seus dispositivos.</p>
            </div>

            <div className='servico'>
              <h3>Recuperação de Dados</h3>
              <p>Serviço especializado para recuperar dados perdidos de dispositivos eletrônicos.</p>
            </div>
          </article>
        </section>

        <section id="container-contato">
          <article id="titulo-contato">
            <h2>Entre em Contato Conosco</h2>
            <p>Estamos prontos para ajudar você com suas necessidades eletrônicas.</p>
          </article>
          <article>
            <form id="form-contato">
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Mensagem" required></textarea>
              <button type="submit">Enviar Mensagem</button>
            </form>
          </article>

        </section>

        <section id="container-footer">
          <footer>
            <article id="infos-footer">

              <article id="dados-footer">
                <h2>Diego Eltronic</h2>
                <p>Especialistas em Manutenção Eletrônica</p>
                <div className="info-contato">
                  <h3>Endereço</h3>
                  <p>Rua Exemplo, 123, Cidade, Estado, CEP 00000-000</p>
                </div>
                <div className="info-contato">
                  <h3>Telefone</h3>
                  <p>(00) 1234-5678</p>
                </div>
                <div className="info-contato">
                  <h3>Email</h3>
                  <p>contato@diegoeltronic.com</p>
                </div>
              </article>

              <article id="redes-sociais">
                <span>Siga-nos:</span>
                <ul>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                </ul>
              </article>

            </article>

            <article id="direitos-autorais">
              <p>© 2024 Diego Eltronic. Todos os direitos reservados.</p>
            </article>

          </footer>
        </section>


      </main>
    </>
  )
}

export default App
