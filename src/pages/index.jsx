import React from 'react'
import Helmet from 'react-helmet'
import Fade from 'react-reveal/Fade'
import ReactGA from 'react-ga'
import HrTeam from '../images/img-paketa-rh.svg'
import Employer from '../images/app-paketa-ajuste-valor.png'

import Header from '../components/headerHome/headerHome'
import Card from '../components/card/card'
import Campaing from '../images/paketa-campanha.svg'
import Cloud from '../images/paketa-nuvemsonho.svg'
import Check from '../images/check.svg'
import ContactRh from '../images/paketa-contato-rh.svg'
import Convenio from '../images/paketa-convenio-divulgacao.svg'
import Connector from '../images/linha.svg'
import Simulation from '../images/paketa-simulacao-funcionario.svg'
import Order from '../images/paketa-aprovacao-pedido.svg'
import Credit from '../images/paketa-credito-liberado.svg'
import Quiz from '../images/paketa-educacaofinanceira.svg'
import HowItWorks from '../containers/homeHiw/homeHiw'
import CtaButton from '../components/ctaButton/ctaButton'
import Footer from '../components/footer/footer'
import CtaSection from '../components/ctaSection/ctaSection'
import ChatBot from '../components/chat/chatBot';

import JurosBaixos from '../images/icon-paketa-jurosbaixos.svg'
import ParcelasFixas from '../images/icon-paketa-parcelasfixas.svg'
import Credito from '../images/icon-paketa-credito.svg'
import DescontoFolha from '../images/icon-paketa-descotonafolha.svg'
import Planejamento from '../images/icon-paketa-planejamento.svg'
import Personalizacao from '../images/icon-paketa-personalizacao.svg'
import Agilidade from '../images/icon-paketa-agilidade.svg'
import Thumbnail from '../images/thumbnail.jpg'

import '../components/layout.css'
import './index.css'
import BasePage from './basePage';

ReactGA.initialize('UA-130200057-1')
ReactGA.pageview('/')
export default class IndexPage extends BasePage{
  render(){
    return (
      <div>
        <div className="home" name='home'>
          <Helmet
            title="Paketá - Crédito online, simples e descomplicado."
            meta={[
              {
                name: "description",
                content: "Crédito online para funcionários de empresas conveniadas.Desconto direto na folha de pagamento, com taxas de juros mais baixas que outras linhas de crédito.Comece agora."
              },
              {
                property: 'og:url',
                content: 'https://paketa.com.br',
              },
              {
                property: 'og:image',
                content: Thumbnail,
              },
              {
                property: 'og:image:width',
                content: '1200',
              },
      
              {
                property: 'og:image:height',
                content: '628',
              },
            ]}
          />
          <Header />
      
          <section id="credit" className="home__credit">
            <h3>
              Crédito Consignado para funcionários de
              empresas conveniadas
            </h3>
      
            <div className="credit__card">
              <Fade bottom>
                <Card
                  src={JurosBaixos}
                  alt="Juros Baixos"
                  text="Taxas de juros mais baixas que outras linhas de crédito"
                />
              </Fade>
      
              <Fade bottom>
                <Card
                  src={ParcelasFixas}
                  alt="Parcelas Fixas"
                  text="Parcelas fixas de até 30% do salário líquido"
                />
              </Fade>
      
              <Fade bottom>
                <Card
                  src={Credito}
                  alt="Crédito"
                  text="Crédito pode ser usado para qualquer finalidade"
                />
              </Fade>
      
              <Fade bottom>
                <Card
                  src={DescontoFolha}
                  alt="Desconto na folha"
                  text="Desconto das parcelas na folha de pagamento"
                />
              </Fade>
            </div>
          </section>
      
          <HowItWorks />
      
          <section className="home__cta">
            <div className="home__cta--content">
              <Fade left>
                <h3>Deixe a vida leve</h3>
                <p>
                  Crédito com taxas diferenciadas, sem burocracia
                e até 48 meses para pagar.
                </p>
              </Fade>
            </div>
          </section>
      
          <section className="home__dreams">
            <h3>Facilite o dia a dia e viabilize os sonhos dos seus funcionários</h3>
            <div className="home__dreams--steps">
      
              <Fade bottom>
                <Card
                  src={Planejamento}
                  alt="Ícone gráfico de indicadores financeiros"
                  title="Planejamento financeiro"
                  text="Auxílio na definição e atingimento de objetivos e sonhos pessoais"
                />
              </Fade>
      
              <Fade bottom>
                <Card
                  src={Personalizacao}
                  alt="Ícone personalização"
                  title="Personalização"
                  text="Conteúdos e recomendações de acordo com o perfil de cada colaborador"
                />
              </Fade>
      
              <Fade bottom>
                <Card
                  src={Agilidade}
                  alt="Ícone cronometro"
                  title="Agilidade e Simplicidade"
                  text="Simulação e contratação em ambiente digital com crédito em até 24 horas"
                />
              </Fade>
              
            </div>
          </section>
        </div>
        <div className="about" name="about">
          <section className="about__hr">
            <div className="about-hr__text">
              <h3>Para a equipe de RH</h3>
              <p>Uma ferramenta simples e funcional que facilita o trabalho do RH
                na gestão do benefício de crédito consignado. Com alguns cliques, o
                gestor mantém a rotina em dia e assegura foco em suas atividades chaves.
              </p>
            </div>
      
            <Fade right>
              <img src={HrTeam} alt="Time de RH"/>
            </Fade>
          </section>
      
          <section className="about__employer">
            <Fade clear>
              <img src={Employer} alt="App Paketá" />
            </Fade>
            <div className="about-employer__text">
              <h3>Para o Colaborador</h3>
              <p>
                Ambiente virtual, descontraído e amigável,
                com acesso a conteúdos de educação financeira,
                simulação e contratação de crédito consignado.
              </p>
            </div>
          </section>
        </div>
        <div className="hiw" name="hiw">
          <section className="hiw__flux">
            <h3>Entenda o nosso fluxo de contratação</h3>
          
            <div className="hiw__connector">
              <img src={Connector}/>
            </div>

            <div className="hiw__steps">
              <Card 
                src={ContactRh}
                alt="Ícone de um chat de conversa"
                text="Contato entre Paketá e RH da Empresa"
              />

              <Card
                src={Convenio}
                alt="Ícone pessoa segurando uma bandeira"
                text="Empresa conveniada e divulgação interna para funcionários"
              />

              <Card
                src={Simulation}
                alt="Ícone do app"
                text="Simulação digital e Pedido de Crédito pelo funcionário"
              />

              <Card
                src={Order}
                alt="Ícone pedido de crédito"
                text="Aprovação do pedido pela Paketá e RH"
              />

              <Card 
                src={Credit}
                alt="Ícone mão recebendo dinheiro"
                text="Crédito liberado em até 24H"
              />
              
            </div>
          </section>
          
          <section className="hiw__features">
            <h3>Ambiente agradável e processos simplificados</h3>
            <p>
              Nossa plataforma facilita o trabalho para o RH.
              Simulação e liberação de crédito digital.
            </p>

            <div className="hiw-features__content">

              <Fade left>
                <div className="hiw-features__card">
                  <img src={Check} alt="check"/>
                  <div className="hiw-features__text">
                    <h4>Processo e acompanhamento online</h4>
                    <p>Facilidade para a sua equipe de RH.</p>
                  </div>
                </div>
              </Fade>

              <Fade left>
                <div className="hiw-features__card">
                  <img src={Check} alt="check" />
                  <div className="hiw-features__text">
                    <h4>CHAT ONLINE COM A PAKETÁ</h4>
                    <p>Simplicidade sem burocracia.</p>
                  </div>
                </div>
              </Fade>

              <Fade left>
                <div className="hiw-features__card">
                  <img src={Check} alt="check" />
                  <div className="hiw-features__text">
                    <h4>Conheça os sonhos dos colaboradores</h4>
                    <p>Faça da sua empresa um melhor lugar para trabalhar.</p>
                  </div>
                </div>
              </Fade>

              <Fade left>
                <div className="hiw-features__card">
                  <img src={Check} alt="check" />
                  <div className="hiw-features__text">
                    <h4>Campanhas, desafios e feedbacks</h4>
                    <p>Aumente o engajamento da sua equipe.</p>
                  </div>
                </div>
              </Fade>

            </div>
          </section>

          <section className="hiw__dreams">
            <h3>Viabilize os sonhos da sua equipe e mantenha
              com você a equipe do seus sonhos
            </h3>

            
            <div className="hiw-dreams__content">
              <Fade clear>
                <div className="hiw-dreams__card">
                  <div className="hiw-dreams__header">
                    <img src={Campaing} alt="Ícone megafone"/>
                    <p>Campanhas</p>
                  </div>

                  <div className="hiw-dreams__text">
                    <p>
                      Campanhas ligadas a temas e conteúdos
                      relevantes para a empresa:
                    </p>
                    <ul>
                      <li>Workshops</li>
                      <li>Artigos</li>
                      <li>Projetos pessoais</li>
                    </ul>
                  </div>
                </div>
              </Fade>

              <Fade clear>
                <div className="hiw-dreams__card">
                  <div className="hiw-dreams__header">
                    <img src={Cloud} alt="Ícone nuvem" />
                    <p>Nuvem de Sonhos</p>
                  </div>

                  <div className="hiw-dreams__text">
                    <p>
                      Mapeamento dos desejos e necessidades
                      dos funcionários
                    </p>
                    <ul>
                      <li>Viagem e Intercâmbio</li>
                      <li>Eletrônicos e Eletrodomésticos</li>
                      <li>Cursos e Estudos</li>
                    </ul>
                  </div>
                </div>
              </Fade>

              <Fade clear>
                <div className="hiw-dreams__card">
                  <div className="hiw-dreams__header">
                    <img src={Quiz} alt="Ícone questionário" />
                    <p>Educação Financeira</p>
                  </div>

                  <div className="hiw-dreams__text">
                    <p>
                      Educação financeira e engajamento de
                      funcionários
                    </p>
                    <ul>
                      <li>Vídeos</li>
                      <li>Dicas de crédito</li>
                      <li>Como lidar com dinheiro</li>
                    </ul>
                  </div>
                </div>
              </Fade>     
                  
            </div>
          </section>
          <CtaSection
            title="Você tem alguma dúvida?"
            text="Fale conosco que podemos ajudá-lo"
            cta="Entrar em contato"
            click={this.openContact}
          />
        </div>
        <ChatBot/>
        <Footer />
      </div>
    )
  }
}
