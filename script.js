// Troca de idioma PT/EN. Os textos em português ficam no HTML;
// o dicionário guarda as duas versões para ir e voltar sem recarregar.
const textos = {
  pt: {
    skip: 'Pular para o conteúdo',
    'nav.projetos': 'Projetos', 'nav.experiencia': 'Experiência', 'nav.contato': 'Contato',
    'foto.alt': 'Foto de Pedro Gonçalves',
    'hero.titulo': 'Backend &amp; AI engineer em formação',
    'hero.lead': 'Construo APIs, integrações com modelos de linguagem e automações que tiram trabalho repetitivo das pessoas. Estudo Ciência da Computação na UEPB, em Patos (PB).',
    'hero.cta1': 'Ver projetos', 'hero.cta2': 'Falar comigo',
    'sobre.t': 'Sobre',
    'sobre.p1': 'Sou estagiário de suporte técnico e desenvolvimento na Siqueira Tecnologia. Atender usuário de perto me ensinou a olhar para o que quebra, por que quebra e como evitar que quebre de novo, e é isso que levo para o código.',
    'sobre.p2': 'Meu foco é backend e integração com LLMs: contratos claros, falhas tratadas com cuidado e testes que não dependem de rede. No TCC, construo o Sokra, um tutor de programação que ensina por perguntas em vez de entregar respostas.',
    'sobre.p3': 'Fora do código, lidero a equipe de comunicação de um projeto de extensão da UEPB.',
    'fatos.curso': 'Formação', 'fatos.cursoV': 'Ciência da Computação na UEPB, com conclusão prevista para jun/2028',
    'fatos.base': 'Onde estou',
    'fatos.idiomas': 'Idiomas', 'fatos.idiomasV': 'Português (nativo), inglês (avançado), italiano (fluente)',
    'proj.t': 'Projetos',
    'rot.problema': 'O problema', 'rot.construi': 'O que construí até aqui', 'rot.construi2': 'O que construí',
    'rot.decisoes': 'Decisões técnicas', 'rot.repo': 'Ver repositório',
    'sokra.status': 'MVP em desenvolvimento, projeto do TCC',
    'sokra.resumo': 'Tutor de estudos baseado no método socrático. Em vez de entregar a resposta pronta, conduz o estudante por perguntas para que ele desenvolva o próprio raciocínio.',
    'sokra.problema': 'Ferramentas de IA costumam transformar o estudo em algo passivo: o aluno pergunta e recebe a resposta. Isso atrapalha justamente quem está aprendendo a programar.',
    'sokra.construi': '<li>Landing page e lista de espera.</li><li>API em FastAPI com uma camada de provedores de LLM definida por contrato (<code>Protocol</code>): streaming, avaliação e embeddings.</li><li>Adaptador para o OpenRouter com streaming SSE, avaliação com saída estruturada em JSON Schema e embeddings.</li><li>Pipeline de CI no GitHub Actions com Ruff, Pyright e Pytest.</li>',
    'sokra.decisoes': '<li>Erros separados em transitórios (408, 429, 5xx recuperáveis, falhas de rede) e permanentes; só os transitórios são repetidos, com backoff limitado e respeito ao <code>Retry-After</code>.</li><li>Nenhuma nova tentativa depois que o primeiro trecho do stream chega ao usuário, para não duplicar resposta.</li><li>Mensagens de erro públicas nunca repetem corpo da resposta, prompt ou credenciais do provedor.</li><li>Testes com <code>MockTransport</code> do HTTPX e uma trava que bloqueia rede e DNS: a suíte roda sem chave, sem internet e sem custo.</li>',
    'vig.status': 'Em desenvolvimento, uso pessoal',
    'vig.resumo': 'Gerenciador de tarefas pessoal instalável (PWA), com identidade de “organização secreta”. Reúne faculdade, a equipe que lidero e a vida pessoal num só lugar, com lembretes no computador e no celular.',
    'vig.construi': '<li>Kanban e checklist, tela Hoje, calendário e reuniões com pauta e ata.</li><li>Captura rápida com marcações no próprio texto: <code>#área</code>, <code>@amanhã 14h</code>, <code>!!</code> para prioridade, <code>/prova</code>, <code>+pessoa</code>.</li><li>Equipe com mensagem de cobrança pronta para enviar pelo WhatsApp.</li>',
    'vig.decisoes': '<li>Supabase com Row Level Security por usuário em todas as tabelas e sincronização em tempo real entre dispositivos.</li><li>Edge Function em Deno, disparada pelo <code>pg_cron</code> a cada 5 minutos, envia Web Push com deduplicação dos lembretes.</li><li>Service worker com Workbox: o app abre offline e guarda uma cópia local dos dados.</li>',
    'exp.t': 'Experiência',
    'exp.siq.q': 'mai/2026 até hoje', 'exp.siq.p': 'Estagiário de Suporte Técnico &amp; Desenvolvimento',
    'exp.pro.p': 'Estágio em desenvolvimento: automações com n8n e integrações entre sistemas',
    'exp.bew.p': 'QA freelance',
    'exp.knex.p': 'PMO, gestão de projetos',
    'exp.ext.t': 'Projeto de extensão na UEPB', 'exp.ext.p': 'Líder da equipe de comunicação',
    'sk.t': 'Ferramentas', 'sk.ia': 'IA e automação', 'sk.llm': 'Integração com LLMs',
    'sk.qa': 'Testes e qualidade', 'sk.infra': 'Infra e dados',
    'ct.t': 'Vamos conversar',
    'ct.p': 'Estou aberto a estágios e projetos em backend, LLMs e automação.',
    'ct.cv': 'Baixar currículo (PDF)',
  },
  en: {
    skip: 'Skip to content',
    'nav.projetos': 'Projects', 'nav.experiencia': 'Experience', 'nav.contato': 'Contact',
    'foto.alt': 'Photo of Pedro Gonçalves',
    'hero.titulo': 'Backend &amp; AI engineer in the making',
    'hero.lead': 'I build APIs, integrations with language models and automations that take repetitive work off people’s plates. I study Computer Science at UEPB, in Patos, Brazil.',
    'hero.cta1': 'See projects', 'hero.cta2': 'Get in touch',
    'sobre.t': 'About',
    'sobre.p1': 'I’m a technical support and development intern at Siqueira Tecnologia. Working close to users taught me to look at what breaks, why it breaks and how to keep it from breaking again, and that’s what I bring to code.',
    'sobre.p2': 'My focus is backend and LLM integration: clear contracts, carefully handled failures and tests that don’t depend on the network. For my thesis I’m building Sokra, a programming tutor that teaches through questions instead of handing out answers.',
    'sobre.p3': 'Outside code, I lead the communications team of a university outreach project at UEPB.',
    'fatos.curso': 'Education', 'fatos.cursoV': 'Computer Science at UEPB, expected to graduate in June 2028',
    'fatos.base': 'Based in',
    'fatos.idiomas': 'Languages', 'fatos.idiomasV': 'Portuguese (native), English (advanced), Italian (fluent)',
    'proj.t': 'Projects',
    'rot.problema': 'The problem', 'rot.construi': 'What I’ve built so far', 'rot.construi2': 'What I built',
    'rot.decisoes': 'Technical decisions', 'rot.repo': 'View repository',
    'sokra.status': 'MVP in progress, thesis project',
    'sokra.resumo': 'A study tutor based on the Socratic method. Instead of handing over the answer, it guides students through questions so they build their own reasoning.',
    'sokra.problema': 'AI tools tend to make studying passive: the student asks and gets the answer. That hurts exactly the people who are learning to program.',
    'sokra.construi': '<li>Landing page and waitlist.</li><li>FastAPI service with an LLM provider layer defined by contract (<code>Protocol</code>): streaming, evaluation and embeddings.</li><li>OpenRouter adapter with SSE streaming, evaluation through JSON Schema structured output, and embeddings.</li><li>CI pipeline on GitHub Actions running Ruff, Pyright and Pytest.</li>',
    'sokra.decisoes': '<li>Errors split into transient (408, 429, recoverable 5xx, network failures) and permanent; only transient ones are retried, with bounded backoff that honors <code>Retry-After</code>.</li><li>No retry once the first stream chunk has reached the user, so answers are never duplicated.</li><li>Public error messages never echo the provider’s response body, prompts or credentials.</li><li>Tests use HTTPX <code>MockTransport</code> and a guard that blocks network and DNS: the suite runs with no key, no internet and no cost.</li>',
    'vig.status': 'In progress, personal use',
    'vig.resumo': 'An installable personal task manager (PWA) styled as a “secret organization”. It brings college, the team I lead and personal life into one place, with reminders on desktop and phone.',
    'vig.construi': '<li>Kanban and checklist views, a Today screen, calendar, and meetings with agenda and minutes.</li><li>Quick capture with inline markers: <code>#area</code>, <code>@tomorrow 2pm</code>, <code>!!</code> for priority, <code>/exam</code>, <code>+person</code>.</li><li>Team view with a ready-to-send WhatsApp follow-up message.</li>',
    'vig.decisoes': '<li>Supabase with per-user Row Level Security on every table and real-time sync across devices.</li><li>A Deno Edge Function, triggered by <code>pg_cron</code> every 5 minutes, sends Web Push with reminder deduplication.</li><li>Workbox service worker: the app opens offline and keeps a local copy of the data.</li>',
    'exp.t': 'Experience',
    'exp.siq.q': 'May 2026 to present', 'exp.siq.p': 'Technical Support &amp; Development Intern',
    'exp.pro.p': 'Development intern: n8n automations and system integrations',
    'exp.bew.p': 'Freelance QA',
    'exp.knex.p': 'PMO, project management',
    'exp.ext.t': 'Outreach project at UEPB', 'exp.ext.p': 'Communications team lead',
    'sk.t': 'Tools', 'sk.ia': 'AI and automation', 'sk.llm': 'LLM integration',
    'sk.qa': 'Testing and quality', 'sk.infra': 'Infra and data',
    'ct.t': 'Let’s talk',
    'ct.p': 'I’m open to internships and projects in backend, LLMs and automation.',
    'ct.cv': 'Download résumé (PDF)',
  },
};

function aplicarIdioma(lang) {
  const dic = textos[lang] || textos.pt;
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dic[el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const v = dic[el.dataset.i18nAlt];
    if (v !== undefined) el.alt = v;
  });
  document.querySelectorAll('.idioma button').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  try { localStorage.setItem('idioma', lang); } catch { /* sem armazenamento: segue sem lembrar */ }
}

let inicial = 'pt';
try {
  inicial = localStorage.getItem('idioma')
    || (navigator.language && !navigator.language.toLowerCase().startsWith('pt') ? 'en' : 'pt');
} catch { /* mantém português */ }
aplicarIdioma(inicial);

document.querySelectorAll('.idioma button').forEach((b) => {
  b.addEventListener('click', () => aplicarIdioma(b.dataset.lang));
});
