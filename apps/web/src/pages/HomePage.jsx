
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const HomePage = () => {
  const generalWhatsappLink = "https://wa.me/5521982320012?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seu%20trabalho";

  const demands = [
    {
      title: 'Ansiedade',
      description1: 'Não dá para acelerar o tempo de maturação das coisas, mas podemos nos ocupar de várias formas que aumentam as chances de um bom resultado.',
      description2: 'Não fazemos uma planta crescer mais rápido, mas cuidamos do solo, do adubo e da luz, respeitando a medida certa de cada um.',
      description3: 'Praticar a espera ativa não muda o tempo das coisas, mas muda a forma como atravessamos esse tempo.'
    },
    {
      title: 'Depressão',
      description1: 'Momentos de tristeza fazem parte da vida e costumam ter um motivo e um tempo, mesmo que nem sempre claros. Mas, quando a tristeza se torna constante ou difícil de entender, ela pede cuidado.',
      description2: 'Talvez você não tenha feito nada para que esse sentimento surgisse. Ainda assim, é sua responsabilidade cuidar de si quando ele aparece. Como quando você volta para buscar um carro estacionado e o encontra batido, sem nenhum bilhete, ignorar o problema não faz o dano desaparecer. Não foi você quem causou. Mas é você quem pode resolver.',
      description3: null
    },
    {
      title: 'Dispersão',
      description1: 'Há momentos em que tudo chama ao mesmo tempo. Não é só o pensamento que se desloca. O corpo também vai. Você começa algo, interrompe, muda, volta, perde o fio. Quando percebe, várias coisas foram iniciadas. Poucas chegaram ao fim.',
      description2: 'É como abrir várias abas ao mesmo tempo e não conseguir permanecer em nenhuma. E, no meio disso, fica a sensação de estar sempre em movimento, mas nunca chegando.',
      description3: null
    },
    {
      title: 'Autocobrança',
      description1: 'Às vezes, nada do que você faz parece suficiente. Você tenta mais, exige mais, ajusta, refaz. E, ainda assim, fica a sensação de que sempre falta algo. O olhar não descansa, a cabeça também não, sempre encontrando mais um ponto a corrigir.',
      description2: 'É como tentar encher um recipiente que nunca parece completo. E, no meio disso, nada do que já está, parece bastar. E o que já existe em você, vai ficando para trás.',
      description3: null
    },
    {
      title: 'Baixa Autoestima',
      description1: 'É natural não gostarmos de tudo em nós. Mas, muitas vezes, quando aprendemos a lidar melhor com certas características e a usá-las nos momentos certos, elas passam a ter outro valor.',
      description2: 'Nem todo mundo tem "estômago" para abrir um corpo e mexer em entranhas, e isso não define um psicopata, assim como também não define um médico.',
      description3: 'Uma parte sua pode incomodar. Mas ela nunca será capaz de resumir quem você é.'
    },
    {
      title: 'Inadequação',
      description1: 'Quando nos sentimos inadequados ou desconectados, é comum acreditar que há algo errado com a gente. Às vezes, estamos carregando bagagens que pesam. Outras, o desejo de pertencimento é tão forte que nem percebemos que ali não é onde queremos estar.',
      description2: 'É como insistir em usar um sapato que machuca, só porque é bonito ou porque na etiqueta diz que é o seu número. Talvez o problema não seja o seu tamanho, mas o lugar onde você tenta caber.',
      description3: null
    },
    {
      title: 'Relacionamento',
      description1: 'Se relacionar nem sempre é simples. Você pensa, sente vontade, mas, às vezes, algo trava. E, quando consegue chegar, nem sempre consegue ficar. Algo se perde no meio, no que poderia ter sido, no que quase aconteceu.',
      description2: 'Não é só sobre querer, mas sobre se conhecer, conhecer quem está com você e construir algo juntos, mesmo quando isso pede ajuste, cuidado e tentativa. É sobre encontrar um novo ritmo.',
      description3: 'É como afinar dois instrumentos diferentes, cada um com o seu próprio som. Sem escuta, é só ruído. Com atenção, pode virar música.'
    },
    {
      title: 'Solidão',
      description1: 'Solidão nem sempre é estar só. E estar só nem sempre é estar em silêncio. Muitas vezes, é estar acompanhado e ainda assim não se sentir visto. É quando você está ali, mas não se sente parte. Como se algo em você não encontrasse lugar.',
      description2: 'É como sentar em uma mesa cheia, onde ninguém fala a sua língua. Não é falta de pessoas. É falta de conexão.',
      description3: null
    },
    {
      title: 'Desamparo',
      description1: 'Há momentos em que parece que falamos um idioma que não encontra eco no mundo. Às vezes, não sabemos nomear o que sentimos. Outras, até sabemos, mas as palavras não alcançam.',
      description2: 'É como carregar um endereço sem saber onde fica, ou conhecer o caminho, mas não conseguir mostrá-lo. E o que não encontra palavras começa a pesar, até que você já não se reconhece no que sente.',
      description3: null
    },
    {
      title: 'Luto',
      description1: 'Há ausências que não cabem em palavras. Elas aparecem nos detalhes, nos pequenos hábitos, nos lugares que já não são como antes. Nos gestos, nas lembranças, no que permanece, mas já não é o mesmo.',
      description2: 'É como entrar em um espaço conhecido e sentir o vazio de algo que não está mais lá. E, mesmo com tudo no lugar, nada é exatamente como era. Nem você.',
      description3: null
    },
    {
      title: 'Crise Existencial',
      description1: 'Buscar um propósito, entender pelo que se vive e quem somos nem sempre é simples. Há momentos em que nos sentimos desconectados de quem somos ou da vida que levamos. Se conhecer é um caminho. Nem sempre claro, nem sempre leve, mas é nele que o sentido se constrói.',
      description2: 'Você não diria que um peixe é um erro existencial por não conseguir viver fora d\'água, diria? O erro não está em quem você é. Está em tentar florescer em um lugar que não é o seu.',
      description3: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Taly May Braga | CRP 05/41542</title>
        <meta name="description" content="Atendimento psicológico online para adultos. Sessões semanais com acolhimento, escuta e compreensão. Psicóloga pós-graduada em psicanálise e filosofia." />
      </Helmet>

      {/* Hero Section — Logo sobre fundo roxo, igual ao original */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center bg-brand-primary px-4 sm:px-6 lg:px-8 py-5"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <img
            src="/logo-taly.png"
            alt="Taly May Braga — Psicologia &amp; Psicanálise"
            style={{ width: 'clamp(260px, 55vw, 360px)' }}
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="py-20 md:py-28 bg-brand-background px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 md:gap-16 items-start"
          >
            {/* Image */}
            <div className="w-full md:w-5/12 lg:w-2/5 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/taly-foto.png"
                  alt="Taly May Braga - Psicóloga"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-7/12 lg:w-3/5">
              <div className="space-y-2 text-xl text-center md:text-2xl font-serif text-brand-primary/80 leading-relaxed mb-8">
                <p>As coisas mudam</p>
                <p>A vida avança</p>
                <p>E às vezes tudo fica confuso</p>
              </div>

              <div className="space-y-5 text-base md:text-lg text-brand-primary/80 leading-relaxed">
                <p>
                  Se você recebeu um sacode ou sente que precisa de um, está no lugar certo. Aqui há afeto, atenção e compreensão. Porque, às vezes, para chegar onde queremos, precisamos de alguém que nos ajude a olhar a estrada por outros ângulos.
                </p>
                <p>
                  Meu nome é Taly, sou psicóloga, pós-graduada em psicanálise e filosofia. Me formei em 2010 e, desde então, trabalho com pessoas que desejam compreender seus conflitos, entender quem são e fazer escolhas mais conscientes sobre a própria vida.
                </p>
                <p>
                  Acredito que somos movidas(os) por desejos inconscientes. Por isso, em alguns momentos, temos tanta dificuldade de entender como chegamos ao ponto em que estamos.
                </p>
                <p>
                  Ansiedade, depressão, sensação de estar perdida(o), pânico, crises existenciais, traumas, lutos, perdas… suas dores e seu passado fazem parte da sua história, mas não precisam, de forma alguma, definir quem você é ou o tipo de vida que pode viver.
                </p>
                <p>
                  O autoconhecimento é uma ferramenta libertadora. Ele permite que você descubra e entenda o que dói e por quê, trazendo clareza para pensar no que fazer a partir daí, para que suas dores e questões não impeçam você de construir a vida que deseja.
                </p>
                <p>
                  Mergulhar em si também pode ser um começo, e não precisa ser feito sozinha(o).
                </p>
              </div>

              <div className="mt-10">
                <a
                  href={generalWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-xl font-medium text-base hover:bg-brand-primary/90 transition-all duration-300 hover:shadow-lg active:scale-[0.98] w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar comigo no WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="atendimento"
        className="py-20 md:py-28 bg-brand-secondary text-white px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8 leading-tight">
              Como funciona o atendimento comigo?
            </h2>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white/95 mb-12">
              <p>
                Sessões semanais, realizadas online, com duração de até 60 minutos, voltadas para pessoas adultas. Valores e horários são combinados diretamente pelo WhatsApp.
              </p>
              <p>
                No primeiro contato, conversamos brevemente para entender sua demanda e combinar os próximos passos.
              </p>
            </div>

            <a
              href={generalWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-secondary px-8 py-4 rounded-xl font-bold text-base hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-[0.98] w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Clique aqui para falar comigo</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Demands Section */}
      <section
        id="demandas"
        className="py-20 md:py-28 bg-brand-background px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-primary leading-tight">
              Principais Demandas
            </h2>
          </motion.div>

          {/* Demands Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {demands.map((demand, index) => {
              const specificWhatsappLink = `https://wa.me/5521982320012?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20consulta%20para%20${encodeURIComponent(demand.title)}`;
              
              return (
                <motion.div
                  key={demand.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="card-elegant flex flex-col h-full p-8"
                >
                  <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">
                    {demand.title}
                  </h3>
                  <div className="text-gray-600 leading-relaxed mb-8 flex-grow space-y-3">
                    <p>{demand.description1}</p>
                    {demand.description2 && <p>{demand.description2}</p>}
                    {demand.description3 && <p>{demand.description3}</p>}
                  </div>
                  
                  <a
                    href={specificWhatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-brand-primary/90 transition-all duration-200 active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Falar comigo no WhatsApp</span>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
