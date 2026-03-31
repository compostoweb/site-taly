import React, { useState, useEffect, useCallback } from 'react';
import { MessageCircle, Instagram, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Excelente profissional, extremamente consistente, grande suporte a longo prazo. Recomendo com convicção",
    author: "V. G."
  },
  {
    text: "Faço psicoterapia com a Taly desde o final de 2023 e neste processo tenho conseguido realinhar áreas da vida que há um tempo estava com desafio. Sei o quanto sem a minha autoanálise e mudança de postura nada muda, ainda assim com um bom direcionamento e percepção daquilo que não vemos vamos mais longe em direção ao que almejamos. Gratidão pelo teu servir!",
    author: "P. A."
  },
  {
    text: "O carinho e o amor pela profissão ficam extremamente visíveis nas sessões com a Taly, não me sinto um objeto de análise. Me sinto escutado, me sinto acolhido, sinto que somos duas almas humanas buscando a totalidade do meu ser juntos e nem sei expressar o quão lindo isso é. Meu coração se aquece por saber que posso contar com ela. Ela me mostra como resgatar a alegria de viver. Gratidão!",
    author: "M. C."
  },
  {
    text: "Em um ano de terapia eu já descobri mais sobre mim do que nos outros 30. Ela tem me ajudado a me reconectar comigo e também a me (re)conhecer.",
    author: "J. S."
  },
  {
    text: "Depois de algum tempo sem terapia eu me permiti voltar a ter esse espaço pra mim e encontrar a Taly foi a melhor coisa que poderia ter me acontecido! Sinto que tenho evoluído grandemente e que irei evoluir mais.",
    author: "J. R."
  },
  {
    text: "Desde o primeiro atendimento me senti muito acolhido, ouvido e respeitado. Ela conduz as sessões com muita empatia, profissionalismo e sensibilidade, criando um ambiente seguro para falar sobre qualquer assunto. O acompanhamento tem sido muito importante para meu desenvolvimento pessoal e para entender melhor minhas emoções e pensamentos. Sou muito grato e recomendo para qualquer pessoa que esteja buscando apoio psicológico de qualidade.",
    author: "G. M."
  },
  {
    text: "Taly é uma das melhores profissionais com quem tive contato. Uma psicóloga que trata seus pacientes com cautela, atenção e de forma assertiva. Cada consulta é um momento de reflexão interna essencial para entender como lidar com nossas emoções e pensamentos. Sou eternamente grato por sua dedicação!",
    author: "G. G."
  },
  {
    text: "Com a terapia, estou conseguindo pensar e avaliar coisas que antes não avaliava, o que tem ajudado no meu processo com a depressão e a ansiedade. Além disso, tenho conseguido me entender melhor.",
    author: "D. R."
  }
];

const Footer = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), []);
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const whatsappLink = "https://wa.me/5521982320012?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seu%20trabalho";
  const instagramLink = "https://www.instagram.com/psi.talymaybraga";
  const facebookLink = "https://www.facebook.com/psi.talymaybraga";
  const reviews = "https://www.google.com/search?hs=ysC&sca_esv=3f9b988949b33d18&hl=pt-br&q=avalia%C3%A7%C3%B5es+sobre+psic%C3%B3loga+taly+may+braga+%7C+crp+05/41542+rio+de+janeiro&uds=ALYpb_ntKcxgYPw8HVHjCS4bZKMbuIl4ikXGmSCN-yY9IoE7wlIKq2S_yBFQGATvYPm-veKM_zyChirlzsd5po9sa8lU5bhYErSVTMhhY2gftMSPbHakxIG1cM84mfK9sX7jfVas0vPswmL55IzG4vKXiIYXHDdzI-9ouNNjj7w9SWnsf5cxUYkHtJk-g83ZamZFwdQFSPuI6oCQIeKHqjFR5qyRybpkAAcpeuva111q9H0sUdctXrvNvZNnZ0dpK_ydj-x5-efGvo2DqAwy0-djzAS4JEz6p-E9dBo3paw63ay9XrsZe5gaTDYDLlSkigwwslTRj1eKormyZ9dLF8EJayd_7CmgjdpkQnRmwK5hMQrAMuJQKkqKIwxViDeWikFH6x9_0ePngyhb9BfI2Sr1l6rhhoWwMPw1vlALelBd3xFtHylSLL4P7o8gKxbwQV-cM2ZP2YQRnLf-Qxbd2hNeEGhGqt6kWGoEutcAHXHVIvtcMkQdC_nmAa88crGa5gFeN-w7mhhSp8499HU7ria3jQWBjuG5JEdtJBKMQyX5sPqGQi1ftvf05OPJ1o-8bQuAA04sQKwx24FWG-07bVE3LCwM1pMlJvst8_ZOgaRqfImZDHo60zYIb9b0Hj9722oK1ViSP6zK3pPEDYP0zGJWSMezSTwsvQ&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZrSpZsL0DuISLG2DPxXKmyvR1enmEtZi-gMputF61Hwed7A46qeCyTlJYwl73M6akpIecML4dBnAOJK7RnJA2nL0jeUfoiwxVVvdVyXUQkcSTrvh_fU3nmihFxfc0mlTmb1utHCyXKtg82kGi48wkQScQ_zS07O3IeI2riRiy1IIuojUQ%3D%3D&sa=X&ved=2ahUKEwidgfaFgaiTAxXlK7kGHez8El8Qk8gLegQIERAB&ictx=1&biw=428&bih=827&dpr=3"

  return (
    <footer className="flex flex-col w-full">

      {/* Testimonials Carousel */}
      <div
        className="bg-brand-background py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-primary/10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="max-w-2xl mx-auto text-center select-none">
          {/* Title */}
          <h2 className="text-xl font-sans tracking-[0.25em] uppercase text-brand-primary/60 mb-10">
            O que dizem meus pacientes
          </h2>

          {/* Quote mark */}
          <div className="text-7xl font-serif text-brand-primary leading-none mb-4" aria-hidden="true">"</div>

          {/* Text */}
          <p className="text-lg md:text-xl font-bold text-brand-primary leading-relaxed min-h-[8rem] flex items-center justify-center px-4">
            {testimonials[current].text}
          </p>

          {/* Author */}
          <p className="mt-6 text-base italic text-brand-primary/70 font-serif">
            {testimonials[current].author}
          </p>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="p-1 text-brand-primary/40 hover:text-brand-primary transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-brand-primary scale-125'
                    : 'bg-brand-primary/30 hover:bg-brand-primary/60'
                }`}
              />
            ))}

            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="p-1 text-brand-primary/40 hover:text-brand-primary transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Upper Section - Social & Testimonials link */}
      <div className="bg-brand-background py-12 px-4 sm:px-6 lg:px-8 border-t border-brand-primary/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-primary tracking-wide">
              <a
              href={reviews}
              target="_blank"
              rel="noopener noreferrer"
              > CLIQUE AQUI PARA LER MAIS DEPOIMENTOS </a>
          </h3>
          
          <div className="flex items-center justify-center gap-6">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-brand-primary/90 hover:scale-110 transition-all duration-300 shadow-md"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-brand-primary/90 hover:scale-110 transition-all duration-300 shadow-md"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-brand-primary/90 hover:scale-110 transition-all duration-300 shadow-md"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Lower Section - Professional Info */}
      <div className="bg-brand-primary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Logo & Name */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/logo-taly.png"
                alt="Taly May Braga — Psicologia & Psicanálise"
                className="w-56 opacity-90 brightness-0 invert"
              />
            </div>

            {/* Credentials */}
            <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
              <p className="text-lg font-medium">CRP: 05/41542</p>
              <p className="text-white/90">Graduação em Psicologia</p>
              <p className="text-white/90">Pós-graduação em Psicanálise e Filosofia</p>
              <p className="text-white/90 mt-2">
                Coordenadora da{' '}
                <a 
                  href="http://www.redepsis.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-white/80 transition-colors"
                >
                  Rede Psis
                </a>
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-white/10 my-10" />

          {/* Copyright & Legal */}
          <div className="flex flex-col items-center gap-4 text-sm text-white/60 text-center">
            <p>© {new Date().getFullYear()} Talitha May Braga. Todos os direitos reservados.</p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;