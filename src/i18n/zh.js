// 中文 (Simplified Chinese)
export default {
  meta: { name: '中文', dir: 'ltr' },

  brand: {
    name: '葡萄牙必须信守承诺',
    short: '信守承诺',
  },

  nav: {
    home: '首页',
    petition: '请愿',
    register: '登记您的案例',
    impact: '经济影响',
    legal: '法律行动',
    media: '媒体中心',
    openLetter: '公开信',
    privacy: '隐私政策',
  },

  cta: {
    sign: '签署请愿',
    register: '登记您的案例',
    join: '加入法律行动',
    signShort: '签署',
    readMore: '阅读更多',
    learnMore: '了解更多',
    viewAll: '查看全部',
  },

  actionsBanner: {
    title: '立即行动',
    subtitle: '每个页面都引导您采取三项行动中的一项或多项。',
  },

  stats: {
    title: '迄今为止的进展',
    signatures: '已收集签名',
    cases: '已登记案例',
    countries: '涉及国家',
    years: '累计等待年数',
    capital: '投资总额',
    updated: '随着新签名和案例的登记，数据将持续更新。',
  },

  home: {
    hero: {
      eyebrow: '一场争取法律确定性的运动',
      headline: '葡萄牙必须信守承诺',
      subhead:
        '数千名投资者和居留申请人遵守了葡萄牙的规则，进行了合格投资，缴纳了政府费用，并满足了所有要求。如今，许多人已等待超过五年仍未收到居留卡，而规则却在不断变化。',
    },
    why: {
      eyebrow: '为何这很重要',
      title: '一次造成切实后果的信任破裂',
      cols: [
        {
          title: '期望落空',
          body: '人们基于葡萄牙提出的法律框架进行了投资、举家迁居、出售企业并重新安排了生活。',
        },
        {
          title: '行政失职',
          body: '许多申请人在超过法定处理期限多年后，仍未收到居留卡。',
        },
        {
          title: '信心受损',
          body: '这种不确定性损害了葡萄牙作为投资、人才和创业目的地的声誉。',
        },
      ],
    },
    fiveYear: {
      eyebrow: '五年的等待',
      title: '仍在等待',
      intro:
        '一份互动记录，展示申请人的等待时长——从投资和申请之日起至今。可按国家、申请年份和投资类型进行筛选。',
      filterCountry: '国家',
      filterYear: '申请年份',
      filterType: '投资类型',
      all: '全部',
      waitingSince: '自此等待',
      yearsWaiting: '年等待',
      invested: '投资',
      applied: '申请',
      type: '投资',
      noResults: '没有符合所选筛选条件的案例。',
      anonymized:
        '这些故事真实且经过匿名处理，以保护申请人。登记您的案例以添加您自己的故事。',
    },
    compliance: {
      eyebrow: '葡萄牙要求合规',
      title: '申请人已经合规。政府呢？',
      intro: '申请人已经：',
      items: [
        '投入资本',
        '提交文件',
        '缴纳费用',
        '保持合规',
        '续签文件',
        '持续履行申报义务',
      ],
      conclusion: '然而，多年之后许多人仍未拿到居留卡。',
    },
    closing: {
      title: '加入您的声音。记录您的案例。团结一致。',
      body: '当每一位受影响的投资者和居民都被纳入统计时，这场运动最为有力。只需两分钟，即可发出您的声音。',
    },
  },

  petition: {
    eyebrow: '请愿',
    title: '要求立即行动',
    intro:
      '这份请愿书将代表所有受这些延误影响的投资者、申请人及其家庭，递交给葡萄牙政府。请在下方添加您的姓名。',
    demandsTitle: '请愿诉求',
    demands: [
      '立即处理被延误的申请。',
      '承认因行政延误而损失的等待时间。',
      '保护正当期望。',
      '不得追溯适用新的公民身份规则。',
      '恢复法律确定性。',
      '与受影响的投资者和居民进行正式对话。',
    ],
    formTitle: '签署请愿',
    consentPublic: '在签名者中公开显示我的姓名。',
    consentContact: '我同意接收活动更新。我的数据将被保密处理。',
    consentProcessing:
      '我同意为本请愿和活动的目的收集和处理我的个人数据，详见',
    submit: '添加我的签名',
    successTitle: '感谢您的签署。',
    successBody:
      '您的签名已被记录。帮助我们触达更多人——分享请愿书，并考虑登记您的案例。',
  },

  register: {
    eyebrow: '登记您的案例',
    title: '记录您的案例',
    purpose: '目的',
    purposeBody:
      '登记您的案例有助于建立索赔人数据库和证据基础。每一个记录在案的案例都会加强请愿、经济分析以及未来任何法律行动。您的信息将被保密。',
    formTitle: '案例详情',
    submit: '提交我的案例',
    successTitle: '您的案例已登记。',
    successBody:
      '谢谢。您的案例已加入证据库。团队成员可能会联系您以获取更多文件。',
    confidential:
      '所有信息均被安全存储，仅用于本次运动及可能的法律行动。',
    consentProcessing:
      '我同意收集和处理我的个人数据及案例详情，用于建立活动证据库并支持可能的法律行动，详见',
  },

  impact: {
    eyebrow: '经济影响',
    title: '延误的代价',
    intro:
      '一个量化延误和政策变化背后投资额、等待时间和人员影响的仪表板。',
    metrics: {
      capital: '投资总额',
      avgWait: '平均等待',
      avgWaitUnit: '年',
      beyondStatutory: '超过法定期限的案例',
      families: '受影响的家庭成员',
      feesPaid: '已缴政府费用',
      jobs: '投资支持的就业岗位',
    },
    byCountryTitle: '按申请人国籍划分的投资额',
    byYearTitle: '按申请年份划分的仍待处理申请',
    byTypeTitle: '按合格途径划分的投资',
    note: '数据根据已登记案例汇总，并随新案例的记录而更新。登记您的案例可提高此分析的准确性。',
  },

  legal: {
    eyebrow: '法律行动',
    title: '加入法律行动',
    purpose: '目的',
    purposeBody:
      '我们正在为可能的集体法律行动召集潜在索赔人，并定期提供进展更新。加入不会带来任何义务；它确认您的意向，并使法律顾问能够评估集体诉求。',
    stepsTitle: '运作方式',
    steps: [
      {
        title: '登记您的意向',
        body: '将您的信息添加到索赔人群体。此阶段无需任何费用或义务。',
      },
      {
        title: '案件评估',
        body: '法律顾问审查整体情况和诉求的力度。',
      },
      {
        title: '更新与后续步骤',
        body: '在做出任何决定之前，您将收到定期更新和清晰的信息。',
      },
    ],
    formTitle: '表达您的意向',
    submit: '加入法律行动',
    successTitle: '您已加入索赔人群体。',
    successBody:
      '谢谢。您将收到有关法律行动的更新。此阶段您无需再做任何事情。',
    disclaimer:
      '本网站提供信息并召集潜在索赔人。它不构成法律建议，也不建立律师—委托人关系。',
    consentProcessing:
      '我同意收集和处理我的个人数据，用于登记我对法律行动的意向并接收相关更新，详见',
  },

  media: {
    eyebrow: '媒体中心',
    title: '媒体中心',
    intro:
      '为记者、编辑和研究人员提供的新闻稿、采访、新闻报道和活动统计数据。',
    pressReleases: '新闻稿',
    coverage: '新闻报道',
    interviews: '采访',
    statsTitle: '活动统计',
    contactTitle: '媒体咨询',
    contactBody:
      '如需采访、数据、案例研究或评论，请联系活动新闻办公室。',
    contactBtn: '联系新闻办公室',
    download: '下载',
    readArticle: '阅读文章',
    summaryLabel: '摘要',
    watch: '观看',
  },

  openLetter: {
    eyebrow: '公开信',
    title: '致政府的公开信',
    addressedTo: '致葡萄牙相关主管部门',
    date: '里斯本 · 2026',
    body: [
      '致葡萄牙共和国政府、部长会议主席团、司法部以及融合、移民与庇护署（AIMA）：',
      '我们代表数千名将信任寄托于葡萄牙的投资者、居留申请人及其家庭致信。我们遵守了法律。我们投入资本、提交文件、缴纳了所需费用、保持完全合规、续签文件，并履行了所有被要求的申报义务。',
      '作为回报，我们只求葡萄牙信守其向我们提出的框架。然而，我们中的许多人已等待超过五年仍未收到居留卡，而管辖我们申请的规则却在不断变化——有时甚至是追溯性的。',
      '这些延误并非抽象。它们拆散了家庭、冻结了计划、危及了教育和企业，并破坏了我们赖以建立生活的正当期望。它们也损害了葡萄牙作为投资、人才和诚信目的地的地位。',
      '我们并非要求特殊待遇。我们要求的是被承诺的东西：及时、合法、公正地处理我们的申请，并恢复法律确定性。',
      '我们恭敬地呼吁政府刻不容缓地采取行动。',
    ],
    demandsTitle: '因此，我们呼吁政府：',
    signoff: '此致敬意，',
    signoffName: '“葡萄牙必须信守承诺”的签署者',
    cta: '在这封信上署名',
  },

  footer: {
    tagline:
      '一场为在葡萄牙受到行政延误和追溯性政策变化影响的投资者、居留申请人和家庭发声的倡导运动。',
    quickLinks: '快速链接',
    actions: '采取行动',
    legalLinks: '法律',
    privacy: '隐私政策',
    terms: '使用条款',
    disclaimerTitle: '免责声明',
    disclaimer:
      '这是一场独立的倡导运动。此处提供的信息不构成法律建议。个人数据将被保密处理，仅用于本次运动的目的。',
    rights: '版权所有。',
  },

  form: {
    firstName: '名',
    lastName: '姓',
    fullName: '全名',
    email: '电子邮箱',
    phone: '电话（可选）',
    country: '国籍',
    countryResidence: '居住国',
    selectCountry: '选择国家',
    applicationYear: '申请年份',
    investmentDate: '投资日期',
    investmentType: '投资类型',
    investmentAmount: '投资金额（欧元）',
    selectType: '选择投资类型',
    selectYear: '选择年份',
    familyMembers: '申请中包含的家庭成员',
    status: '当前状态',
    story: '您的故事',
    storyHint:
      '请用您自己的话告诉我们，延误如何影响了您和您的家庭。此内容可能会被匿名处理并用于支持本次运动。',
    message: '留言',
    required: '此字段为必填项。',
    invalidEmail: '请输入有效的电子邮箱地址。',
    consentRequired: '在我们处理您的数据之前，需要您的同意。',
    privacyPolicy: '隐私政策',
    optional: '可选',
    submitting: '提交中…',
    submitError: '出现错误，请重试。',
    captchaError: '请完成验证后重试。',
    rateError: '尝试次数过多，请稍候再试。',
    networkError: '无法连接服务器，请检查网络连接后重试。',
    checkEmail: '请查收邮件并点击确认链接——您的提交仅在确认后才计入。',
    investmentTypes: [
      '房地产',
      '资本转移',
      '投资基金',
      '企业 / 创造就业',
      '科学或文化支持',
      '其他',
    ],
    statuses: [
      '已提交申请，等待决定',
      '等待居留卡',
      '续签待处理',
      '公民身份申请待处理',
      '其他',
    ],
  },

  privacyNotice: {
    text: '我们仅在您选择提供时收集个人数据——用于签署请愿、登记案例或加入法律行动。我们不使用广告或追踪 Cookie。',
    learnMore: '阅读我们的隐私政策',
    accept: '我知道了',
  },

  seo: {
    tagline: '为葡萄牙的黄金签证投资者和居留申请人争取法律确定性',
    openLetterDesc:
      '我们致葡萄牙政府的公开信，要求及时、合法地处理被延误的居留申请，并恢复法律确定性。',
  },

  notFound: {
    title: '页面未找到',
    body: '您查找的页面不存在。',
    home: '返回首页',
  },
}
