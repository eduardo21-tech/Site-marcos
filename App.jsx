import { useState } from 'react';

const WHATSAPP_NUMBER = '5554995014334';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_URL = 'https://www.instagram.com/psimarcoscalgaro/';
const EMAIL = 'marcos.calgaropsi@gmail.com';
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=R.+Marechal+Floriano%2C+642%2C+Vacaria%2C+RS';

const waLink = (message = 'Olá, Marcos! Gostaria de saber mais sobre o atendimento psicológico.') =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

function Icon({ name, size = 20, strokeWidth = 1.7 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    arrow: <><path d="M4 12h15" /><path d="m13 5 7 7-7 7" /></>,
    arrowUp: <><path d="M12 19V5" /><path d="m5 12 7-7 7 7" /></>,
    arrowDown: <><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    brain: <><path d="M12 18V5" /><path d="M9 5a3 3 0 0 0-5.8 1A3.5 3.5 0 0 0 3 12.5 3.5 3.5 0 0 0 7 18h2" /><path d="M15 5a3 3 0 0 1 5.8 1 3.5 3.5 0 0 1 .2 6.5 3.5 3.5 0 0 1-4 5.5h-2" /><path d="M8 9a2 2 0 0 1 2 2M16 9a2 2 0 0 0-2 2M8 15a2 2 0 0 0 2-2m6 2a2 2 0 0 1-2-2" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.9L7.7 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.9-.6l2.8.5a2 2 0 0 1 1.7 2.6Z" />,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
  };

  return <svg {...common}>{paths[name] || paths.arrow}</svg>;
}

const focusAreas = [
  { number: '01', title: 'Ansiedade', text: 'Compreender pensamentos acelerados, preocupações constantes e os efeitos da ansiedade na rotina.', note: 'presença' },
  { number: '02', title: 'Atenção e TDAH', text: 'Construir estratégias para organização, concentração, planejamento e manutenção de hábitos.', note: 'clareza' },
  { number: '03', title: 'Autoestima e humor', text: 'Olhar para a autocrítica, o desânimo e as inseguranças com mais cuidado e gentileza.', note: 'cuidado' },
  { number: '04', title: 'Estresse e burnout', text: 'Reconhecer a sobrecarga e encontrar formas mais sustentáveis de lidar com as demandas.', note: 'equilíbrio' },
];

const faqs = [
  ['Como funciona a primeira conversa?', 'É um encontro para você contar o que motivou a busca por atendimento, tirar dúvidas e conhecer o funcionamento do processo. Não é preciso chegar com tudo organizado.'],
  ['As sessões podem ser online?', 'Sim. O atendimento online acontece por videochamada, em um local reservado e confortável para você.'],
  ['Quanto tempo dura cada sessão?', 'Cada encontro tem duração aproximada de 50 minutos. A frequência é combinada de acordo com suas necessidades e objetivos.'],
  ['O atendimento é sigiloso?', 'Sim. O sigilo profissional é parte fundamental do trabalho psicológico e é respeitado conforme as orientações éticas da profissão.'],
  ['Onde fica o consultório?', 'O atendimento presencial acontece em Vacaria/RS, na R. Marechal Floriano, 642 — sala 515.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: '', contact: '', message: '' });

  const closeMenu = () => setMenuOpen(false);
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };
  const submitForm = (event) => {
    event.preventDefault();
    const text = `Olá, Marcos! Meu nome é ${form.name}. ${form.message}${form.contact ? ` Meu contato é ${form.contact}.` : ''}`;
    window.location.href = waLink(text);
  };

  return (
    <div className="site-shell">
      <div className="announcement">
        <div className="container announcement-inner">
          <span><i /> Atendimento presencial em Vacaria/RS e online</span>
          <a href={waLink()} target="_blank" rel="noreferrer">Vamos conversar <Icon name="arrow" size={15} /></a>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Marcos Calgaro, início">
            <span className="brand-mark"><img src="/brain-mark.png" alt="Logo de cérebro da marca" /></span>
            <span className="brand-text"><strong>Marcos Calgaro</strong><small>Psicólogo Clínico · CRP 07/40338</small></span>
          </a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#atuacao" onClick={closeMenu}>Atuação</a>
            <a href="#processo" onClick={closeMenu}>Processo</a>
            <a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
            <a className="nav-button" href={waLink()} target="_blank" rel="noreferrer" onClick={closeMenu}>Agendar conversa <Icon name="arrow" size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grain" />
          <div className="hero-line hero-line-a" />
          <div className="hero-line hero-line-b" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="kicker"><span /> Psicologia clínica · Vacaria/RS e online</p>
              <h1>Um lugar para voltar a <em>si.</em></h1>
              <p className="hero-intro">A terapia pode ser um espaço de pausa, compreensão e movimento. Um encontro cuidadoso com o que você sente e com os caminhos que deseja construir.</p>
              <div className="hero-actions">
                <a className="button button-dark" href={waLink()} target="_blank" rel="noreferrer">Agendar primeira conversa <Icon name="arrow" size={18} /></a>
                <button className="inline-link" onClick={() => scrollTo('#sobre')}>Conheça meu trabalho <Icon name="arrowDown" size={16} /></button>
              </div>
              <div className="hero-proof"><span><Icon name="check" size={15} /> Prática acolhedora</span><span><Icon name="check" size={15} /> Baseada em evidências</span></div>
            </div>
            <div className="hero-art" aria-label="Foto de Marcos Calgaro">
              <div className="art-ring art-ring-one" /><div className="art-ring art-ring-two" />
              <div className="art-card">
                <img src="/profile-marcos.jpg" alt="Marcos Calgaro, psicólogo clínico" />
                <span className="art-caption">cuidado · presença · escuta</span>
              </div>
              <div className="art-note"><span>01</span><strong>Escuta atenta</strong><small>sem pressa, sem julgamentos</small></div>
              <div className="art-stamp"><b>MC</b><span>Psicologia<br />Clínica</span></div>
            </div>
          </div>
          <div className="container hero-bottom"><span>Um passo de cada vez</span><span>↓</span></div>
        </section>

        <section className="statement">
          <div className="container statement-grid">
            <p className="section-label">um espaço para você</p>
            <p className="statement-text">Nem sempre é fácil entender o que está acontecendo por dentro. A terapia oferece um lugar de escuta, reflexão e novas possibilidades.</p>
            <span className="statement-mark">✳</span>
          </div>
        </section>

        <section className="section focus-section" id="atuacao">
          <div className="container">
            <div className="section-head split-head">
              <div><p className="kicker"><span /> Possibilidades de cuidado</p><h2>O que podemos <em>olhar</em> juntos?</h2></div>
              <p>Cada pessoa vive seus desafios de um jeito único. O processo é construído a partir da sua história, do seu momento e dos seus objetivos.</p>
            </div>
            <div className="focus-grid">
              {focusAreas.map((area) => <article className="focus-card" key={area.number}>
                <div className="card-top"><span>{area.number}</span><small>{area.note}</small></div>
                <h3>{area.title}</h3><p>{area.text}</p>
                <a href={waLink(`Olá, Marcos! Gostaria de conversar sobre ${area.title.toLowerCase()}.`)} target="_blank" rel="noreferrer">Conversar sobre isso <Icon name="arrow" size={16} /></a>
              </article>)}
            </div>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="container about-layout">
            <div className="about-visual"><span className="about-label">PSICOLOGIA<br />CLÍNICA</span><div className="atom-orbits" aria-hidden="true"><span className="atom-orbit atom-orbit-one"><i /></span><span className="atom-orbit atom-orbit-two"><i /></span><span className="atom-orbit atom-orbit-three"><i /></span></div><div className="about-logo-frame"><img src="/brain-mark.png" alt="Ilustração de cérebro da identidade visual" /></div><div className="quote">“<br /><strong>Um espaço de cuidado começa com uma escuta que respeita sua história.</strong></div></div>
            <div className="about-copy"><p className="kicker"><span /> Sobre o profissional</p><h2>Prazer, sou <em>Marcos.</em></h2><p className="lead">Sou psicólogo clínico e acredito em uma prática acolhedora, ética e fundamentada em conhecimento científico.</p><p>Meu trabalho busca oferecer um espaço seguro para que cada pessoa possa compreender suas experiências, olhar para suas dificuldades e construir, no seu ritmo, novas possibilidades.</p><div className="credentials"><span><b>Psicólogo Clínico</b><small>CRP 07/40338</small></span><span><b>Pós-graduação</b><small>Psicologia Clínica Baseada em Evidências</small></span><span><b>Pós-graduação</b><small>Neuropsicologia</small></span></div><a className="text-button" href={waLink()} target="_blank" rel="noreferrer">Entre em contato <Icon name="arrow" size={18} /></a></div>
          </div>
        </section>

        <section className="process-section" id="processo">
          <div className="container">
            <div className="section-head process-head"><div><p className="kicker"><span /> Como funciona</p><h2>Um processo feito <em>com você.</em></h2></div><p>A psicoterapia é um percurso. Não existe uma fórmula igual para todo mundo: os encontros acompanham suas necessidades.</p></div>
            <div className="steps"><article><span>01</span><div><h3>Primeira conversa</h3><p>Um momento para apresentar o que motivou a busca por terapia, tirar dúvidas e conhecer o processo.</p></div></article><article><span>02</span><div><h3>Compreender sua história</h3><p>Juntos, buscamos compreender experiências, identificar necessidades e definir objetivos.</p></div></article><article><span>03</span><div><h3>Construir possibilidades</h3><p>Ao longo das sessões, o trabalho é ajustado ao seu momento, respeitando seu tempo.</p></div></article></div>
            <div className="formats"><div><Icon name="pin" size={21} /><span><b>Presencial</b><small>Vacaria/RS · sala 515</small></span></div><div><Icon name="video" size={21} /><span><b>Online</b><small>Por videochamada</small></span></div><div><Icon name="clock" size={21} /><span><b>50 minutos</b><small>Duração aproximada</small></span></div></div>
          </div>
        </section>

        <section className="faq-section" id="duvidas">
          <div className="container faq-layout"><div className="faq-intro"><p className="kicker"><span /> Perguntas frequentes</p><h2>Ficou com alguma <em>dúvida?</em></h2><p>Reuni algumas respostas para ajudar você a entender melhor como funciona o atendimento.</p><a className="text-button" href={waLink()} target="_blank" rel="noreferrer">Falar pelo WhatsApp <Icon name="arrow" size={18} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><Icon name={openFaq === index ? 'close' : 'plus'} size={18} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div>
        </section>

        <section className="contact-section" id="contato"><div className="container contact-layout"><div><p className="kicker light"><span /> Seu próximo passo</p><h2>Começar pode ser simplesmente uma <em>conversa.</em></h2><p>Se quiser saber mais sobre o atendimento, escreva. Vou responder com cuidado e clareza.</p><div className="contact-links"><a href={`mailto:${EMAIL}`}><Icon name="mail" size={18} /> {EMAIL}</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Icon name="instagram" size={18} /> @psimarcoscalgaro</a><a href={MAP_URL} target="_blank" rel="noreferrer"><Icon name="pin" size={18} /> Ver localização</a></div></div><form className="contact-form" onSubmit={submitForm}><label>Seu nome<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Como posso chamar você?" /></label><label>Como posso responder?<input value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} placeholder="WhatsApp ou e-mail" /></label><label>Mensagem<textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Escreva brevemente o que gostaria de saber" rows="3" /></label><button className="button button-light" type="submit">Enviar pelo WhatsApp <Icon name="arrow" size={18} /></button></form></div></section>
      </main>

      <footer className="footer"><div className="container footer-grid"><div><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><img src="/brain-mark.png" alt="Logo de cérebro da marca" /></span><span className="brand-text"><strong>Marcos Calgaro</strong><small>Psicólogo Clínico · CRP 07/40338</small></span></a><p>Psicoterapia com acolhimento,<br />ética e presença.</p></div><div><h4>Explore</h4><a href="#sobre">Sobre</a><a href="#atuacao">Atuação</a><a href="#processo">Processo</a><a href="#duvidas">Dúvidas</a></div><div><h4>Contato</h4><a href={waLink()} target="_blank" rel="noreferrer"><Icon name="phone" size={15} /> (54) 99501-4334</a><a href="mailto:marcos.calgaropsi@gmail.com"><Icon name="mail" size={15} /> marcos.calgaropsi@gmail.com</a><a href={MAP_URL} target="_blank" rel="noreferrer"><Icon name="pin" size={15} /> Vacaria/RS · ver mapa</a></div></div><div className="container footer-bottom"><span>© 2026 Marcos Calgaro</span><span>Psicólogo Clínico · CRP 07/40338</span><a href="#inicio" aria-label="Voltar ao início"><Icon name="arrowUp" size={16} /></a></div></footer>
    </div>
  );
}

export default App;
