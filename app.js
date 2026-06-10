/**
 * Budget Tracker — Personal Finance Manager
 * Vanilla JS, i18n, multi-currency, dark/light theme, localStorage
 */

/* ===================================================================
   I18N — Translation Strings
   =================================================================== */

const LOCALES = {
  en: {
    code: 'en',
    dir: 'ltr',
    name: 'English',
    currency: 'USD',
    lang: 'en-US',
    strings: {
      appTitle: 'Budget Tracker',
      currentBalance: 'Current Balance',
      income: 'Income',
      expense: 'Expense',
      expenses: 'Expenses',
      budgetProgress: 'Budget Progress',
      budgetHint: 'Add income to get started',
      budgetHintLow: 'You have used {pct}% of your budget',
      budgetHintHigh: 'You have used {pct}% — approaching limit!',
      budgetHintExceeded: 'Expenses exceed income by {pct}%!',
      addTransaction: 'Add Transaction',
      date: 'Date',
      type: 'Type',
      description: 'Description',
      amount: 'Amount',
      history: 'Transaction History',
      noTransactions: 'No transactions yet',
      reset: 'Reset',
      resetConfirm: 'Delete all transactions? This cannot be undone.',
      deleteConfirm: 'Delete this transaction?',
      invalidForm: 'Please fill in all fields',
      currencyLabel: 'Currency',
      languageLabel: 'Language',
      themeToggle: 'Toggle theme',
      today: 'Today',
    },
  },
  es: {
    code: 'es',
    dir: 'ltr',
    name: 'Español',
    currency: 'EUR',
    lang: 'es-ES',
    strings: {
      appTitle: 'Control de Presupuesto',
      currentBalance: 'Saldo Actual',
      income: 'Ingreso',
      expense: 'Gasto',
      expenses: 'Gastos',
      budgetProgress: 'Progreso del Presupuesto',
      budgetHint: 'Agrega ingresos para empezar',
      budgetHintLow: 'Has usado el {pct}% de tu presupuesto',
      budgetHintHigh: '¡Has usado el {pct}% — acercándote al límite!',
      budgetHintExceeded: '¡Los gastos superan los ingresos en un {pct}%!',
      addTransaction: 'Agregar Transacción',
      date: 'Fecha',
      type: 'Tipo',
      description: 'Descripción',
      amount: 'Monto',
      history: 'Historial',
      noTransactions: 'Sin transacciones aún',
      reset: 'Reiniciar',
      resetConfirm: '¿Eliminar todas las transacciones? Esto no se puede deshacer.',
      deleteConfirm: '¿Eliminar esta transacción?',
      invalidForm: 'Por favor completa todos los campos',
      currencyLabel: 'Moneda',
      languageLabel: 'Idioma',
      themeToggle: 'Cambiar tema',
      today: 'Hoy',
    },
  },
  fr: {
    code: 'fr',
    dir: 'ltr',
    name: 'Français',
    currency: 'EUR',
    lang: 'fr-FR',
    strings: {
      appTitle: 'Gestionnaire de Budget',
      currentBalance: 'Solde Actuel',
      income: 'Revenu',
      expense: 'Dépense',
      expenses: 'Dépenses',
      budgetProgress: 'Progression du Budget',
      budgetHint: 'Ajoutez des revenus pour commencer',
      budgetHintLow: 'Vous avez utilisé {pct}% de votre budget',
      budgetHintHigh: 'Vous avez utilisé {pct}% — limite approchée!',
      budgetHintExceeded: 'Les dépenses dépassent les revenus de {pct}%!',
      addTransaction: 'Ajouter une Transaction',
      date: 'Date',
      type: 'Type',
      description: 'Description',
      amount: 'Montant',
      history: 'Historique',
      noTransactions: 'Aucune transaction',
      reset: 'Réinitialiser',
      resetConfirm: 'Supprimer toutes les transactions ? Action irréversible.',
      deleteConfirm: 'Supprimer cette transaction ?',
      invalidForm: 'Veuillez remplir tous les champs',
      currencyLabel: 'Devise',
      languageLabel: 'Langue',
      themeToggle: 'Changer le thème',
      today: "Aujourd'hui",
    },
  },
  ar: {
    code: 'ar',
    dir: 'rtl',
    name: 'العربية',
    currency: 'SAR',
    lang: 'ar-SA',
    strings: {
      appTitle: 'تتبع الميزانية',
      currentBalance: 'الرصيد الحالي',
      income: 'دخل',
      expense: 'مصروف',
      expenses: 'المصروفات',
      budgetProgress: 'تقدم الميزانية',
      budgetHint: 'أضف دخلاً للبدء',
      budgetHintLow: 'لقد استخدمت {pct}% من ميزانيتك',
      budgetHintHigh: 'لقد استخدمت {pct}% — تقترب من الحد!',
      budgetHintExceeded: 'المصروفات تتجاوز الدخل بنسبة {pct}%!',
      addTransaction: 'إضافة معاملة',
      date: 'التاريخ',
      type: 'النوع',
      description: 'الوصف',
      amount: 'المبلغ',
      history: 'سجل المعاملات',
      noTransactions: 'لا توجد معاملات بعد',
      reset: 'إعادة تعيين',
      resetConfirm: 'حذف جميع المعاملات؟ لا يمكن التراجع عن هذا.',
      deleteConfirm: 'حذف هذه المعاملة؟',
      invalidForm: 'يرجى ملء جميع الحقول',
      currencyLabel: 'العملة',
      languageLabel: 'اللغة',
      themeToggle: 'تبديل السمة',
      today: 'اليوم',
    },
  },
  ja: {
    code: 'ja',
    dir: 'ltr',
    name: '日本語',
    currency: 'JPY',
    lang: 'ja-JP',
    strings: {
      appTitle: '予算管理',
      currentBalance: '現在の残高',
      income: '収入',
      expense: '支出',
      expenses: '支出合計',
      budgetProgress: '予算の進捗',
      budgetHint: '収入を追加して開始',
      budgetHintLow: '予算の{pct}%を使用しました',
      budgetHintHigh: '予算の{pct}%を使用 — 上限に近づいています！',
      budgetHintExceeded: '支出が収入を{pct}%上回っています！',
      addTransaction: '取引を追加',
      date: '日付',
      type: '種類',
      description: '説明',
      amount: '金額',
      history: '取引履歴',
      noTransactions: '取引はまだありません',
      reset: 'リセット',
      resetConfirm: 'すべての取引を削除しますか？この操作は元に戻せません。',
      deleteConfirm: 'この取引を削除しますか？',
      invalidForm: 'すべてのフィールドを入力してください',
      currencyLabel: '通貨',
      languageLabel: '言語',
      themeToggle: 'テーマ切替',
      today: '今日',
    },
  },
  zh: {
    code: 'zh',
    dir: 'ltr',
    name: '中文',
    currency: 'CNY',
    lang: 'zh-CN',
    strings: {
      appTitle: '预算跟踪器',
      currentBalance: '当前余额',
      income: '收入',
      expense: '支出',
      expenses: '总支出',
      budgetProgress: '预算进度',
      budgetHint: '添加收入以开始',
      budgetHintLow: '您已使用预算的{pct}%',
      budgetHintHigh: '您已使用预算的{pct}% — 接近限额！',
      budgetHintExceeded: '支出超过收入{pct}%！',
      addTransaction: '添加交易',
      date: '日期',
      type: '类型',
      description: '描述',
      amount: '金额',
      history: '交易记录',
      noTransactions: '暂无交易记录',
      reset: '重置',
      resetConfirm: '删除所有交易？此操作无法撤消。',
      deleteConfirm: '删除此交易？',
      invalidForm: '请填写所有字段',
      currencyLabel: '货币',
      languageLabel: '语言',
      themeToggle: '切换主题',
      today: '今天',
    },
  },
  id: {
    code: 'id',
    dir: 'ltr',
    name: 'Bahasa Indonesia',
    currency: 'IDR',
    lang: 'id-ID',
    strings: {
      appTitle: 'Pelacak Anggaran',
      currentBalance: 'Saldo Saat Ini',
      income: 'Pemasukan',
      expense: 'Pengeluaran',
      expenses: 'Pengeluaran',
      budgetProgress: 'Progres Anggaran',
      budgetHint: 'Tambahkan pemasukan untuk memulai',
      budgetHintLow: 'Anda telah menggunakan {pct}% dari anggaran',
      budgetHintHigh: 'Anda telah menggunakan {pct}% — mendekati batas!',
      budgetHintExceeded: 'Pengeluaran melebihi pemasukan sebesar {pct}%!',
      addTransaction: 'Tambah Transaksi',
      date: 'Tanggal',
      type: 'Tipe',
      description: 'Deskripsi',
      amount: 'Jumlah',
      history: 'Riwayat Transaksi',
      noTransactions: 'Belum ada transaksi',
      reset: 'Atur Ulang',
      resetConfirm: 'Hapus semua transaksi? Tidak dapat dibatalkan.',
      deleteConfirm: 'Hapus transaksi ini?',
      invalidForm: 'Harap isi semua bidang',
      currencyLabel: 'Mata Uang',
      languageLabel: 'Bahasa',
      themeToggle: 'Ganti tema',
      today: 'Hari Ini',
    },
  },
};

/* ===================================================================
   Currency Data
   =================================================================== */

const CURRENCIES = [
  { code: 'USD', label: 'US Dollar', locale: 'en-US' },
  { code: 'EUR', label: 'Euro', locale: 'de-DE' },
  { code: 'GBP', label: 'British Pound', locale: 'en-GB' },
  { code: 'JPY', label: 'Japanese Yen', locale: 'ja-JP' },
  { code: 'CNY', label: 'Chinese Yuan', locale: 'zh-CN' },
  { code: 'AUD', label: 'Australian Dollar', locale: 'en-AU' },
  { code: 'CAD', label: 'Canadian Dollar', locale: 'en-CA' },
  { code: 'INR', label: 'Indian Rupee', locale: 'en-IN' },
  { code: 'BRL', label: 'Brazilian Real', locale: 'pt-BR' },
  { code: 'MXN', label: 'Mexican Peso', locale: 'es-MX' },
  { code: 'KRW', label: 'South Korean Won', locale: 'ko-KR' },
  { code: 'SGD', label: 'Singapore Dollar', locale: 'en-SG' },
  { code: 'MYR', label: 'Malaysian Ringgit', locale: 'ms-MY' },
  { code: 'IDR', label: 'Indonesian Rupiah', locale: 'id-ID' },
  { code: 'PHP', label: 'Philippine Peso', locale: 'en-PH' },
  { code: 'THB', label: 'Thai Baht', locale: 'th-TH' },
  { code: 'VND', label: 'Vietnamese Dong', locale: 'vi-VN' },
];

/* ===================================================================
   State
   =================================================================== */

const STORAGE_KEY = 'budget-tracker-data';

let state = {
  transactions: [],
  currency: 'USD',
  language: 'en',
  theme: 'light',
};

/* ===================================================================
   DOM References
   =================================================================== */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
  app: $('#app'),
  html: document.documentElement,
  title: $('.app-title'),
  balanceDisplay: $('#balanceDisplay'),
  incomeDisplay: $('#incomeDisplay'),
  expenseDisplay: $('#expenseDisplay'),
  budgetPercent: $('#budgetPercent'),
  progressFill: $('#progressFill'),
  budgetHint: $('#budgetHint'),
  transactionList: $('#transactionList'),
  transactionForm: $('#transactionForm'),
  transDate: $('#transDate'),
  transType: $('#transType'),
  transDesc: $('#transDesc'),
  transAmount: $('#transAmount'),
  themeToggle: $('#themeToggle'),
  languageSelect: $('#languageSelect'),
  currencySelect: $('#currencySelect'),
  resetBtn: $('#resetBtn'),
  balanceHeaderLabel: $('.balance-header > span'),
  budgetHeaderLabel: $('.budget-header > span'),
  cardTitles: $$('.card-title'),
  formSubmitBtn: $('.btn-primary'),
  fieldLabels: $$('.field-label'),
  prevDataSet: null,
};

/* ===================================================================
   Utilities
   =================================================================== */

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function formatCurrency(amount, currencyCode, locale) {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: getFractionDigits(currencyCode),
      maximumFractionDigits: getFractionDigits(currencyCode),
    }).format(amount);
  } catch {
    return `${currencyCode} ${amount.toFixed(2)}`;
  }
}

function getFractionDigits(code) {
  // JPY, KRW, VND, IDR have 0 decimal places
  const zeroDecimals = ['JPY', 'KRW', 'VND'];
  return zeroDecimals.includes(code) ? 0 : 2;
}

/* ===================================================================
   Locale helpers
   =================================================================== */

function getLocale(lang) {
  return LOCALES[lang] || LOCALES.en;
}

function t(key, params = {}) {
  const locale = getLocale(state.language);
  let str = locale.strings[key] || key;
  for (const [k, v] of Object.entries(params)) {
    str = str.replace(`{${k}}`, v);
  }
  return str;
}

function getCurrencyLocale(code) {
  const c = CURRENCIES.find((c) => c.code === code);
  return c ? c.locale : 'en-US';
}

/* ===================================================================
   Storage
   =================================================================== */

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      state.transactions = saved.transactions || [];
      state.currency = saved.currency || 'USD';
      state.language = saved.language || 'en';
      state.theme = saved.theme || 'light';
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
  }
}

function saveState() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        transactions: state.transactions,
        currency: state.currency,
        language: state.language,
        theme: state.theme,
      })
    );
  } catch (e) {
    console.warn('Failed to save state:', e);
  }
}

/* ===================================================================
   Computed values
   =================================================================== */

function getTotals() {
  let totalIncome = 0;
  let totalExpense = 0;
  for (const t of state.transactions) {
    if (t.type === 'income') totalIncome += t.amount;
    else totalExpense += t.amount;
  }
  const balance = totalIncome - totalExpense;
  return { totalIncome, totalExpense, balance };
}

function getBudgetPercent(totalIncome, totalExpense) {
  if (totalIncome === 0) return totalExpense > 0 ? 100 : 0;
  return Math.min(100, Math.round((totalExpense / totalIncome) * 100));
}

/* ===================================================================
   Render
   =================================================================== */

function renderCurrencySelect() {
  const select = dom.currencySelect;
  select.innerHTML = '';
  for (const c of CURRENCIES) {
    const opt = document.createElement('option');
    opt.value = c.code;
    opt.textContent = `${c.code} — ${c.label}`;
    if (c.code === state.currency) opt.selected = true;
    select.appendChild(opt);
  }
}

function renderLanguageSelect() {
  const select = dom.languageSelect;
  select.innerHTML = '';
  for (const [code, locale] of Object.entries(LOCALES)) {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = locale.name;
    if (code === state.language) opt.selected = true;
    select.appendChild(opt);
  }
}

function renderAll() {
  renderTotals();
  renderBudget();
  renderTransactions();
  renderTheme();
  applyLanguage();
  applyDirection();

  // Set today's date on date input if empty
  if (!dom.transDate.value) {
    dom.transDate.value = todayISO();
  }
}

function renderTotals() {
  const cur = state.currency;
  const loc = getCurrencyLocale(cur);
  const { totalIncome, totalExpense, balance } = getTotals();

  dom.balanceDisplay.textContent = formatCurrency(balance, cur, loc);
  dom.incomeDisplay.textContent = formatCurrency(totalIncome, cur, loc);
  dom.expenseDisplay.textContent = formatCurrency(totalExpense, cur, loc);

  // Color balance
  dom.balanceDisplay.classList.remove('positive', 'negative');
  if (balance > 0) dom.balanceDisplay.classList.add('positive');
  else if (balance < 0) dom.balanceDisplay.classList.add('negative');
}

function renderBudget() {
  const { totalIncome, totalExpense } = getTotals();
  const pct = getBudgetPercent(totalIncome, totalExpense);

  dom.budgetPercent.textContent = `${pct}%`;
  dom.progressFill.style.width = `${pct}%`;
  dom.progressFill.setAttribute('aria-valuenow', pct);

  // Color states
  dom.progressFill.classList.remove('warning', 'danger');
  if (totalIncome > 0 && totalExpense > totalIncome) {
    dom.progressFill.classList.add('danger');
  } else if (pct >= 80) {
    dom.progressFill.classList.add('warning');
  }

  // Hint text
  if (totalIncome === 0 && totalExpense === 0) {
    dom.budgetHint.textContent = t('budgetHint');
  } else if (totalExpense > totalIncome && totalIncome > 0) {
    const exceed = Math.round(((totalExpense - totalIncome) / totalIncome) * 100);
    dom.budgetHint.textContent = t('budgetHintExceeded', { pct: exceed });
  } else if (pct >= 80) {
    dom.budgetHint.textContent = t('budgetHintHigh', { pct });
  } else if (totalIncome > 0) {
    dom.budgetHint.textContent = t('budgetHintLow', { pct });
  } else {
    dom.budgetHint.textContent = t('budgetHint');
  }
}

function renderTransactions() {
  const list = dom.transactionList;
  const cur = state.currency;
  const loc = getCurrencyLocale(cur);

  if (state.transactions.length === 0) {
    list.innerHTML = `<p class="empty-state">${t('noTransactions')}</p>`;
    return;
  }

  // Show most recent first
  const sorted = [...state.transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date) || b.id.localeCompare(a.id)
  );

  list.innerHTML = '';
  for (const tx of sorted) {
    const item = document.createElement('div');
    item.className = `transaction-item ${tx.type}`;
    item.dataset.id = tx.id;

    const descClass = 'transaction-desc';
    const dateClass = 'transaction-date';
    const amountClass = 'transaction-amount';
    const deleteClass = 'transaction-delete';

    const formattedAmount =
      tx.type === 'income'
        ? `+${formatCurrency(tx.amount, cur, loc)}`
        : `-${formatCurrency(tx.amount, cur, loc)}`;

    item.innerHTML = `
      <span class="${descClass}">${escapeHtml(tx.description)}</span>
      <span class="${dateClass}">${formatDate(tx.date)}</span>
      <span class="${amountClass}">${formattedAmount}</span>
      <button class="${deleteClass}" data-id="${tx.id}" aria-label="${t('deleteConfirm')}">${t('expense') === 'Expense' ? '✕' : '✕'}</button>
    `;

    list.appendChild(item);
  }

  // Bind delete buttons
  list.querySelectorAll('.transaction-delete').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (confirm(t('deleteConfirm'))) {
        deleteTransaction(id);
      }
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(isoStr) {
  try {
    const d = new Date(isoStr + 'T00:00:00');
    const locale = getLocale(state.language);
    return d.toLocaleDateString(locale.lang, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return isoStr;
  }
}

function renderTheme() {
  dom.html.setAttribute('data-theme', state.theme);
}

/* ===================================================================
   i18n — apply translations to all data-i18n elements
   =================================================================== */

function applyLanguage() {
  const locale = getLocale(state.language);

  // Set lang and dir on html
  dom.html.lang = locale.code;
  dom.html.dir = locale.dir;

  // Title
  document.title = t('appTitle');
  dom.title.textContent = t('appTitle');

  // Elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  // Form submit button
  dom.formSubmitBtn.textContent = t('addTransaction');

  // Field labels
  dom.fieldLabels.forEach((label) => {
    const key = label.dataset.i18n;
    if (key) label.textContent = t(key);
  });

  // Card titles
  dom.cardTitles.forEach((title) => {
    const key = title.dataset.i18n;
    if (key) title.textContent = t(key);
  });

  // Re-render transactions to update date formatting
  renderTransactions();

  // Update budget hint
  renderBudget();
}

function applyDirection() {
  const dir = getLocale(state.language).dir;
  dom.html.dir = dir;
}

/* ===================================================================
   Transactions CRUD
   =================================================================== */

function addTransaction(date, type, description, amount) {
  const tx = {
    id: generateId(),
    date,
    type,
    description: description.trim(),
    amount: Math.abs(parseFloat(amount)),
    createdAt: Date.now(),
  };
  state.transactions.push(tx);
  saveState();
  renderAll();
}

function deleteTransaction(id) {
  state.transactions = state.transactions.filter((t) => t.id !== id);
  saveState();
  renderAll();
}

function resetAll() {
  if (confirm(t('resetConfirm'))) {
    state.transactions = [];
    saveState();
    renderAll();
  }
}

/* ===================================================================
   Event handlers
   =================================================================== */

function setupEventListeners() {
  // Theme toggle
  dom.themeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    saveState();
    renderTheme();
  });

  // Language select
  dom.languageSelect.addEventListener('change', () => {
    state.language = dom.languageSelect.value;
    saveState();

    // Suggest currency based on locale default
    const locale = getLocale(state.language);
    if (locale.currency && CURRENCIES.some((c) => c.code === locale.currency)) {
      state.currency = locale.currency;
      dom.currencySelect.value = locale.currency;
    }

    renderAll();
  });

  // Currency select
  dom.currencySelect.addEventListener('change', () => {
    state.currency = dom.currencySelect.value;
    saveState();
    renderTotals();
    renderTransactions();
  });

  // Reset button
  dom.resetBtn.addEventListener('click', resetAll);

  // Transaction form
  dom.transactionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const date = dom.transDate.value;
    const type = dom.transType.value;
    const description = dom.transDesc.value.trim();
    const amount = dom.transAmount.value;

    if (!date || !description || !amount || parseFloat(amount) <= 0) {
      alert(t('invalidForm'));
      return;
    }

    addTransaction(date, type, description, amount);

    // Reset form
    dom.transDesc.value = '';
    dom.transAmount.value = '';
    dom.transDate.value = todayISO();
    dom.transDesc.focus();
  });
}

/* ===================================================================
   Init
   =================================================================== */

function init() {
  loadState();

  // Set the date input to today
  dom.transDate.value = todayISO();

  // Populate selects
  renderCurrencySelect();
  renderLanguageSelect();

  // Sync language/currency from state
  dom.languageSelect.value = state.language;
  dom.currencySelect.value = state.currency;

  // Initial render
  renderAll();

  // Events
  setupEventListeners();
}

// Kick off
init();
