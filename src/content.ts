// Todo o texto do site, em PT e EN. Editar aqui muda as duas versões de uma vez.

export type Lang = 'pt' | 'en';

// Troque pela chave criada em https://web3forms.com (ela é pública por design).
export const WEB3FORMS_KEY = 'COLE_SUA_CHAVE_AQUI';
export const EMAIL = 'joaoguimatz@gmail.com';
export const GITHUB = 'https://github.com/jgmtz';
export const LINKEDIN = 'https://www.linkedin.com/in/jo%C3%A3o-guilherme-matzenbacher';
// Mude HAS_CV para true quando colocar os PDFs em public/ (um por idioma).
export const HAS_CV = true;
export const CV_FILE = { pt: '/curriculo.pdf', en: '/curriculo-en.pdf' } as const;
export const HAS_PHOTO = true;

export const routes = {
  home: { pt: '/', en: '/en/' },
} as const;
export type RouteKey = keyof typeof routes;

export const ui = {
  pt: {
    skip: 'Pular para o conteúdo',
    nav: { home: 'Início', projects: 'Projetos', service: 'Serviço militar', path: 'Trajetória', skills: 'Competências', contact: 'Contato' },
    quick: 'Visão rápida',
    explore: 'Explorar',
    modeLabel: 'Modo de leitura',
    pagerLabel: 'Índice das seções',
    themeLabel: 'Alternar tema claro e escuro',
    otherLang: 'English',
    otherLangShort: 'EN',
    cardUpdated: 'Ficha de apresentação, atualizada em outubro de 2026',
    lead: 'Estudante de Engenharia de Software. Gosto de deixar processos claros antes de transformá-los em sistema, e procuro estágio em desenvolvimento, processos, projetos ou produto.',
    leadMore: 'Faço planilha para quase tudo e gosto de ver as coisas estruturadas. Foi assim que levei para a faculdade um problema real do quartel onde servi, que virou o projeto MilScale.',
    fields: {
      education: 'Formação',
      educationV: 'Engenharia de Software, PUCPR, 6º período (conclusão prevista em 12/2027)',
      location: 'Local',
      locationV: 'Curitiba, Paraná',
      languages: 'Idiomas',
      languagesV: 'Português nativo, inglês fluente (C1, Marista Idiomas)',
      cv: 'Currículo',
      cvLink: 'Baixar em PDF',
      cvSoon: 'PDF em preparação',
    },
    photoAlt: 'Foto de João Guilherme Matzenbacher',
    photoSoon: 'foto em breve',
    sections: { projects: 'Projetos', service: 'Serviço militar obrigatório', path: 'Trajetória', skills: 'Competências', courses: 'Cursos', contact: 'Contato' },
    service: {
      fields: [
        ['Unidade', '5º Batalhão de Suprimento'],
        ['Período', '1º de agosto de 2025 a 19 de julho de 2026'],
        ['Função', 'Controle de materiais e estoque em unidade logística'],
      ],
      duties: [
        'Recebimento, conferência, armazenamento e distribuição de itens.',
        'Controle de estoque: entradas e saídas, inventário e conferência de saldos.',
        'Registro no físico e no sistema, com planilhas de Excel e os sistemas da unidade.',
      ],
      bridgeTitle: 'Do quartel para a faculdade',
      bridge: 'No batalhão, a escala de serviço era montada em planilha. Levei esse problema real para a PUCPR, onde ele virou o projeto SmartScale, com o produto MilScale.',
      bridgeLink: 'Ver o projeto MilScale',
    },
    sheet: { kicker: 'Visão rápida, resumo em uma folha', copy: 'Copiar e-mail', copied: 'E-mail copiado', cv: 'Currículo em PDF', print: 'Imprimir ou PDF', code: 'Código', profile: 'Perfil' },
    entry: 'Ficha',
    rows: { mechanics: 'Mecânicas', tech: 'Tecnologias', context: 'Contexto' },
    openProject: 'Ver detalhes do projeto',
    scrollHint: 'Role para abrir a ficha',
    flow: 'Fluxo',
    skillsNote: 'Nível declarado no currículo.',
    contactLead: 'Respondo por e-mail. Se preferir, escreva direto pelo formulário.',
    form: {
      name: 'Nome', email: 'E-mail', message: 'Mensagem', send: 'Enviar mensagem',
      sending: 'Enviando…', sent: 'Mensagem enviada. Respondo pelo e-mail informado.',
      error: 'A mensagem não foi enviada. Tente de novo ou escreva para',
      notReady: 'O formulário ainda não está ativo. Escreva para',
    },
    footer: 'Feito por João Guilherme Matzenbacher.',
    back: 'Voltar para o início',
    repo: 'Código no GitHub',
    screens: 'Telas e artefatos',
    close: 'Fechar',
    enlarge: 'Ampliar imagem',
  },
  en: {
    skip: 'Skip to content',
    nav: { home: 'Home', projects: 'Projects', service: 'Military service', path: 'Path', skills: 'Skills', contact: 'Contact' },
    quick: 'Quick view',
    explore: 'Explore',
    modeLabel: 'Reading mode',
    pagerLabel: 'Section index',
    themeLabel: 'Toggle light and dark theme',
    otherLang: 'Português',
    otherLangShort: 'PT',
    cardUpdated: 'Profile card, updated October 2026',
    lead: 'Software Engineering student. I like to make a process clear before turning it into a system, and I am looking for an internship in development, processes, projects or product.',
    leadMore: 'I keep a spreadsheet for almost everything and like seeing things structured. That is how I took a real problem from the army base where I served to university, where it became the MilScale project.',
    fields: {
      education: 'Education',
      educationV: 'Software Engineering, PUCPR, 6th semester (expected graduation 12/2027)',
      location: 'Location',
      locationV: 'Curitiba, Paraná, Brazil',
      languages: 'Languages',
      languagesV: 'Portuguese (native), English (fluent, C1 at Marista Idiomas)',
      cv: 'Résumé',
      cvLink: 'Download PDF',
      cvSoon: 'PDF coming soon',
    },
    photoAlt: 'Photo of João Guilherme Matzenbacher',
    photoSoon: 'photo coming soon',
    sections: { projects: 'Projects', service: 'Mandatory military service', path: 'Path', skills: 'Skills', courses: 'Courses', contact: 'Contact' },
    service: {
      fields: [
        ['Unit', '5th Supply Battalion, Brazilian Army'],
        ['Period', 'August 1, 2025 to July 19, 2026'],
        ['Role', 'Material and stock control in a logistics unit'],
      ],
      duties: [
        'Receiving, checking, storing and distributing items.',
        'Stock control: inbound and outbound records, inventory and balance checks.',
        'Keeping the physical stock and the records in sync, using Excel spreadsheets and the unit’s systems.',
      ],
      bridgeTitle: 'From the base to university',
      bridge: 'At the battalion, the duty roster was built in a spreadsheet. I took that real problem to university, where it became the SmartScale project and its MilScale product.',
      bridgeLink: 'See the MilScale project',
    },
    sheet: { kicker: 'Quick view, a one-page summary', copy: 'Copy email', copied: 'Email copied', cv: 'Résumé (PDF)', print: 'Print or PDF', code: 'Code', profile: 'Profile' },
    entry: 'Entry',
    rows: { mechanics: 'Mechanics', tech: 'Technology', context: 'Context' },
    openProject: 'See project details',
    scrollHint: 'Scroll to open the card',
    flow: 'Flow',
    skillsNote: 'Level as stated in my résumé.',
    contactLead: 'I reply by email. You can also write straight from this form.',
    form: {
      name: 'Name', email: 'Email', message: 'Message', send: 'Send message',
      sending: 'Sending…', sent: 'Message sent. I will reply to the email you entered.',
      error: 'The message was not sent. Try again or write to',
      notReady: 'The form is not active yet. Write to',
    },
    footer: 'Made by João Guilherme Matzenbacher.',
    back: 'Back to home',
    repo: 'Code on GitHub',
    screens: 'Screens and artifacts',
    close: 'Close',
    enlarge: 'Enlarge image',
  },
} as const;

export const timeline = {
  pt: [
    { year: 2024, what: 'Cursos de Python com Pygame, C# e lógica de programação; Imersão Dev da Alura; PoliWeek' },
    { year: 2025, what: 'Tijucas Open, sistema de gestão de locações, da PUCPR para o cliente' },
    { year: 2025, what: 'Curso de segurança de redes da Cisco' },
    { year: 2025, what: 'Agosto de 2025 a julho de 2026: serviço militar no 5º Batalhão de Suprimento, no controle de materiais do quartel' },
    { year: 2026, what: 'SmartScale e MilScale, escalas de serviço geradas automaticamente' },
    { year: 2026, what: 'Katábasis, RPG em Godot com C#, projeto pessoal em desenvolvimento' },
  ],
  en: [
    { year: 2024, what: 'Courses in Python with Pygame, C# and programming logic; Alura’s Imersão Dev; PoliWeek' },
    { year: 2025, what: 'Tijucas Open, a lease management system, from university to a real client' },
    { year: 2025, what: 'Cisco network security course' },
    { year: 2025, what: 'August 2025 to July 2026: military service at the 5th Supply Battalion, handling the base’s material control' },
    { year: 2026, what: 'SmartScale and MilScale, automatically generated duty rosters' },
    { year: 2026, what: 'Katábasis, an RPG in Godot with C#, personal project in development' },
  ],
};

export const skills = {
  pt: [
    ['Python', 'intermediário', 2], ['HTML, CSS e JavaScript', 'intermediário', 2], ['Figma e web design', 'intermediário', 2],
    ['MySQL', 'intermediário', 2], ['Segurança de redes', 'intermediário', 2], ['C#', 'intermediário', 2],
  ],
  en: [
    ['Python', 'intermediate', 2], ['HTML, CSS and JavaScript', 'intermediate', 2], ['Figma and web design', 'intermediate', 2],
    ['MySQL', 'intermediate', 2], ['Network security', 'intermediate', 2], ['C#', 'intermediate', 2],
  ],
} as const;

export const courses = {
  pt: [
    ['Inglês, nível C1 do Quadro Europeu', 'Marista Idiomas', '720 h', '2022'],
    ['Imersão Dev', 'Alura', '4 h', '2024'],
    ['Python e Pygame', 'Udemy', '10,5 h', '2024'],
    ['C#, lógica de programação e algoritmos', 'Udemy', '7,5 h', '2024'],
    ['Segurança de rede', 'Cisco', '27 h', '2025'],
  ],
  en: [
    ['English, CEFR level C1', 'Marista Idiomas', '720 h', '2022'],
    ['Imersão Dev', 'Alura', '4 h', '2024'],
    ['Python and Pygame', 'Udemy', '10.5 h', '2024'],
    ['C#, programming logic and algorithms', 'Udemy', '7.5 h', '2024'],
    ['Network security', 'Cisco', '27 h', '2025'],
  ],
};

type Project = {
  key: 'smartscale' | 'katabasis' | 'tijucas';
  year: number;
  repo: string;
  tech: string[];
  title: string;
  summary: string;
  mechanicsShort: string;
  steps: string[];
  context: string;
  problem: string;
  mechanics: { title: string; text: string }[];
  architecture: string[];
};

export const projects: Record<Lang, Project[]> = {
  pt: [
    {
      key: 'smartscale', year: 2026, repo: 'https://github.com/Jgbr11/Sistema-SmartScale',
      tech: ['Java 21', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'Flyway', 'Docker'],
      title: 'SmartScale, com o produto MilScale',
      summary: 'Um núcleo reutilizável que monta escalas de serviço sozinho, respeitando folgas mínimas, afastamentos e pedidos de troca. O MilScale aplica esse núcleo à rotina de um batalhão.',
      mechanicsShort: 'Motor de rodízio, troca de serviço em três aprovações, rascunho e escala publicada',
      steps: ['Efetivo e regras', 'Escala gerada', 'Rascunho revisado', 'Escala publicada', 'Trocas aprovadas'],
      context: 'PUCPR, disciplina de reuso de software, em equipe',
      problem: 'No 5º Batalhão de Suprimento, a escala de serviço era montada em planilha. Manter a distribuição justa, respeitar folgas e refazer tudo quando alguém se afastava dava trabalho e abria espaço para erro. O projeto separou o que é comum a qualquer escala (o núcleo SmartScale) do que é específico do quartel (o produto MilScale), para que o mesmo núcleo sirva a outras organizações, como um hospital.',
      mechanics: [
        { title: 'Motor de rodízio', text: 'Ninguém assume dois postos no mesmo dia, há no mínimo três dias de folga entre serviços e quem está afastado fica de fora. A prioridade vai para quem está há mais tempo sem servir. Se faltar gente, só a folga mínima é relaxada.' },
        { title: 'Quem pode tirar cada serviço', text: 'Cada tipo de serviço define os postos e graduações, as subunidades e os cursos exigidos, e pode limitar quantas vezes a mesma pessoa serve no mês.' },
        { title: 'Troca de serviço', text: 'O militar pede a troca, o colega aceita, o Cabo analisa e o Sargenteante autoriza. Só escalas publicadas aceitam pedidos.' },
        { title: 'Rascunho e escala publicada', text: 'A escala nasce como rascunho, visível só para quem a monta. Dias podem ser travados à mão, e o dia vira imutável quando o serviço começa, às 8h.' },
        { title: 'Afastamento depois de publicar', text: 'Se alguém entra de licença depois da publicação, o sistema realoca só os serviços afetados, sem refazer o mês inteiro.' },
        { title: 'Perfis e privacidade', text: 'Quatro perfis de acesso, do Sargenteante ao militar que só vê a própria escala. CPF, nascimento e contatos aparecem só para a equipe ou para a própria pessoa, e o login bloqueia após cinco tentativas erradas.' },
      ],
      architecture: [
        'Monólito hexagonal (portas e adaptadores).',
        'O módulo smartscale-core não depende de Spring nem de JPA: guarda as interfaces genéricas e o motor de rodízio, e pode ser reaproveitado por outro produto.',
        'O produto MilScale consome o núcleo, com back-end em Spring Boot e front-end em React com TypeScript.',
        'Banco versionado com Flyway, testes com JUnit e Vitest, ambiente completo com Docker Compose.',
      ],
    },
    {
      key: 'katabasis', year: 2026, repo: 'https://github.com/jgmtz/Katabasis',
      tech: ['C#', '.NET 8', 'Godot 4', 'xUnit', 'JSON', 'Python'],
      title: 'Katábasis: O Rio do Esquecimento',
      summary: 'RPG de exploração e escolhas na mitologia greco-romana, feito em Godot com C#. Um vivo desce ao mundo dos mortos sem lembrar por quê, e cada memória recuperada vira habilidade e caminho.',
      mechanicsShort: 'Combate por turnos feito de gestos, memórias no lugar de XP, escolhas irreversíveis',
      steps: ['Explorar a região', 'Encontrar a sombra', 'Resolver pelo gesto', 'Lembrança no Mosaico', 'Escolha sem volta'],
      context: 'Projeto pessoal, individual, em desenvolvimento',
      problem: 'É um jogo em que quase tudo é conteúdo: sombras, falas, itens, regiões e missões, que dependem de muitos estados ao mesmo tempo (a Marca, a Maré, o Mosaico, as Memórias Pesadas, os juramentos). Combinações assim escondem bugs com facilidade. Por isso as regras ficam num núcleo em C# puro, testado sem abrir a engine, e o conteúdo fica em dados, para que uma fala ou uma sombra nova não exija programar.',
      mechanics: [
        { title: 'Combate por gestos', text: 'Cada ação é um pequeno gesto de atenção: Anel, Traço, Segurar, Arrastar e Esquiva. Errar não trava a luta: a ação sai mais fraca ou com uma consequência pequena.' },
        { title: 'Mais de um jeito de vencer', text: 'Dá para escutar a sombra até descobrir o nome dela e libertá-la, absorvê-la, poupar, presenciar ou fugir. Cada via custa e rende coisas diferentes.' },
        { title: 'Memórias no lugar de XP', text: 'As Lembranças formam um Mosaico romano que cresce conforme o protagonista lembra. Elas viram habilidades na luta e revelam caminhos na exploração.' },
        { title: 'Escolhas irreversíveis', text: 'A Marca dos Mortos, as Memórias Pesadas (encarar ou deixar sob o rio), os juramentos e o companheiro escolhido não voltam atrás.' },
        { title: 'O mundo muda com você', text: 'A Maré mede o tempo pelo progresso da história, nunca por relógio. O Perfil, que lê como você joga, muda mercadores, companheiros, personagens e o final.' },
        { title: 'Sem marcador de missão', text: 'O Diário é o único guia. As dicas de Hécate, nas encruzilhadas onde se salva e descansa, orientam sem decidir pelo jogador.' },
      ],
      architecture: [
        'Duas camadas: Lete.Core, com as regras em C# puro e sem dependência do Godot, e Lete.Game, com cenas, interface e entrada.',
        'Um único estado do mundo serializável: salvar é gravar esse estado. Os sistemas conversam por eventos, sem um conhecer o outro.',
        'Conteúdo em 173 arquivos JSON com uma pequena linguagem de condições, validados por testes; nenhum texto fixo no código, tudo por chaves de localização.',
        'Cerca de 300 testes de unidade com xUnit no núcleo, desenvolvimento em marcos (M0 a M5) e scripts em Python para pixelizar sprites e montar as regiões.',
        'A arte foi criada com ferramentas de IA e pixelizada pelos scripts do projeto; texto, narrativa, design e código são meus.',
      ],
    },
    {
      key: 'tijucas', year: 2025, repo: 'https://github.com/RafaelZeni/Tijucas-Open',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'Leaflet', 'FPDF/FPDI', 'OpenBoleto'],
      title: 'Tijucas Open',
      summary: 'Sistema de gestão de locação para o centro comercial Tijucas Open: cadastro de lojas e locatários, contrato gerado em PDF e doze boletos mensais criados junto com ele.',
      mechanicsShort: 'Contrato em PDF, boletos mensais, projeção de faturamento, mapa por piso, login em dois fatores',
      steps: ['Espaço disponível', 'Contrato em PDF', '12 boletos', 'Comprovantes', 'Contrato encerrado'],
      context: 'Começou na PUCPR e seguiu com o cliente, em equipe',
      problem: 'A administração do centro comercial precisava acompanhar quais espaços estavam livres, quem alugava cada um, os contratos e as cobranças. O projeto nasceu na PUCPR com levantamento de requisitos, user stories, backlog, UML e modelagem de banco, usando Scrum, e continuou fora da faculdade direto com o cliente. O sistema chegou a ser usado por um período em hospedagem de teste.',
      mechanics: [
        { title: 'Dois tipos de usuário', text: 'A administração cadastra lojas, espaços, locatários e contratos. O locatário vê os próprios contratos, emite boletos e envia comprovantes.' },
        { title: 'Contrato em um passo', text: 'Ao escolher locatário, espaço, modelo e data de início, o sistema preenche o modelo de contrato em PDF, gera doze boletos mensais a partir da data de início e marca o espaço como alugado.' },
        { title: 'Comprovantes', text: 'O locatário anexa o comprovante de cada boleto (PDF ou imagem de até 5 MB). Quando não sobra nenhum boleto pendente, o contrato é encerrado.' },
        { title: 'Projeção', text: 'Uma tabela de 24 meses mostra, mês a mês, quantos contratos estão ativos, quantos vencem e o faturamento previsto.' },
        { title: 'Mapa das lojas', text: 'Um mapa interativo mostra as lojas de cada piso, com troca entre os pisos.' },
        { title: 'Segurança', text: 'Senhas guardadas com hash, recuperação de senha e autenticação em dois fatores com aplicativo autenticador.' },
      ],
      architecture: [
        'PHP com Composer, sem framework, separado em área pública, área da administração e área do locatário.',
        'MySQL com procedures para operações como a criação de contrato.',
        'Bibliotecas: FPDI para preencher o PDF, OpenBoleto para os boletos, Leaflet para o mapa e Bootstrap na interface.',
      ],
    },
  ],
  en: [
    {
      key: 'smartscale', year: 2026, repo: 'https://github.com/Jgbr11/Sistema-SmartScale',
      tech: ['Java 21', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'Flyway', 'Docker'],
      title: 'SmartScale, with the MilScale product',
      summary: 'A reusable core that builds duty rosters on its own, respecting minimum rest, leave and swap requests. MilScale applies that core to the routine of an army battalion.',
      mechanicsShort: 'Rotation engine, three-step shift swaps, draft and published rosters',
      steps: ['Personnel and rules', 'Roster generated', 'Draft reviewed', 'Roster published', 'Swaps approved'],
      context: 'PUCPR, software reuse course, team project',
      problem: 'At the 5th Supply Battalion, the duty roster was built in a spreadsheet. Keeping it fair, respecting rest days and redoing everything when someone went on leave took effort and invited mistakes. The project separated what every roster has in common (the SmartScale core) from what is specific to the base (the MilScale product), so the same core can serve other organizations, such as a hospital.',
      mechanics: [
        { title: 'Rotation engine', text: 'Nobody takes two posts on the same day, there are at least three days off between duties, and anyone on leave is left out. Priority goes to whoever has gone longest without duty. If there are not enough people, only the rest interval is relaxed.' },
        { title: 'Who can take each duty', text: 'Each duty type sets the allowed ranks, subunits and required courses, and can cap how often the same person serves in a month.' },
        { title: 'Shift swaps', text: 'A soldier requests a swap, the colleague accepts, the corporal reviews and the sergeant authorizes. Only published rosters accept requests.' },
        { title: 'Draft and published roster', text: 'A roster starts as a draft that only staff can see. Days can be locked by hand, and a day becomes immutable once the duty starts at 8 a.m.' },
        { title: 'Leave after publishing', text: 'If someone goes on leave after the roster is published, the system reassigns only the affected duties instead of rebuilding the month.' },
        { title: 'Roles and privacy', text: 'Four access roles, from the sergeant to a soldier who only sees their own schedule. Personal data is visible only to staff or the person, and login locks after five failed attempts.' },
      ],
      architecture: [
        'Hexagonal monolith (ports and adapters).',
        'The smartscale-core module has no Spring or JPA dependency: it holds the generic interfaces and the rotation engine, ready to be reused by another product.',
        'The MilScale product consumes the core, with a Spring Boot back end and a React and TypeScript front end.',
        'Database versioned with Flyway, tests with JUnit and Vitest, full environment with Docker Compose.',
      ],
    },
    {
      key: 'katabasis', year: 2026, repo: 'https://github.com/jgmtz/Katabasis',
      tech: ['C#', '.NET 8', 'Godot 4', 'xUnit', 'JSON', 'Python'],
      title: 'Katábasis: The River of Forgetting',
      summary: 'An exploration and choice-driven RPG set in Greco-Roman myth, built in Godot with C#. A living person descends to the underworld without remembering why, and each memory recovered becomes an ability and a path.',
      mechanicsShort: 'Turn-based combat made of gestures, memories instead of XP, irreversible choices',
      steps: ['Explore the region', 'Meet the shade', 'Resolve by gesture', 'Memory in the Mosaic', 'No-return choice'],
      context: 'Personal solo project, in development',
      problem: 'Almost everything in this game is content: shades, dialogue, items, regions and quests, all depending on many states at once (the Mark, the Tide, the Mosaic, Heavy Memories, oaths). Combinations like that hide bugs easily. So the rules live in a plain C# core, tested without opening the engine, and the content lives in data, so a new line of dialogue or a new shade needs no programming.',
      mechanics: [
        { title: 'Combat by gestures', text: 'Every action is a small gesture of attention: Ring, Stroke, Hold, Drag and Dodge. Missing never locks the fight: the action just lands weaker or with a small consequence.' },
        { title: 'More than one way to win', text: 'You can listen to a shade until you learn its name and set it free, absorb it, spare it, bear witness or flee. Each path costs and rewards something different.' },
        { title: 'Memories instead of XP', text: 'Recollections form a Roman mosaic that grows as the protagonist remembers. They become combat abilities and reveal paths while exploring.' },
        { title: 'Irreversible choices', text: 'The Mark of the Dead, the Heavy Memories (face them or leave them under the river), oaths and the chosen companion cannot be undone.' },
        { title: 'The world changes with you', text: 'The Tide measures time by story progress, never by a clock. The Profile, which reads how you play, changes merchants, companions, characters and the ending.' },
        { title: 'No quest markers', text: 'The Journal is the only guide. Hints from Hecate, at the crossroads where you save and rest, point the way without deciding for the player.' },
      ],
      architecture: [
        'Two layers: Lete.Core, with the rules in plain C# and no Godot dependency, and Lete.Game, with scenes, UI and input.',
        'A single serializable world state: saving means writing that state. Systems talk through events without knowing each other.',
        'Content in 173 JSON files with a small condition language, validated by tests; no hard-coded text, everything goes through localization keys.',
        'About 300 xUnit unit tests on the core, development in milestones (M0 to M5) and Python scripts to pixelate sprites and block out regions.',
        'The art was made with AI tools and pixelated by the project scripts; the writing, narrative, design and code are mine.',
      ],
    },
    {
      key: 'tijucas', year: 2025, repo: 'https://github.com/RafaelZeni/Tijucas-Open',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'Leaflet', 'FPDF/FPDI', 'OpenBoleto'],
      title: 'Tijucas Open',
      summary: 'Lease management system for the Tijucas Open shopping center: stores and tenants, a PDF contract and twelve monthly payment slips created together with it.',
      mechanicsShort: 'PDF contracts, monthly payment slips, revenue projection, floor map, two-factor login',
      steps: ['Space available', 'PDF contract', '12 payment slips', 'Receipts', 'Contract closed'],
      context: 'Started at PUCPR and continued with the client, team project',
      problem: 'The shopping center’s management needed to track which spaces were free, who rented each one, the contracts and the payments. The project started at PUCPR with requirements gathering, user stories, backlog, UML and database modeling, using Scrum, and continued outside university directly with the client. The system was used for a period on trial hosting.',
      mechanics: [
        { title: 'Two kinds of user', text: 'Management registers stores, spaces, tenants and contracts. Tenants see their own contracts, issue payment slips and upload receipts.' },
        { title: 'Contract in one step', text: 'After picking a tenant, space, template and start date, the system fills in the PDF contract template, creates twelve monthly payment slips from the start date and marks the space as rented.' },
        { title: 'Receipts', text: 'Tenants attach a receipt for each slip (PDF or image up to 5 MB). When no slip is left pending, the contract is closed.' },
        { title: 'Projection', text: 'A 24-month table shows, month by month, how many contracts are active, how many expire and the expected revenue.' },
        { title: 'Store map', text: 'An interactive map shows the stores on each floor, with a switch between floors.' },
        { title: 'Security', text: 'Hashed passwords, password recovery and two-factor authentication with an authenticator app.' },
      ],
      architecture: [
        'Plain PHP with Composer, split into a public area, a management area and a tenant area.',
        'MySQL with stored procedures for operations such as creating a contract.',
        'Libraries: FPDI to fill in the PDF, OpenBoleto for payment slips, Leaflet for the map and Bootstrap for the interface.',
      ],
    },
  ],
};
