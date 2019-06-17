import React from 'react'
import Helmet from 'react-helmet'
import Fade from 'react-reveal/Fade'
import ReactGA from 'react-ga'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import Thumbnail from '../images/thumbnail.jpg'

import './privacidade.css'
import '../components/layout.css'
import hastToHyperscript from "hast-to-hyperscript";

ReactGA.initialize('UA-130200057-1')
ReactGA.pageview('/privacidade')

// export const query = graphql`
//   query PrivacyPolicyQuery {
//     allPrivacyPolicy {
//       edges{
//         node{
//           text
//         }
//       }
//     }
//   }
// `;

const PrivacyPolicy = (props) => {
  // const text = props.data.allPrivacyPolicy.edges[0].node.text;
  return (
  <div>
    <Helmet
      title="Paketá - Crédito online, simples e descomplicado."
      meta={[
        {
          name: "description",
          content: "ontratação de crédito consignado totalmente digital. Processo simplificado com acordo direto com o RH da sua empresa. Viabilize os sonhos da sua equipe de funcionários."
        },
        {
          property: 'og:url',
          content: 'https://paketa.com.br/quem-somos',
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
    <Header
      headline="Política de Privacidade" 
    />

    <section className="privacy">
      {/* <div dangerouslySetInnerHTML={{ __html: document.createElement('div').innerHTML=text }} /> */}
      <div>
        <ol>
          <li><span class="listHeader">Quem somos</span>
            <ol>
              <li>Paketá Serviços Financeiros LTDA (“Paketá Crédito”) é uma empresa com amplos conhecimentos de tecnologia e finanças (fintech), especializada no mercado de crédito consignado privado, possuindo expertise no desenvolvimento e gestão operacional de produtos financeiros e similares, incluindo o gerenciamento de fluxo operacional para concessão do crédito consignado privado e a análise de risco de crédito voltado para pessoas físicas.</li>
              <li>Por meio de sua plataforma digital (“Plataforma Digital Paketá”), a Paketá Crédito presta serviços que permite que os administradores da Paketá (“Administradores Paketá”), os  gestores dos RH’s (“Empresas Conveniadas”) e tomadores de crédito consignado (“Tomadores” e, em conjunto com os Administradores Paketá e Empresas Conveniadas, “Usuários”) entrem em contato, de modo que os primeiros possam atender a demanda de crédito dos terceiros.</li>
              <li>A Paketá Crédito fornece crédito consignado a taxas atrativas para funcionários CLTs de empresas conveniadas. Nessa modalidade, amparada pela lei federal 10.820, o pagamento mensal do crédito consignado é feito diretamente pelas empresas, descontando o valor da folha do funcionário.</li>
              <li>As Empresas Conveniadas e os Tomadores devem cumprir com os temos e condições do Portal Paketá e com os requisitos necessários para estabelecimento da relação contratual, conforme estabelecidos nestes termos e condições de uso e política de privacidade (“Termos e Condições de Uso e Política de Privacidade”) e nos termos e condições dos contratos assinados do crédito consignado (“Cédula de Crédito Bancário”).</li>
              <li>As referências nestes termos e condições para “nós” e “nosso, significa uma referência à Paketá. As referências a “sistemas” ou “Plataforma Digital Paketá”, ou “site”, significa uma referência a uma serviço prestado por nossos sistemas ou quaisquer outros serviços online prestados por nós e todos os dados gerenciados, exibidos ou transmitidos a partir de tais serviços. As referências a “você” e “seu”, significa uma referência a uma usuário da Plataforma Digital da Paketá.</li>
            </ol>
          </li>
          <li><span class="listHeader">Uso da Plataforma</span>
            <ol>
              <li>Ao usar a Plataforma Digital da Paketá, e os serviços prestados por meio dela ou por quaisquer outros sistemas fornecidos pela Paketá Crédito, você deverá, necessariamente, confirmar que leu, entendeu e concordou com estes Termos e Condições de Uso e Política de Privacidade, e com os Termos e Condições da Cédula de Crédito Bancário das solicitações do crédito consignado. Os presentes Termos e Condições de Uso e Política de Privacidade constituem um contrato vinculativo e de valor legal entre você e a Paketá Crédito ao se utilizarem da Plataforma Digital da Paketá.</li>
              <li>Estes Termos e Condições de Uso e Política de Privacidade também descrevem como e quando nós coletamos, utilizamos e compartilhamos suas informações através da Plataforma Digital da Paketá e outros serviços que disponibilizamos aos Usuários. Ao utilizar a Plataforma Digital da Paketá e outros de nossos serviços, você concorda com a realização da coleta, transferência, armazenamento, divulgação e utilização de suas informações, tal como descrito nestes Termos e Condições de Uso e Política de Privacidade e nos termos e condições específicos das Cédulas de Crédito Bancário.</li>
              <li>Ao aceitar estes Termos e Condições de Uso e Política de Privacidade, você declara e garante que é maior de 18 (dezoito) anos e é responsável pelos atos realizados na Plataforma Digital da Paketá, bem como para os Termos e Condições de Uso e Política de Privacidade e demais termos e condições aplicáveis à Plataforma Digital da Paketá.</li>
              <li>Se você não concordar com estes Termos e Condições de Uso e Política de Privacidade ou se você tem menos de 18 (dezoito) anos de idade, você deve parar de usar a Plataforma Digital da Paketá.</li>
            </ol>
          </li>
          <li><span class="listHeader">Alterações nos Termos e Condições de Uso e Política de Privacidade</span>
            <ol>
              <li>Periodicamente podem ser feitas alterações nestes Termos e Condições de Uso e Política de Privacidade. Quaisquer alterações nestes Termos e Condições de Uso e Política de Privacidade serão previamente informadas por e-mail e também publicadas na Plataforma Digital da Paketá. Caso você continue utilizando a Plataforma Digital da Paketá após as alterações destes Termos e Condições de Uso e Política de Privacidade significará que você concordou com tais alterações e que está legalmente sujeito a tais alterações.</li>
            </ol>
          </li>
          <li><span class="listHeader">Dever Geral de Confidencialidade</span>
            <ol>
              <li>Ao utilizar a Plataforma Digital da Paketá, você concorda que a Paketá Crédito terá acesso a certas informações pessoais e profissionais suas e/ou de sua empresa. Os presentes Termos e Condições de Uso e Política de Privacidade esclarecem quais informações podem ser acessadas e como elas serão utilizadas e armazenadas pela Paketá.</li>
              <li>A Paketá Crédito protege os direitos de privacidade dos Usuários que se cadastrarem e/ou que de qualquer forma utilizarem a Plataforma Digital da Paketá, sejam eles Administradores Paketá, Empresas Conveniadas ou Tomadores, nos termos da legislação aplicaével e destes Termos e Condições de Uso e Política de Privacidade.</li>
              <li>Todas as informações que possam identificá-lo individualmente, direta ou indiretamente, incluindo suas informações de cadastro, dados armazenados em cookies e informações a respeito do seu acesso e utilização da Plataforma Digital da Paketá (incluindo informações de protocolo de internet) serão utilizadas de acordo com as finalidades constantes nestes Termos e Condições de Uso e Política de Privacidade e demais políticas da Plataforma Digital da Paketá.</li>
              <li>Ao se cadastrar na Plataforma Digital da Paketá, você deve fornecer endereço de e-mail, CPF, nome de usuário, número do celular, empresa onde trabalha, contato da empresa, cidade e estado onde reside, para consequente criação de perfil pessoal de acesso (“Perfil Pessoal”) e emissão de senha pessoal (“Senha Pessoal”). Esses dados poderão ser utilizados para que os Usuários acessem a Plataforma Digital da Paketá.</li>
              <li>Os Usuários concordam que a senha e login cadastrados na Plataforma Digital da Paketá são de uso pessoal e intransferível, sendo confidenciais e de responsabilidade exclusiva do Usuário. O Usuário não poderá fornecer sua senha e login para qualquer terceiro.</li>
            </ol>
          </li>
          <li><span class="listHeader">Uso do Conteúdo Paketá Crédito</span>
            <ol>
              <li>Os direitos autorais de todo o material da Paketá Crédito, incluindo, sem limitações, textos, dados, artigos, design, códigos-fonte, softwares, fotos, imagens e outras informações (coletivamente, o “Conteúdo”), são de propriedade da Paketá Crédito ou licenciados para a Paketá Crédito pelo autor original do material e estão protegidos sob as Leis nº 9.610 de 19 de fevereiro de 1998 e Lei nº 9.609 de 19 de fevereiro de 1998.</li>
              <li>Os Usuários concordam em não reproduzir, duplicar, copiar, vender, revender ou explorar com ou sem finalidade comercial qualquer parte das informações e Conteúdo da Plataforma Digital da Paketá, bem como se obrigam a utilizar todo o Conteúdo da Plataforma Digital da Paketá de forma lícita, sendo vedada a reprodução, distribuição, transformação, comercialização ou modificação do Conteúdo, sem a prévia e expressa autorização da Paketá Crédito.</li>
              <li>Sem prejuízo de outras medidas que entender cabíveis, a Paketá Crédito poderá advertir, suspender ou cancelar, temporária ou definitivamente, o cadastro do Usuário, a qualquer tempo, iniciando as ações legais cabíveis ou outra medida cabível se o Usuário não cumprir qualquer dispositivo aqui previsto ou nos demais contratos da Plataforma Digital da Paketá.</li>
              <li>Ao se cadastrar na Plataforma Digital da Paketá, o Usuário concede à Paketá Crédito uma licença gratuita, para o uso de todo e qualquer conteúdo, foto ou imagem postado na Plataforma Digital da Paketá, de acordo com os fins estabelecidos nestes Termos e Condições de Uso e Política de Privacidade</li>
            </ol>
          </li>
          <li><span class="listHeader">Informações específicas dos Usuários</span>
            <ol>
              <li>Esta seção especifica quais informações devem ser disponibilizadas pelos Usuários e verificadas pela Paketá Crédito no ato do cadastramento dos Usuários e em preparação para as operações de crédito consignado privado, oportunidade em que outros documentos e informações poderão ser solicitados, inclusive para fins da análise de crédito do Tomador, bem como para realização de procedimentos de conheça-o-seu-cliente e anti-lavagem de dinheiro.</li>
              <li>Todas as informações requeridas estão de acordo com o disposto na Lei Complementar nº 105 de 10 janeiro de 2001, a qual dispõe sobre o sigilo das operações de instituições financeiras.</li>
              <li>Os presentes Termos e Condições de Uso e Política de Privacidade e os demais documentos da Paketá Crédito estão de acordo com Código de Defesa do Consumidor, o Marco Civil da Internet e Lei de Sigilo Bancário.</li>
              <li>Você garante que todas as informações que fornecer na Plataforma Digital da Paketá são verdadeiras e precisas em todos os aspectos. Você nos informará se alguma das informações que você forneceu for alterada ou atualizada. A Plataforma Digital da Paketá não é responsável por qualquer informação não-verdadeira ou desatualizada fornecida pelos Usuários.</li>
            </ol>
          </li>
          <li><span class="listHeader">As informações que coletamos de ambos Administradores Paketá e Empresa Conveniadas</span>
            <ol>
              <li>Ao acessar a página da Paketá Crédito e disponibilizar suas informações pessoais e/ou ao se inscrever na Plataforma Digital da Paketá como Tomador, Administrador Paketá ou Empresa Conveniada, você está ciente e, neste ato, concorda expressamente que as seguintes informações sejam coletadas e armazenadas pela Paketá Crédito, além de outras informações que você nos forneça:
                <ol>
                  <li>nome completo;</li>
                  <li>CPF;</li>
                  <li>telefone celular e endereço de e-mail;</li>
                  <li>senha de acesso escolhida;</li>
                  <li>mensagens trocadas com a Plataforma Digital da Paketá via e-mail ou push no aplicativo;</li>
                  <li>comentários e quaisquer outras informações disponibilizadas nos grupos de discussão e redes sociais da Plataforma Digital da Paketá;</li>
                  <li>informações referentes aos serviços solicitados e atividades realizadas na Plataforma Digital da Paketá.</li>
                </ol>
              </li>
              <li>Para fins de execução da operação desejada, as informações disponibilizadas serão consideradas verdadeiras. Na hipótese de informações falsas serem disponibilizadas, terceiros serão acionados com o intuito de apurar a possibilidade de fraude; estes terão acesso às informações disponibilizadas com o exclusivo objetivo de verificar a ocorrência ou não da possível fraude.</li>
              <li>Ao acessar a Plataforma Digital da Paketá, mesmo os Usuários anônimos estarão sujeitos à verificação de suas informações mínimas, para fins de elaboração de estatísticas referentes aos Usuários da Paketá Crédito. Ressalta-se que o anonimato será mantido.</li>
            </ol>
          </li>
          <li><span class="listHeader">Informações que coletamos exclusivamente dos Tomadores</span>
            <ol>
              <li>Você está ciente e, neste ato, concorda que a análise de crédito e a veiculação de sua solicitação na Plataforma Digital da Paketá depende de diversas informações disponibilizadas pelo Tomador, tais como valor solicitado, prazo em meses estimado para pagamento, utilidade pretendida ao crédito solicitado, e histórico do Tomador. Para determinar estas informações, é preciso que o Tomador forneça as seguintes informações e, neste ato, você concorda que a Paketá Crédito poderá coletar, armazenar, tratar e usar as informações a seguir para as finalidades dispostas nestes Termos e Condições de Uso e Política de Privacidade:
                <ol>
                  <li>nome completo;</li>
                  <li>CPF;</li>
                  <li>RG, órgão emissor e estado da emissão;</li>
                  <li>data de nascimento;</li>
                  <li>número de filho;</li>
                  <li>estado civil;</li>
                  <li>dados bancários;</li>
                  <li>dados profissionais como data de admissão, salário bruto, salário líquido e empresa onde trabalha;</li>
                  <li>selfie, ou seja, foto de rosto de você;</li>
                  <li>foto frente e verso do documento de identificação (RG ou CNH);</li>
                  <li>foto do comprovante de renda;</li>
                  <li>foto do comprovante de endereço;</li>
                  <li>número de telefone residencial, telefone celular e endereço de e-mail;</li>
                  <li>endereço residencial completo;</li>
                  <li>senha de acesso escolhida;</li>
                  <li>cédula de crédito bancário assinada eletronicamente;</li>
                  <li>mensagens trocadas com a Plataforma Digital da Paketá via e-mail ou push no aplicativo;</li>
                  <li>comentários e quaisquer outras informações disponibilizadas nos grupos de discussão e redes sociais da Plataforma Digital da Paketá;</li>
                  <li>informações referentes aos serviços solicitados e atividades realizadas na Plataforma Digital da Paketá.</li>
                </ol>
              </li>
              <li>Você está ciente e, neste ato, concorda que outras informações exigidas por lei, ou a critério exclusivo e subjetivo da Paketá Crédito poderão ser requeridas e exigidas pela Plataforma Digital da Paketá para análise de risco, ou outro motivo, para formalização do crédito consignado privado.</li>
              <li>Você desde já concorda que poderemos veicular na Plataforma Digital da Paketá ou em redes sociais as seguintes informações fornecidas por você e/ou coletadas de terceiros sobre você: score de crédito, perfil de redes sociais, entre outros, a fim de possibilitar a análise e decisão, bem como eventualmente nos ajudar no processo de cobrança das parcelas de seu crédito consignado privado.</li>
            </ol>
          </li>
          <li><span class="listHeader">Informações que coletamos exclusivamente das Empresas Conveniadas</span>
            <ol>
              <li>O uso das informações coletadas e armazenadas exige o processamento de dados que poderá ser feito pela própria Paketá Crédito. O Usuário expressamente concorda com a transferência desses dados a outros agentes de mercado, tais como instituições financeiras, que serão necessárias, única e exclusivamente, na consecução das transações realizadas na Plataforma Digital da Paketá.</li>
              <li>9.2.	O usuário está ciente e consente expressamente que a Paketá Crédito, empresas do grupo Paketá Crédito ou terceiros prestadores de serviços estão autorizados a utilizar as informações disponibilizadas pelos Usuários para os seguintes propósitos:
                <ol>
                  <li>razão social;</li>
                  <li>nome fantasia;</li>
                  <li>CNPJ;</li>
                  <li>faturamento dos últimos 3 meses;</li>
                  <li>nome do contato do RH;</li>
                  <li>nome completo;</li>
                  <li>telefone comercial, telefone celular e endereço de e-mail do contato do RH;</li>
                  <li>data de início do convênio;</li>
                  <li>número de funcionários;</li>
                  <li>dia de pagamento do convênio;</li>
                  <li>dia do mês do corte da folha;</li>
                  <li>dia do mês de pagamento;</li>
                  <li>endereço completo da empresa;</li>
                  <li>senha de acesso escolhida;</li>
                  <li>documentação da empresa como contrato social e alterações, cópia das últimas 2 guias de recolhimento pagas do FGTS, cópia do cartão do CNPJ, relação de faturamento dos últimos 12 meses, autorização do Sisbacen, 6 últimos CAGED’s e cópia dos últimos 3 balanços.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li><span class="listHeader">Possíveis finalidades para as informações disponibilizadas</span>
            <ol>
              <li>O uso das informações coletadas e armazenadas exige o processamento de dados que poderá ser feito pela própria Paketá Crédito. O Usuário expressamente concorda com a transferência desses dados a outros agentes de mercado, tais como instituições financeiras, que serão necessárias, única e exclusivamente, na consecução das transações realizadas na Plataforma Digital da Paketá.</li>
              <li>O usuário está ciente e consente expressamente que a Paketá Crédito, empresas do grupo Paketá Crédito ou terceiros prestadores de serviços estão autorizados a utilizar as informações disponibilizadas pelos Usuários para os seguintes propósitos:
                <ol>
                  <li>verificação da identidade do Usuário;</li>
                  <li>prevenir a ocorrência de crimes financeiros e de lavagem de dinheiro;</li>
                  <li>identificar possível fraude;</li>
                  <li>efetuar a análise de crédito dos Tomadores;</li>
                  <li>administrar e aprimorar a Plataforma Digital da Paketá;</li>
                  <li>tornar a página de acesso da Paketá Crédito disponível aos seus usuários e identificar os serviços de seus interesses;</li>
                  <li>personalizar o conteúdo, como fazer sugestões ou mostrar contas de usuários a outros usuários com base em seus contatos importados da lista de contatos;</li>
                  <li>personalizar e melhorar a sua experiência na Plataforma Digital da Paketá;</li>
                  <li>permitir que você se comunique com outro Usuário;</li>
                  <li>realizar controles regulamentares requeridos pela legislação/regulação aplicáveis;</li>
                  <li>contatar os Usuários nas ocasiões necessárias;</li>
                  <li>manter informados quaisquer terceiros possivelmente interessados e/ou relacionados à operação desejada;</li>
                  <li>garantir a execução da operação desejada.</li>
                </ol>
                <li>Os dados constantes do cadastramento como nome, nome de usuário e dados complementares como resultados de análise de riscos e análise de fraude poderão ser disponibilizados publicamente para outros Usuários para que se permita a conexão entre Administradores Paketá, Empresa Conveniada e Tomadores na Plataforma Digital da Paketá.</li>
                <li>A Paketá Crédito se compromete a utilizar as informações disponibilizadas somente mediante a anuência dos Usuários, que decorrerá da declaração de concordância com estes Termos e Condições de Uso e Política de Privacidade.</li>
                <li>Sem prejuízo de qualquer disposição em contrário nestes Termos e Condições de Uso e Política de Privacidade, a Paketá Crédito pode manter ou divulgar suas informações caso acredite que tal conduta é razoavelmente necessária para o cumprimento de leis, regulamentos, procedimentos legais ou ato/ordem de autoridade governamental; para proteger a segurança de qualquer pessoa; resolver problemas relacionados a fraude, segurança ou problemas técnicos; ou proteger os direitos e a propriedade da Paketá Crédito e dos Usuários.</li>
                <li>Na eventualidade de a Paketá Crédito estar envolvida em processo de falência, fusão, aquisição, reorganização ou de venda de ativos, suas informações poderão ser vendidas ou transferidas como parte desse processo.</li>
              </li>
            </ol>
          </li>
          <li><span class="listHeader">Dados de registro e cookies</span>
            <ol>
              <li>A Paketá Crédito utiliza cookies para aperfeiçoar a performance da Plataforma Digital da Paketá e fornecer uma experiência melhor a seus Usuários. Cookies são pequenos arquivos de dados que são transferidos para o seu computador ou dispositivo móvel. A Paketá Crédito pode utilizar tanto cookies de sessão como cookies persistentes para compreender melhor de que forma você interage com a Plataforma Digital da Paketá e os serviços disponibilizados pela Paketá Crédito, para monitorar a utilização agregada pelos Usuários e redirecionamento de tráfego web na Plataforma Digital da Paketá, assim como para melhorar e personalizar nossos serviços. Ao deletar nossos cookies ou desabilitar futuros cookies, o Usuário não poderá ter acesso a certas áreas ou serviços oferecidos pela Plataforma Digital da Paketá.</li>
              <li>Nós recebemos informações quando você interage com nossa Plataforma Digital da Paketá ou serviços mesmo se não tiver criado uma conta (“Dados de Registro”). Por exemplo, quando você visita o website, acessa os nossos serviços, interage com as nossas notificações por e-mail, podemos receber informações sobre você. Estes Dados de Registro podem incluir seu endereço IP, tipo de navegador, sistema operacional, página da web de origem, páginas da web visitadas, localização, seu operador de celular, informações de dispositivo, termos de pesquisa ou informações de cookies. Os Dados de Registro poderão ser utilizados para fazer deduções de tópicos que podem interessar a você, para personalizar o conteúdo a você etc. Nós mantemos os Dados de Registro conforme necessário para as finalidades descritas nestes Termos e Condições de Uso e Política de Privacidade.</li>
              <li>Quando um visitante acessa qualquer página de nosso site, nossos servidores automaticamente obtêm seu nome de domínio e endereço IP, por exemplo. A Paketá Crédito utiliza essas informações na administração de seu site para examinar seu tráfego agregado, investigar abusos com relação à Plataforma Digital da Paketá ou seus usuários e/ou garantir o cumprimento da legislação vigente. A Paketá Crédito não disponibiliza essas informações a terceiros, com exceção das hipóteses previstas em lei, como fornecimento de dados mediante decisão judicial.</li>
              <li>Dentre as informações obtidas dessa forma pode-se apontar:
                <ol>
                  <li>detalhes sobre as consultas realizadas na Plataforma Digital da Paketá;</li>
                  <li>conteúdo publicado pelo Usuário, mesmo que este não esteja diretamente relacionado a operação desejada na Plataforma Digital da Paketá;</li>
                  <li>dados técnicos que podem incluir a URL, o endereço IP, ID único do dispositivo, rede e desempenho do computador, tipo de navegador, idioma e informações de identificação e informações transacionais que possibilitem o gerenciamento de direitos digitais, sendo todas estas informações referentes exclusivamente ao Usuário;</li>
                  <li>informação de localização do acesso.</li>
                </ol>
              </li>
              <li>Há ainda a possibilidade de utilização de cookies e outras tecnologias similares, com o exclusivo intuito de coletar referidas informações adicionais.</li>
            </ol>
          </li>
          <li><span class="listHeader">Política de Comunicação</span>
            <ol>
              <li>Quando qualquer Usuário se registra na Plataforma Digital da Paketá, ele receberá e-mails para confirmar ações e solicitações específicas. Receberá também notificações referentes a etapas importantes do seu relacionamento com a Paketá Crédito. O Tomador receberá notificações sobre seu pedido de crédito consignado privado e seus pagamentos e o Administrador Paketá e a Empresa Conveniada receberão informações sobre os pedidos de crédito consignado privado sob suas gestões. Essas notificações transacionais não possuem opções de desligamento, uma vez que são enviadas por medidas de segurança pela Plataforma Digital da Paketá.</li>
              <li>Poderemos também responder e-mails enviados por Usuários, se aplicável. Eventualmente enviaremos pesquisas e outras comunicações (diretamente ou por empresas parceiras) que julgarmos relevantes para o Usuário, mas essas comunicações são de recebimento voluntário e o Usuário poderá programar sua conta de e-mail para não recebê-las.</li>
            </ol>
          </li>
          <li><span class="listHeader">Links</span>
            <ol>
              <li>O Usuário reconhece e concorda que a Paketá Crédito não tem controle sobre sites ou recursos externos acessados através de links em sua página de acesso. Assim, a Plataforma Digital da Paketá não endossa e não se responsabiliza por qualquer conteúdo de terceiros, propaganda, produtos e serviços contidos em anúncios de terceiros em seu site.</li>
              <li>A Paketá Crédito se exime também de qualquer responsabilidade pelos termos de uso e políticas de privacidade desses websites ou outros materiais contidos ou disponibilizados neles. Tampouco compartilha, subscreve, monitora, valida ou aceita a forma como os sites ou as ferramentas de armazenamento de conteúdo a que referem os links postados em sua página coletam, processam e transferem suas informações pessoais. Neste sentido, sugerimos que o Usuário se informe sobre os termos de uso, políticas de privacidade e demais documentos que venham a reger seu acesso a sites de terceiros antes de fornecer qualquer tipo de informação.</li>
              <li>O Usuário expressamente reconhece e concorda que a Paketá Crédito não será responsável, direta ou indiretamente, por quaisquer perdas e danos que sejam efetiva ou alegadamente causados pela, ou relacionados à, confiança depositada nas informações, bens e serviços disponíveis no ou através de tais sites de terceiros.</li>
            </ol>
          </li>
          <li><span class="listHeader">Segurança</span>
            <ol>
              <li>O acesso à Plataforma Digital da Paketá foi instituído com o intuito de proteger as informações de seus Usuários. O Usuário é responsável pela veracidade, exatidão e atualização de referidos dados. A Senha Pessoal escolhida deve ser de acesso exclusivo do Usuário, pessoal e intransferível, ficando a sua guarda sob a sua responsabilidade. A Senha Pessoal deve apresentar caracteres variados que aumentem sua segurança.</li>
              <li>Apesar da Paketá Crédito tomar as precauções necessárias, esta não se responsabiliza por eventuais fraudes no sistema, as quais possam resultar no acesso de terceiros não autorizados às informações disponibilizadas pelos usuários.</li>
              <li>A Paketá Crédito limita o acesso aos dados e informações pessoais coletados aos seus próprios colaboradores que possam ter necessidade de conhecê-las para exercer suas funções e mantém controles de acessos nos termos da lei.</li>
              <li>A Paketá Crédito conta com recursos de proteção física, eletrônica e procedimental, que atendem aos padrões legais nacionais e internacionais de proteção a informações pessoais, tais como mecanismos de autenticação de acesso com sistemas de autenticação dupla assegurando a individualização do responsável pelo tratamento dos registros, inventário detalhado de acessos à Plataforma Digital da Paketá, uso de soluções de gestão de registros por técnicas que garantem a inviolabilidade dos dados.</li>
            </ol>
          </li>
          <li><span class="listHeader">Acesso e atualização dos dados do usuário</span>
            <ol>
              <li>Tomadores, Administradores Paketá e Empresas Conveniadas podem acessar seus próprios dados ou alterá-los a qualquer momento. Para isso, basta acessar a plataforma nas páginas de cadastro.</li>
            </ol>
          </li>
          <li><span class="listHeader">16.	Contato</span>
            <ol>
              <li>Na ocorrência de quaisquer dúvidas ou comentários sobre estes Termos e Condições de Uso e Política de Privacidade e autorização para divulgação de informações, por favor entrem em contato em contato@paketa.com.br.</li>
            </ol>
          </li>
          <li><span class="listHeader">Termo de Concordância</span>
            <ol>
              <li>Ao aderir os Termos e Condições de Uso e Política de Privacidade, o usuário está expressamente autorizando a Paketá Crédito a utilizar e compartilhar com outras empresas integrantes do grupo Paketá Crédito, bem como com parceiros comerciais confiáveis e terceiros prestadores de serviços, os quais podem ou não estar localizados no Brasil, qualquer informação prestada à Paketá Crédito, desde que esse compartilhamento seja necessário para prestação dos serviços contratados pelo usuário. o usuário reconhece a importância do compartilhamento de tais informações, visando exclusivamente a adequada prestação dos serviços contratados por meio da Plataforma Digital da Paketá e obtenção da operação desejada. Concorda também que, ao aderir os Termos e Condições de Uso e Política de Privacidade o consentimento do usuário refere-se à totalidade da duração de sua relação com a Paketá Crédito.</li>
            </ol>
          </li>
          <li><span class="listHeader">Avisos Legais e Limitações de Responsabilidade</span>
            <ol>
              <li>Desde que não previsto de outra forma nos termos e condições, seu acesso para uso da Plataforma Digital da Paketá e de outros serviços disponibilizados pela Paketá Crédito são de sua responsabilidade. Você entende e concorda que a Plataforma Digital da Paketá e outros serviços disponibilizados pela Paketá Crédito são fornecidos a você “TAL QUAL” e “CONFORME DISPONÍVEIS”. Sem prejuízo do referido anteriormente e na extensão máxima permitida pela legislação aplicável, A Paketá Crédito EXCLUI TODAS E QUAISQUER GARANTIAS E CONDIÇÕES, SEJAM IMPLÍCITAS OU EXPLÍCITAS, DE ADEQUAÇÃO PARA COMERCIALIZAÇÃO, DE ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA OU DE NÃO VIOLAÇÃO DE DIREITOS. A Paketá Crédito não presta qualquer tipo de garantia ou declaração e exclui qualquer responsabilidade: (i) pela completude, exatidão, disponibilidade, tempestividade, segurança ou confiabilidade da Plataforma Digital da Paketá; (ii) por qualquer dano sofrido pelo seu sistema de computador, perda de dados, ou qualquer outro tipo de dano resultante do seu acesso ou utilização da Plataforma Digital da Paketá; (iii) pela exclusão, falha de armazenamento ou transmissão de quaisquer conteúdos e outras comunicações mantidas pela Plataforma Digital da Paketá; e (iv) pela adequação da Plataforma Digital da Paketá às suas exigências ou pela disponibilidade da Plataforma Digital da Paketá de forma ininterrupta, segura ou livre de erros ou defeitos. Nenhum conselho ou informação, seja escrito ou oral, obtido pela Paketá Crédito criará qualquer garantia ou declaração que não esteja expressamente estabelecida nestes Termos e Condições de Uso e Política de Privacidade.</li>
              <li>Limitação de Responsabilidade
                <ol>
                  <li>Desde que não previsto de outra forma nos termos e condições, a Paketá Crédito não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, assim como por qualquer perda de lucros ou receitas, seja direta ou indireta, ou por qualquer perda de dados, uso, fundo de comércio ou quaisquer perdas intangíveis, decorrentes de (i) seu acesso, utilização ou incapacidade de acesso ou utilização da Plataforma Digital da Paketá; (ii) qualquer conduta ou conteúdo de terceiros nos serviços incluindo, sem limitação, qualquer conduta difamatória, ofensiva ou ilegal de outros usuários ou terceiros; (iii) qualquer conteúdo obtido através da Plataforma Digital da Paketá; ou (iv) acesso, utilização ou alteração não autorizados de suas transmissões ou conteúdo. as limitações desta subcláusula são aplicáveis a qualquer teoria de responsabilidade, seja com base em garantia, contrato, disposição legal ou regulamentar, responsabilidade civil (incluindo culpa) ou de outra forma, tudo isso independentemente de a Paketá Crédito ter sido ou não ter sido informada da possibilidade de ocorrência de tais danos, e ainda que qualquer das formas de reparação descritas acima não tenha cumprido a sua finalidade essencial.</li>
                </ol>
              </li>
              <li>Algumas jurisdições não permitem a exclusão de garantia implícitas ou a limitação da vigência das garantias implícitas, portanto, a presente cláusula pode não se aplicar a você em sua totalidade, mas irá se aplicar ao limite máximo permitido pela lei aplicável.</li>
            </ol>
          </li>
          <li><span class="listHeader">Demais termos importantes</span>
            <ol>
              <li>A nulidade ou invalidade de qualquer das disposições destes Termos e Condições de Uso e Política de Privacidade não prejudicará a validade e eficácia das demais cláusulas ou destes Termos e Condições de Uso e Política de Privacidade. Caso alguma decisão judicial em caráter definitivo pronuncie-se sobre a invalidade ou ineficácia de qualquer das disposições destes Termos e Condições de Uso e Política de Privacidade as partes deverão substituir a regra inquinada por outra que, sendo lícita, permita sejam alcançados, na maior extensão possível, os resultados práticos inicialmente visados.</li>
              <li>Todas as renúncias, indenizações e exclusões nestes Termos e Condições de Uso e Política de Privacidade sobreviverão à rescisão do acordo entre nós por qualquer razão.</li>
              <li>Podemos, no todo ou em parte, transigir, renunciar ou adiar, na nossa absoluta discrição, qualquer direito concedido a nós nestes Termos e Condições de Uso e Política de Privacidade sem de modo algum prejudicar ou afetar os nossos direitos em relação a estes Termos e Condições de Uso e Política de Privacidade.</li>
              <li>As partes reconhecem que: (i) o não exercício, por qualquer delas, ou o atraso no exercício de qualquer direito que lhes seja assegurado por este instrumento ou por lei não constituirá novação ou renúncia de tal direito, nem prejudicará o seu eventual exercício, a qualquer tempo; (ii) a renúncia, por qualquer das partes, de algum dos direitos ou poderes previstos nestes Termos e Condições de Uso e Política de Privacidade somente será válido se formalizado por escrito.</li>
              <li>Estes Termos e Condições de Uso e Política de Privacidade são regidos pelas leis da República Federativa do Brasil.</li>
              <li>Quaisquer dúvidas ou controvérsias oriundas destes Termos e Condições serão dirimidas no Foro Central da Comarca de São Paulo, Estado de São Paulo, com a exclusão de quaisquer outros, por mais privilegiados que sejam.</li>
            </ol>
          </li>
        </ol>
      </div>
    </section>
    <Footer />
  </div>
  )
}

export default PrivacyPolicy