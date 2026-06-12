/* ------------------------------------------------------------------
   Privacy Policy content, keyed by language.

   IMPORTANT: This is a GDPR-shaped TEMPLATE. Because this campaign
   collects personal data for the purpose of potential legal action,
   have a qualified EU data-protection lawyer review and finalise this
   text — and replace every [BRACKETED] placeholder — before collecting
   any real personal data.

   The English version is authoritative; see the governing-language note.
   ------------------------------------------------------------------ */

const ORG = '[ORGANISATION / CAMPAIGN LEGAL NAME]'
const ADDRESS = '[REGISTERED POSTAL ADDRESS, EU]'
const EMAIL = 'privacy@honoryourcommitment.com'
const DPO_EMAIL = 'dpo@honoryourcommitment.com'

export const PRIVACY = {
  en: {
    updated: 'Last updated: 12 June 2026',
    templateNote:
      'This is a template pending review by a qualified data-protection lawyer. Bracketed items are placeholders to be completed before launch.',
    governingNote:
      'This policy is published in English, Portuguese, Chinese, and Spanish. In the event of any conflict, the English version prevails.',
    intro:
      'This Privacy Policy explains how we collect, use, store, and protect your personal data when you use this website and choose to sign the petition, register your case, or join the legal action. We are committed to handling your data lawfully, fairly, and transparently, in accordance with the EU General Data Protection Regulation (GDPR) and applicable national law.',
    sections: [
      {
        heading: '1. Who we are (Data Controller)',
        body: [
          `The data controller responsible for your personal data is ${ORG}, ${ADDRESS}.`,
          `You can contact us about privacy matters at ${EMAIL}. Where a Data Protection Officer has been appointed, they can be reached at ${DPO_EMAIL}.`,
        ],
      },
      {
        heading: '2. What personal data we collect',
        body: [
          'We only collect the data you choose to provide through our forms. Depending on the action you take, this may include:',
        ],
        list: [
          'Identity and contact details: name, email address, and (optionally) telephone number.',
          'Nationality and country of residence.',
          'Case details: year of application, type and amount of investment, number of family members included, and current application status.',
          'Your story: any free-text account you choose to share about how the delays have affected you.',
          'Consent records: the choices you make on our forms and the time they were given.',
          'Limited technical data strictly necessary to operate the site securely (for example, server logs).',
        ],
      },
      {
        heading: '3. Why we use your data and our legal basis',
        body: ['We use your personal data for the following purposes:'],
        list: [
          'To record and present petition signatures to the relevant authorities — legal basis: your consent.',
          'To build and maintain an evidence base of affected cases — legal basis: your consent.',
          'To compile aggregated, anonymized statistics on the human and economic impact — legal basis: our legitimate interest in advocacy, using data you consented to provide.',
          'To register potential claimants and provide updates on possible legal action — legal basis: your consent and, where proceedings advance, the establishment, exercise, or defence of legal claims.',
          'To contact you with campaign updates where you have asked us to — legal basis: your consent.',
        ],
      },
      {
        heading: '4. Consent and how to withdraw it',
        body: [
          'Where we rely on your consent, you give it by actively ticking the relevant box on our forms. Consent is never pre-ticked or assumed.',
          'You can withdraw your consent at any time by contacting us at the address above. Withdrawing consent does not affect the lawfulness of processing carried out before withdrawal. On withdrawal, we will stop the relevant processing and, unless we are required to retain certain data to establish or defend a legal claim, delete it.',
        ],
      },
      {
        heading: '5. Who we share your data with',
        body: [
          'We do not sell your personal data. We may share it only with:',
        ],
        list: [
          'Legal counsel engaged in connection with potential legal action, where you have joined the legal action.',
          'Service providers who process data on our behalf under a written data-processing agreement (for example, EU-based hosting).',
          'Public authorities and courts, where the petition or claim is formally presented, or where we are legally required to do so. Petition signatures are presented in the form you consented to (for example, name only if you opted to appear publicly).',
        ],
      },
      {
        heading: '6. Where your data is stored',
        body: [
          'Your personal data is hosted on servers located within the European Union and is not transferred outside the EU/EEA, except where strictly necessary and subject to appropriate safeguards required by the GDPR. We choose our infrastructure providers with data protection and EU data residency in mind.',
        ],
      },
      {
        heading: '7. How long we keep your data',
        body: [
          'We keep your personal data only for as long as necessary for the purposes set out above: for the duration of the campaign and any related legal action, plus any period required by law. When data is no longer needed, we securely delete or irreversibly anonymize it. Aggregated, anonymized statistics that no longer identify you may be retained indefinitely.',
        ],
      },
      {
        heading: '8. How we protect your data',
        body: [
          'We apply appropriate technical and organizational measures to protect your data, including encryption in transit, access controls, and secure EU-based hosting. No system is perfectly secure, but we work to protect your information and to notify you and the relevant authority of any breach where required by law.',
        ],
      },
      {
        heading: '9. Your rights under the GDPR',
        body: ['Subject to the conditions in the GDPR, you have the right to:'],
        list: [
          'Access the personal data we hold about you.',
          'Rectify inaccurate or incomplete data.',
          'Erase your data (the "right to be forgotten").',
          'Restrict or object to our processing.',
          'Data portability — receive your data in a structured, machine-readable format.',
          'Withdraw consent at any time.',
          'Lodge a complaint with a supervisory authority.',
        ],
      },
      {
        heading: '10. Cookies and local storage',
        body: [
          'We do not use advertising or tracking cookies. The site stores your chosen language preference in your browser’s local storage purely so the site works as you expect; this is not used to track you and is not shared.',
        ],
      },
      {
        heading: '11. Children',
        body: [
          'This website is not directed at children. We do not knowingly collect personal data from children except as part of a family case submitted by a responsible adult, who is responsible for the information provided about minors.',
        ],
      },
      {
        heading: '12. Changes to this policy',
        body: [
          'We may update this policy from time to time. We will post the updated version here and revise the “last updated” date. Material changes will be communicated where appropriate.',
        ],
      },
      {
        heading: '13. How to contact us and complaints',
        body: [
          `For any privacy request or question, contact us at ${EMAIL}.`,
          'If you are in Portugal, you may lodge a complaint with the Comissão Nacional de Proteção de Dados (CNPD). If you are elsewhere in the EU/EEA, you may contact your local data protection authority.',
        ],
      },
    ],
  },

  pt: {
    updated: 'Última atualização: 12 de junho de 2026',
    templateNote:
      'Este é um modelo pendente de revisão por um advogado especializado em proteção de dados. Os itens entre parênteses retos são marcadores a preencher antes do lançamento.',
    governingNote:
      'Esta política é publicada em inglês, português, chinês e espanhol. Em caso de conflito, prevalece a versão inglesa.',
    intro:
      'Esta Política de Privacidade explica como recolhemos, usamos, armazenamos e protegemos os seus dados pessoais quando utiliza este site e opta por assinar a petição, registar o seu caso ou aderir à ação legal. Comprometemo-nos a tratar os seus dados de forma lícita, leal e transparente, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) da UE e a legislação nacional aplicável.',
    sections: [
      {
        heading: '1. Quem somos (Responsável pelo Tratamento)',
        body: [
          `O responsável pelo tratamento dos seus dados pessoais é ${ORG}, ${ADDRESS}.`,
          `Pode contactar-nos sobre questões de privacidade através de ${EMAIL}. Caso tenha sido nomeado um Encarregado de Proteção de Dados, pode ser contactado em ${DPO_EMAIL}.`,
        ],
      },
      {
        heading: '2. Que dados pessoais recolhemos',
        body: [
          'Recolhemos apenas os dados que opta por fornecer através dos nossos formulários. Consoante a ação que realiza, podem incluir:',
        ],
        list: [
          'Identificação e contactos: nome, endereço de email e (opcionalmente) número de telefone.',
          'Nacionalidade e país de residência.',
          'Detalhes do caso: ano do pedido, tipo e montante do investimento, número de familiares incluídos e estado atual do pedido.',
          'A sua história: qualquer relato em texto livre que opte por partilhar sobre como os atrasos o afetaram.',
          'Registos de consentimento: as escolhas que faz nos formulários e o momento em que foram dadas.',
          'Dados técnicos limitados, estritamente necessários para operar o site de forma segura (por exemplo, registos do servidor).',
        ],
      },
      {
        heading: '3. Porque usamos os seus dados e o nosso fundamento legal',
        body: ['Usamos os seus dados pessoais para os seguintes fins:'],
        list: [
          'Registar e apresentar assinaturas da petição às autoridades competentes — fundamento: o seu consentimento.',
          'Construir e manter uma base de provas dos casos afetados — fundamento: o seu consentimento.',
          'Compilar estatísticas agregadas e anonimizadas sobre o impacto humano e económico — fundamento: o nosso interesse legítimo na defesa da causa, usando dados que consentiu fornecer.',
          'Registar potenciais requerentes e fornecer atualizações sobre eventual ação legal — fundamento: o seu consentimento e, quando o processo avance, a constituição, exercício ou defesa de direitos.',
          'Contactá-lo com atualizações da campanha quando o solicitou — fundamento: o seu consentimento.',
        ],
      },
      {
        heading: '4. Consentimento e como retirá-lo',
        body: [
          'Quando nos baseamos no seu consentimento, dá-o ao assinalar ativamente a caixa relevante nos nossos formulários. O consentimento nunca é pré-assinalado nem presumido.',
          'Pode retirar o seu consentimento a qualquer momento contactando-nos para o endereço acima. A retirada não afeta a licitude do tratamento realizado antes da mesma. Após a retirada, cessaremos o tratamento e, salvo se tivermos de conservar certos dados para constituir ou defender um direito, eliminá-los-emos.',
        ],
      },
      {
        heading: '5. Com quem partilhamos os seus dados',
        body: ['Não vendemos os seus dados pessoais. Podemos partilhá-los apenas com:'],
        list: [
          'Assessoria jurídica envolvida na eventual ação legal, caso tenha aderido à ação legal.',
          'Prestadores de serviços que tratam dados por nossa conta ao abrigo de um contrato escrito de tratamento de dados (por exemplo, alojamento na UE).',
          'Autoridades públicas e tribunais, quando a petição ou reclamação é formalmente apresentada, ou quando exigido por lei. As assinaturas são apresentadas na forma que consentiu (por exemplo, apenas o nome, se optou por aparecer publicamente).',
        ],
      },
      {
        heading: '6. Onde os seus dados são armazenados',
        body: [
          'Os seus dados pessoais são alojados em servidores localizados na União Europeia e não são transferidos para fora da UE/EEE, exceto quando estritamente necessário e sujeito às garantias adequadas exigidas pelo RGPD. Escolhemos os nossos fornecedores de infraestrutura tendo em conta a proteção de dados e a residência dos dados na UE.',
        ],
      },
      {
        heading: '7. Durante quanto tempo conservamos os seus dados',
        body: [
          'Conservamos os seus dados pessoais apenas pelo tempo necessário para os fins indicados: durante a campanha e qualquer ação legal relacionada, mais o período exigido por lei. Quando deixam de ser necessários, eliminamo-los de forma segura ou anonimizamo-los irreversivelmente. Estatísticas agregadas e anonimizadas que já não o identifiquem podem ser conservadas indefinidamente.',
        ],
      },
      {
        heading: '8. Como protegemos os seus dados',
        body: [
          'Aplicamos medidas técnicas e organizativas adequadas para proteger os seus dados, incluindo cifragem em trânsito, controlos de acesso e alojamento seguro na UE. Nenhum sistema é perfeitamente seguro, mas trabalhamos para proteger as suas informações e notificá-lo a si e à autoridade competente de qualquer violação, quando exigido por lei.',
        ],
      },
      {
        heading: '9. Os seus direitos ao abrigo do RGPD',
        body: ['Nos termos do RGPD, tem o direito de:'],
        list: [
          'Aceder aos dados pessoais que detemos sobre si.',
          'Retificar dados incorretos ou incompletos.',
          'Apagar os seus dados (o «direito a ser esquecido»).',
          'Limitar ou opor-se ao tratamento.',
          'Portabilidade dos dados — recebê-los num formato estruturado e legível por máquina.',
          'Retirar o consentimento a qualquer momento.',
          'Apresentar uma reclamação a uma autoridade de controlo.',
        ],
      },
      {
        heading: '10. Cookies e armazenamento local',
        body: [
          'Não utilizamos cookies de publicidade ou de rastreio. O site guarda a sua preferência de idioma no armazenamento local do navegador apenas para funcionar como espera; isto não é usado para o rastrear nem é partilhado.',
        ],
      },
      {
        heading: '11. Crianças',
        body: [
          'Este site não se destina a crianças. Não recolhemos conscientemente dados de crianças, exceto no âmbito de um caso familiar submetido por um adulto responsável, que é responsável pelas informações fornecidas sobre menores.',
        ],
      },
      {
        heading: '12. Alterações a esta política',
        body: [
          'Podemos atualizar esta política periodicamente. Publicaremos aqui a versão atualizada e reveremos a data de «última atualização». Alterações materiais serão comunicadas quando apropriado.',
        ],
      },
      {
        heading: '13. Como contactar-nos e reclamações',
        body: [
          `Para qualquer pedido ou questão de privacidade, contacte-nos em ${EMAIL}.`,
          'Se estiver em Portugal, pode apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD). Se estiver noutro local da UE/EEE, pode contactar a sua autoridade de proteção de dados local.',
        ],
      },
    ],
  },

  es: {
    updated: 'Última actualización: 12 de junio de 2026',
    templateNote:
      'Esta es una plantilla pendiente de revisión por un abogado especializado en protección de datos. Los elementos entre corchetes son marcadores que deben completarse antes del lanzamiento.',
    governingNote:
      'Esta política se publica en inglés, portugués, chino y español. En caso de conflicto, prevalece la versión inglesa.',
    intro:
      'Esta Política de Privacidad explica cómo recogemos, usamos, almacenamos y protegemos sus datos personales cuando utiliza este sitio y decide firmar la petición, registrar su caso o unirse a la acción legal. Nos comprometemos a tratar sus datos de forma lícita, leal y transparente, conforme al Reglamento General de Protección de Datos (RGPD) de la UE y a la legislación nacional aplicable.',
    sections: [
      {
        heading: '1. Quiénes somos (Responsable del Tratamiento)',
        body: [
          `El responsable del tratamiento de sus datos personales es ${ORG}, ${ADDRESS}.`,
          `Puede contactarnos sobre cuestiones de privacidad en ${EMAIL}. Cuando se haya nombrado un Delegado de Protección de Datos, puede contactarle en ${DPO_EMAIL}.`,
        ],
      },
      {
        heading: '2. Qué datos personales recogemos',
        body: [
          'Solo recogemos los datos que usted decide facilitar a través de nuestros formularios. Según la acción que realice, pueden incluir:',
        ],
        list: [
          'Identidad y contacto: nombre, correo electrónico y (opcionalmente) número de teléfono.',
          'Nacionalidad y país de residencia.',
          'Detalles del caso: año de solicitud, tipo e importe de la inversión, número de familiares incluidos y estado actual de la solicitud.',
          'Su historia: cualquier relato en texto libre que decida compartir sobre cómo le han afectado los retrasos.',
          'Registros de consentimiento: las opciones que marca en los formularios y el momento en que se otorgaron.',
          'Datos técnicos limitados, estrictamente necesarios para operar el sitio de forma segura (por ejemplo, registros del servidor).',
        ],
      },
      {
        heading: '3. Por qué usamos sus datos y nuestra base jurídica',
        body: ['Usamos sus datos personales para los siguientes fines:'],
        list: [
          'Registrar y presentar las firmas de la petición a las autoridades competentes — base: su consentimiento.',
          'Construir y mantener una base probatoria de los casos afectados — base: su consentimiento.',
          'Elaborar estadísticas agregadas y anonimizadas sobre el impacto humano y económico — base: nuestro interés legítimo en la defensa de la causa, usando datos que consintió facilitar.',
          'Registrar a posibles demandantes y proporcionar actualizaciones sobre una eventual acción legal — base: su consentimiento y, cuando el procedimiento avance, el ejercicio o la defensa de reclamaciones.',
          'Contactarle con actualizaciones de la campaña cuando lo haya solicitado — base: su consentimiento.',
        ],
      },
      {
        heading: '4. Consentimiento y cómo retirarlo',
        body: [
          'Cuando nos basamos en su consentimiento, usted lo otorga marcando activamente la casilla correspondiente en nuestros formularios. El consentimiento nunca está premarcado ni se presume.',
          'Puede retirar su consentimiento en cualquier momento contactándonos en la dirección indicada. La retirada no afecta a la licitud del tratamiento previo. Tras la retirada, cesaremos el tratamiento y, salvo que debamos conservar ciertos datos para ejercer o defender una reclamación, los eliminaremos.',
        ],
      },
      {
        heading: '5. Con quién compartimos sus datos',
        body: ['No vendemos sus datos personales. Solo podemos compartirlos con:'],
        list: [
          'Asesoría jurídica implicada en la eventual acción legal, si se ha unido a la acción legal.',
          'Proveedores de servicios que tratan datos por nuestra cuenta bajo un contrato escrito de tratamiento de datos (por ejemplo, alojamiento en la UE).',
          'Autoridades públicas y tribunales, cuando la petición o reclamación se presenta formalmente, o cuando la ley lo exige. Las firmas se presentan en la forma que consintió (por ejemplo, solo el nombre si optó por aparecer públicamente).',
        ],
      },
      {
        heading: '6. Dónde se almacenan sus datos',
        body: [
          'Sus datos personales se alojan en servidores ubicados en la Unión Europea y no se transfieren fuera de la UE/EEE, salvo cuando sea estrictamente necesario y con las garantías adecuadas exigidas por el RGPD. Elegimos a nuestros proveedores de infraestructura teniendo en cuenta la protección de datos y la residencia de datos en la UE.',
        ],
      },
      {
        heading: '7. Cuánto tiempo conservamos sus datos',
        body: [
          'Conservamos sus datos personales solo durante el tiempo necesario para los fines indicados: la duración de la campaña y de cualquier acción legal relacionada, más el periodo exigido por ley. Cuando ya no son necesarios, los eliminamos de forma segura o los anonimizamos irreversiblemente. Las estadísticas agregadas y anonimizadas que ya no le identifican pueden conservarse indefinidamente.',
        ],
      },
      {
        heading: '8. Cómo protegemos sus datos',
        body: [
          'Aplicamos medidas técnicas y organizativas adecuadas para proteger sus datos, incluido el cifrado en tránsito, controles de acceso y alojamiento seguro en la UE. Ningún sistema es perfectamente seguro, pero trabajamos para proteger su información y notificarle a usted y a la autoridad competente cualquier violación cuando la ley lo exija.',
        ],
      },
      {
        heading: '9. Sus derechos en virtud del RGPD',
        body: ['Con arreglo al RGPD, tiene derecho a:'],
        list: [
          'Acceder a los datos personales que tenemos sobre usted.',
          'Rectificar datos inexactos o incompletos.',
          'Suprimir sus datos (el «derecho al olvido»).',
          'Limitar u oponerse al tratamiento.',
          'Portabilidad de los datos — recibirlos en un formato estructurado y legible por máquina.',
          'Retirar el consentimiento en cualquier momento.',
          'Presentar una reclamación ante una autoridad de control.',
        ],
      },
      {
        heading: '10. Cookies y almacenamiento local',
        body: [
          'No utilizamos cookies de publicidad ni de seguimiento. El sitio guarda su preferencia de idioma en el almacenamiento local del navegador únicamente para funcionar como espera; no se usa para rastrearle ni se comparte.',
        ],
      },
      {
        heading: '11. Menores',
        body: [
          'Este sitio no está dirigido a menores. No recogemos conscientemente datos de menores, salvo como parte de un caso familiar presentado por un adulto responsable, que es responsable de la información facilitada sobre los menores.',
        ],
      },
      {
        heading: '12. Cambios en esta política',
        body: [
          'Podemos actualizar esta política periódicamente. Publicaremos aquí la versión actualizada y revisaremos la fecha de «última actualización». Los cambios sustanciales se comunicarán cuando proceda.',
        ],
      },
      {
        heading: '13. Cómo contactarnos y reclamaciones',
        body: [
          `Para cualquier solicitud o consulta de privacidad, contáctenos en ${EMAIL}.`,
          'Si se encuentra en Portugal, puede presentar una reclamación ante la Comissão Nacional de Proteção de Dados (CNPD). Si se encuentra en otro lugar de la UE/EEE, puede contactar con su autoridad local de protección de datos.',
        ],
      },
    ],
  },

  zh: {
    updated: '最后更新：2026 年 6 月 12 日',
    templateNote:
      '这是一份待合格数据保护律师审核的模板。方括号内的项目为占位符，须在上线前填写完整。',
    governingNote:
      '本政策以英文、葡萄牙文、中文和西班牙文发布。如有冲突，以英文版本为准。',
    intro:
      '本隐私政策说明当您使用本网站并选择签署请愿、登记案例或加入法律行动时，我们如何收集、使用、存储和保护您的个人数据。我们承诺依照欧盟《通用数据保护条例》（GDPR）及适用的国家法律，合法、公平、透明地处理您的数据。',
    sections: [
      {
        heading: '1. 我们是谁（数据控制者）',
        body: [
          `负责处理您个人数据的数据控制者为 ${ORG}，${ADDRESS}。`,
          `有关隐私事宜，您可通过 ${EMAIL} 联系我们。如已任命数据保护官，可通过 ${DPO_EMAIL} 联系。`,
        ],
      },
      {
        heading: '2. 我们收集哪些个人数据',
        body: ['我们仅收集您通过表单选择提供的数据。视您采取的操作而定，可能包括：'],
        list: [
          '身份与联系信息：姓名、电子邮箱及（可选）电话号码。',
          '国籍与居住国。',
          '案例详情：申请年份、投资类型与金额、申请中包含的家庭成员人数及当前申请状态。',
          '您的故事：您选择分享的、关于延误如何影响您的任何自由文本叙述。',
          '同意记录：您在表单上做出的选择及其时间。',
          '为安全运营网站所严格必需的有限技术数据（例如服务器日志）。',
        ],
      },
      {
        heading: '3. 我们为何使用您的数据及法律依据',
        body: ['我们出于以下目的使用您的个人数据：'],
        list: [
          '记录请愿签名并向相关主管部门递交——法律依据：您的同意。',
          '建立并维护受影响案例的证据库——法律依据：您的同意。',
          '汇编关于人员与经济影响的汇总匿名统计——法律依据：我们在倡导方面的合法利益，使用您同意提供的数据。',
          '登记潜在索赔人并提供有关可能法律行动的更新——法律依据：您的同意，以及在程序推进时，法律主张的建立、行使或抗辩。',
          '在您要求时向您发送活动更新——法律依据：您的同意。',
        ],
      },
      {
        heading: '4. 同意及如何撤回',
        body: [
          '在我们依赖您同意的情况下，您通过主动勾选表单上的相关复选框来给予同意。同意绝不会被预先勾选或推定。',
          '您可随时通过上述地址联系我们撤回同意。撤回不影响撤回前处理的合法性。撤回后，我们将停止相关处理；除非为建立或抗辩法律主张而须保留某些数据，否则将予以删除。',
        ],
      },
      {
        heading: '5. 我们与谁共享您的数据',
        body: ['我们不出售您的个人数据。我们仅可能与以下方共享：'],
        list: [
          '在您加入法律行动的情况下，就潜在法律行动聘请的法律顾问。',
          '依据书面数据处理协议代表我们处理数据的服务提供商（例如位于欧盟的托管服务）。',
          '在请愿或主张正式提交时，或在法律要求时的公共主管部门和法院。签名将按您同意的形式提交（例如，若您选择公开显示，则仅显示姓名）。',
        ],
      },
      {
        heading: '6. 您的数据存储于何处',
        body: [
          '您的个人数据托管于位于欧盟境内的服务器，且不会转移至欧盟/欧洲经济区之外，除非严格必要并采取 GDPR 所要求的适当保障措施。我们在选择基础设施提供商时，会考虑数据保护与欧盟数据驻留。',
        ],
      },
      {
        heading: '7. 我们保留您的数据多久',
        body: [
          '我们仅在为上述目的所必需的期间保留您的个人数据：即活动及任何相关法律行动的持续期间，加上法律要求的任何期限。当数据不再需要时，我们将安全删除或不可逆地匿名化。已不再能识别您身份的汇总匿名统计可无限期保留。',
        ],
      },
      {
        heading: '8. 我们如何保护您的数据',
        body: [
          '我们采取适当的技术与组织措施保护您的数据，包括传输加密、访问控制及位于欧盟的安全托管。没有任何系统是绝对安全的，但我们致力于保护您的信息，并在法律要求时向您及相关主管部门通报任何数据泄露。',
        ],
      },
      {
        heading: '9. 您在 GDPR 下的权利',
        body: ['在符合 GDPR 条件的前提下，您有权：'],
        list: [
          '访问我们持有的您的个人数据。',
          '更正不准确或不完整的数据。',
          '删除您的数据（"被遗忘权"）。',
          '限制或反对我们的处理。',
          '数据可携——以结构化、机器可读的格式接收您的数据。',
          '随时撤回同意。',
          '向监管机构提出投诉。',
        ],
      },
      {
        heading: '10. Cookie 与本地存储',
        body: [
          '我们不使用广告或追踪 Cookie。本网站仅将您选择的语言偏好存储在浏览器的本地存储中，纯粹为使网站按您预期运行；此项不用于追踪您，也不会被共享。',
        ],
      },
      {
        heading: '11. 儿童',
        body: [
          '本网站不面向儿童。除作为由负责任的成年人提交的家庭案例的一部分外，我们不会有意收集儿童的个人数据；该成年人对所提供的未成年人信息负责。',
        ],
      },
      {
        heading: '12. 本政策的变更',
        body: [
          '我们可能会不时更新本政策。我们将在此发布更新版本并修订"最后更新"日期。重大变更将在适当情况下予以告知。',
        ],
      },
      {
        heading: '13. 如何联系我们及投诉',
        body: [
          `如有任何隐私请求或问题，请通过 ${EMAIL} 联系我们。`,
          '如果您在葡萄牙，可向国家数据保护委员会（CNPD）提出投诉。如果您在欧盟/欧洲经济区的其他地方，可联系您当地的数据保护机构。',
        ],
      },
    ],
  },
}
