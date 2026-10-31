/**
 * app.js — SPA «Итоговый тест по электробезопасности (I группа)»
 * Vanilla JS ES6+, без фреймворков
 */

/* ════════════════════════════════════════════════════════════
   1. БАНК ВОПРОСОВ (20 вопросов)
   Источники: Приказ Минтруда № 903н, ПТЭЭП, Приказ Минздрава № 220н
   correctIndex — индекс правильного ответа (0-based)
════════════════════════════════════════════════════════════ */
const QUESTIONS = [
  {
    text: 'Каким категориям работников присваивается I группа по электробезопасности?',
    options: [
      'Только электротехническому персоналу, обслуживающему электроустановки',
      'Неэлектротехническому персоналу, выполняющему работы, при которых может возникнуть опасность поражения током',
      'Только специалистам по охране труда',
      'Только руководителям организаций'
    ],
    correctIndex: 1
  },
  {
    text: 'Кто должен проводить инструктаж для присвоения I группы по электробезопасности?',
    options: [
      'Любой сотрудник, прошедший обучение',
      'Работник из числа электротехнического персонала с группой не ниже III или специалист по охране труда',
      'Непосредственный руководитель работника',
      'Представитель профсоюзной организации'
    ],
    correctIndex: 1
  },
  {
    text: 'В какой форме завершается инструктаж при присвоении I группы по электробезопасности?',
    options: [
      'В форме письменного экзамена с билетами',
      'В форме устного опроса (при необходимости — проверка навыков)',
      'В форме компьютерного тестирования',
      'Инструктаж не требует проверки знаний'
    ],
    correctIndex: 1
  },
  {
    text: 'Выдается ли удостоверение при присвоении I группы по электробезопасности?',
    options: [
      'Да, обязательно',
      'Нет, присвоение оформляется записью в журнале',
      'Да, только по требованию работника',
      'Выдается только руководителям'
    ],
    correctIndex: 1
  },
  {
    text: 'Какая периодичность инструктажа для I группы по электробезопасности установлена в настоящее время?',
    options: [
      'Строго не реже 1 раза в год',
      'Периодичность определяет работодатель в локальных нормативных актах',
      'Не реже 1 раза в 3 года',
      'Однократно при приеме на работу'
    ],
    correctIndex: 1
  },
  {
    text: 'Какие виды воздействия оказывает электрический ток на организм человека?',
    options: [
      'Только термическое и механическое',
      'Термическое, электролитическое, механическое и биологическое',
      'Только биологическое',
      'Химическое и радиационное'
    ],
    correctIndex: 1
  },
  {
    text: 'Какой путь прохождения тока через тело человека считается наиболее опасным?',
    options: [
      '«Нога — Нога»',
      '«Рука — Рука»',
      '«Голова — Рука» или «Голова — Нога»',
      '«Левая рука — Правая нога»'
    ],
    correctIndex: 2
  },
  {
    text: 'При какой силе переменного тока у человека возникает «порог неотпускающего тока» (судороги, не позволяющие самостоятельно разжать руку)?',
    options: [
      '0,5–1 мА',
      '5–7 мА',
      '10–15 мА',
      '100 мА'
    ],
    correctIndex: 2
  },
  {
    text: 'Какое оборудование относится к классу II по степени защиты от поражения электрическим током?',
    options: [
      'Оборудование с только базовой изоляцией',
      'Оборудование с двойной или усиленной изоляцией (не требует заземления)',
      'Оборудование, питающееся от безопасного сверхнизкого напряжения',
      'Оборудование с обязательным заземлением корпуса'
    ],
    correctIndex: 1
  },
  {
    text: 'Что необходимо сделать перед началом работы с электроприбором (в рамках визуального осмотра)?',
    options: [
      'Разобрать корпус и проверить внутренние соединения',
      'Проверить целостность кабеля, вилки и розетки на предмет повреждений',
      'Самостоятельно проверить сопротивление изоляции',
      'Включить прибор в сеть и проверить его работу'
    ],
    correctIndex: 1
  },
  {
    text: 'Разрешено ли неэлектротехническому персоналу самостоятельно вскрывать корпуса электроприборов и ремонтировать кабели?',
    options: [
      'Да, если есть базовые навыки',
      'Да, но только при отключенном питании',
      'Нет, это запрещено; ремонт выполняет только электротехнический персонал',
      'Разрешено только для офисной техники'
    ],
    correctIndex: 2
  },
  {
    text: 'Что такое шаговое напряжение?',
    options: [
      'Напряжение между двумя точками на поверхности земли на расстоянии одного шага',
      'Напряжение в розетке',
      'Напряжение прикосновения к корпусу прибора',
      'Напряжение на конденсаторе'
    ],
    correctIndex: 0
  },
  {
    text: 'Какой радиус опасной зоны шагового напряжения от упавшего на землю провода (на влажном грунте)?',
    options: [
      'До 2 метров',
      'До 5 метров',
      'До 8 метров (может увеличиваться)',
      'До 20 метров'
    ],
    correctIndex: 2
  },
  {
    text: 'Каким образом необходимо выходить из зоны шагового напряжения?',
    options: [
      'Бегом, делая широкие шаги',
      'Прыжками на одной ноге',
      '«Гусиным шагом», не отрывая ступни от земли и приставляя пятку к носку',
      'Ползком на животе'
    ],
    correctIndex: 2
  },
  {
    text: 'Что категорически запрещается делать при оказании первой помощи пострадавшему от электрического тока?',
    options: [
      'Вызывать скорую помощь',
      'Прикасаться к пострадавшему голыми руками, пока он находится под напряжением',
      'Проверять у пострадавшего пульс',
      'Проводить сердечно-легочную реанимацию'
    ],
    correctIndex: 1
  },
  {
    text: 'Сколько времени составляет период клинической смерти, в течение которого можно спасти пострадавшего?',
    options: [
      '1–2 минуты',
      '4–6 минут',
      '10–15 минут',
      '30 минут'
    ],
    correctIndex: 1
  },
  {
    text: 'Что необходимо сделать в первую очередь при обнаружении пострадавшего от действия электрического тока?',
    options: [
      'Начать сердечно-легочную реанимацию',
      'Обесточить пострадавшего (отключить рубильник, вытащить вилку)',
      'Дать пострадавшему воды',
      'Сообщить руководителю'
    ],
    correctIndex: 1
  },
  {
    text: 'В каком соотношении проводятся нажатия на грудную клетку и искусственные вдохи при сердечно-легочной реанимации?',
    options: [
      '15 нажатий : 1 вдох',
      '30 нажатий : 2 вдоха',
      '10 нажатий : 1 вдох',
      '5 нажатий : 2 вдоха'
    ],
    correctIndex: 1
  },
  {
    text: 'Какое положение необходимо придать пострадавшему без сознания, но с сохраненным дыханием?',
    options: [
      'На спине с приподнятыми ногами',
      'Устойчивое боковое положение',
      'Сидя с наклоном вперед',
      'На животе'
    ],
    correctIndex: 1
  },
  {
    text: 'Обязательна ли госпитализация после электротравмы, даже если пострадавший чувствует себя удовлетворительно?',
    options: [
      'Нет, достаточно наблюдения на месте',
      'Да, так как существует риск отложенной остановки сердца',
      'Только по желанию пострадавшего',
      'Только при наличии ожогов'
    ],
    correctIndex: 1
  }
];

/* ════════════════════════════════════════════════════════════
   2. КОНФИГУРАЦИЯ
════════════════════════════════════════════════════════════ */

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzky4gvtivKFtTHq-GMGCWnnCPF_GfUgogS87KexCqi-S2rFr_P-EfUWSevfBiJ7uqUjQ/exec'; // Сюда вставите новую ссылку

/** Порог прохождения: 85% = 17 правильных из 20 */
const PASS_THRESHOLD = 0.85;
const TOTAL_QUESTIONS = QUESTIONS.length; // 20

/* ════════════════════════════════════════════════════════════
   3. СОСТОЯНИЕ ПРИЛОЖЕНИЯ
════════════════════════════════════════════════════════════ */
const state = {
  currentScene: 1,
  consentGiven: false,
  userData: {
    fullName:     '',
    organization: '',
    position:     '',
    department:   '',
    birthDate:    '',
    hireDate:     ''
  },
  answers: [],
  currentQuestionIndex: 0
};

/* ════════════════════════════════════════════════════════════
   4. DOM-ССЫЛКИ
════════════════════════════════════════════════════════════ */
const sceneMap = {
  1: document.getElementById('scene-welcome'),
  2: document.getElementById('scene-consent'),
  3: document.getElementById('scene-form'),
  4: document.getElementById('scene-quiz'),
  5: document.getElementById('scene-result')
};

const btnStart       = document.getElementById('btn-start');
const btnConsentCont = document.getElementById('btn-consent-continue');
const btnFormSubmit  = document.getElementById('btn-form-submit');
const btnNext        = document.getElementById('btn-next');
const btnNextLabel   = document.getElementById('btn-next-label');
const btnRetry       = document.getElementById('btn-retry');

const consentCheckbox = document.getElementById('consent-checkbox');

const inputFullname   = document.getElementById('input-fullname');
const inputOrg        = document.getElementById('input-org');
const inputPosition   = document.getElementById('input-position');
const inputDepartment = document.getElementById('input-department');
const inputBirthdate  = document.getElementById('input-birthdate');
const inputHiredate   = document.getElementById('input-hiredate');

const quizCounter      = document.getElementById('quiz-counter');
const progressBarFill  = document.getElementById('progress-bar-fill');
const progressBarTrack = document.getElementById('progress-bar-track');
const questionCard     = document.getElementById('question-card');
const questionNumber   = document.getElementById('question-number');
const questionText     = document.getElementById('question-text');
const optionsList      = document.getElementById('options-list');

const resultIconWrap = document.getElementById('result-icon-wrap');
const resultTitle    = document.getElementById('result-title');
const resultText     = document.getElementById('result-text');
const scoreNumber    = document.getElementById('score-number');
const scoreRingFill  = document.getElementById('score-ring-fill');
const statCorrect    = document.getElementById('stat-correct');
const statPercent    = document.getElementById('stat-percent');
const statStatus     = document.getElementById('stat-status');
const submitStatus   = document.getElementById('submit-status');

/* ════════════════════════════════════════════════════════════
   5. УПРАВЛЕНИЕ СЦЕНАМИ
════════════════════════════════════════════════════════════ */
function showScene(n) {
  Object.entries(sceneMap).forEach(([idx, scene]) => {
    if (!scene) return;
    if (Number(idx) === n) {
      scene.classList.add('active');
      scene.removeAttribute('aria-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scene.classList.remove('active');
      scene.setAttribute('aria-hidden', 'true');
    }
  });
  state.currentScene = n;
}

/* ════════════════════════════════════════════════════════════
   6. СЦЕНА 2: СОГЛАСИЕ НА ОБРАБОТКУ ПДн
════════════════════════════════════════════════════════════ */
function updateConsentButton() {
  const checked = consentCheckbox.checked;
  state.consentGiven = checked;
  btnConsentCont.disabled = !checked;
  btnConsentCont.setAttribute('aria-disabled', String(!checked));
}
consentCheckbox.addEventListener('change', updateConsentButton);

/* ════════════════════════════════════════════════════════════
   7. СЦЕНА 3: ВАЛИДАЦИЯ ФОРМЫ
════════════════════════════════════════════════════════════ */
const formFields = [
  inputFullname, inputOrg, inputPosition,
  inputDepartment, inputBirthdate, inputHiredate
];

function validateForm() {
  const allFilled = formFields.every(f => f.value.trim() !== '');
  btnFormSubmit.disabled = !allFilled;
  btnFormSubmit.setAttribute('aria-disabled', String(!allFilled));
}

formFields.forEach(field => {
  field.addEventListener('input', validateForm);
  field.addEventListener('change', validateForm);
});

function collectFormData() {
  state.userData.fullName     = inputFullname.value.trim();
  state.userData.organization = inputOrg.value.trim();
  state.userData.position     = inputPosition.value.trim();
  state.userData.department   = inputDepartment.value.trim();
  state.userData.birthDate    = inputBirthdate.value;
  state.userData.hireDate     = inputHiredate.value;
}

/* ════════════════════════════════════════════════════════════
   8. СЦЕНА 4: ЛОГИКА ТЕСТА
════════════════════════════════════════════════════════════ */
function startQuiz() {
  state.answers = [];
  state.currentQuestionIndex = 0;
  renderQuestion(0);
}

function renderQuestion(index) {
  const q = QUESTIONS[index];
  const num = index + 1;

  quizCounter.textContent = `Вопрос ${num} из ${TOTAL_QUESTIONS}`;
  const pct = (index / TOTAL_QUESTIONS) * 100;
  progressBarFill.style.width = pct + '%';
  progressBarTrack.setAttribute('aria-valuenow', String(index));

  questionNumber.textContent = 'Вопрос ' + String(num).padStart(2, '0');
  questionText.textContent = q.text;

  optionsList.innerHTML = '';
  q.options.forEach((optText, optIdx) => {
    const label = document.createElement('label');
    label.className = 'option-label';
    label.setAttribute('for', `opt-${index}-${optIdx}`);

    const radio = document.createElement('input');
    radio.type      = 'radio';
    radio.name      = `q${index}`;
    radio.id        = `opt-${index}-${optIdx}`;
    radio.value     = String(optIdx);
    radio.className = 'option-radio';
    if (state.answers[index] === optIdx) radio.checked = true;

    radio.addEventListener('change', () => onOptionSelect(index, optIdx));

    const marker = document.createElement('span');
    marker.className = 'option-marker';
    marker.setAttribute('aria-hidden', 'true');

    const textSpan = document.createElement('span');
    textSpan.className   = 'option-text';
    textSpan.textContent = optText;

    label.appendChild(radio);
    label.appendChild(marker);
    label.appendChild(textSpan);
    optionsList.appendChild(label);
  });

  updateNextButton(index);
  btnNextLabel.textContent = (index === TOTAL_QUESTIONS - 1) ? 'Завершить тест' : 'Далее';
}

function onOptionSelect(qIdx, optIdx) {
  state.answers[qIdx] = optIdx;
  updateNextButton(qIdx);
}

function updateNextButton(index) {
  const answered = state.answers[index] !== undefined;
  btnNext.disabled = !answered;
  btnNext.setAttribute('aria-disabled', String(!answered));
}

function goToNextQuestion() {
  const cur = state.currentQuestionIndex;

  if (cur < TOTAL_QUESTIONS - 1) {
    questionCard.classList.add('leaving');
    setTimeout(() => {
      questionCard.classList.remove('leaving');
      state.currentQuestionIndex = cur + 1;
      renderQuestion(state.currentQuestionIndex);
    }, 250);
  } else {
    showResults();
  }
}

/* ════════════════════════════════════════════════════════════
   9. СЦЕНА 5: РЕЗУЛЬТАТЫ
════════════════════════════════════════════════════════════ */
function calculateResult() {
  let correct = 0;
  QUESTIONS.forEach((q, idx) => {
    if (state.answers[idx] === q.correctIndex) correct++;
  });
  const percent = Math.round((correct / TOTAL_QUESTIONS) * 100);
  const passed  = (correct / TOTAL_QUESTIONS) >= PASS_THRESHOLD;
  return { correct, percent, passed };
}

function showResults() {
  const { correct, percent, passed } = calculateResult();

  showScene(5);

  resultIconWrap.textContent = passed ? '🎉' : '😔';

  resultTitle.className   = 'result-title ' + (passed ? 'success' : 'failure');
  resultTitle.textContent = passed
    ? 'Поздравляем! Тест сдан успешно.'
    : 'Тест не сдан.';

  resultText.textContent = passed
    ? 'Вы успешно прошли итоговый тест по электробезопасности. Ваши результаты сохранены в системе.'
    : `Вы ответили правильно на ${correct} из ${TOTAL_QUESTIONS} вопросов. ` +
      'Рекомендуем освежить знания по материалам инструктажа и попробовать ещё раз. ' +
      'У вас обязательно получится!';

  scoreNumber.textContent = String(correct);
  statCorrect.textContent = `${correct} из ${TOTAL_QUESTIONS}`;
  statPercent.textContent = percent + '%';
  statStatus.textContent  = passed ? 'Сдал / Сдала' : 'Не сдан';
  statStatus.className    = 'stat-value stat-status ' + (passed ? 'success' : 'failure');

  const offset = 314 - (percent / 100) * 314;
  scoreRingFill.className = 'score-ring-fill ' + (passed ? 'success' : 'failure');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scoreRingFill.style.strokeDashoffset = String(offset);
    });
  });

  progressBarFill.style.width = '100%';
  progressBarTrack.setAttribute('aria-valuenow', String(TOTAL_QUESTIONS));

  submitStatus.textContent = '';
  submitStatus.className   = 'submit-status';

  const payload = {
    fullName:       state.userData.fullName,
    organization:   state.userData.organization,
    position:       state.userData.position,
    department:     state.userData.department,
    birthDate:      state.userData.birthDate,
    hireDate:       state.userData.hireDate,
    correctAnswers: correct,
    totalQuestions: TOTAL_QUESTIONS,
    percent:        percent,
    passed:         passed,
    timestamp:      new Date().toISOString()
  };

  sendResultsToGoogleSheets(payload);
}

/* ════════════════════════════════════════════════════════════
   10. ОТПРАВКА ДАННЫХ В GOOGLE SHEETS
════════════════════════════════════════════════════════════ */
async function sendResultsToGoogleSheets(payload) {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_DEPLOYED_APPS_SCRIPT_URL') {
    console.warn('[Quiz] Google Apps Script URL не настроен. Данные не отправлены.');
    submitStatus.textContent = '⚠ URL Google Sheets не настроен (см. README.md)';
    submitStatus.className   = 'submit-status error';
    return;
  }

  submitStatus.textContent = '⏳ Сохранение результатов...';
  submitStatus.className   = 'submit-status sending';

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    });
    console.log('[Quiz] Данные отправлены в Google Sheets:', payload);
    submitStatus.textContent = '✅ Результаты сохранены в системе';
    submitStatus.className   = 'submit-status sent';
  } catch (error) {
    console.error('[Quiz] Ошибка отправки данных:', error);
    submitStatus.textContent = '⚠ Не удалось сохранить результаты. Обратитесь к ответственному за электробезопасность.';
    submitStatus.className   = 'submit-status error';
  }
}

/* ════════════════════════════════════════════════════════════
   11. СБРОС И ПЕРЕЗАПУСК
════════════════════════════════════════════════════════════ */
function resetApp() {
  state.consentGiven         = false;
  state.userData             = { fullName: '', organization: '', position: '', department: '', birthDate: '', hireDate: '' };
  state.answers              = [];
  state.currentQuestionIndex = 0;

  [inputFullname, inputOrg, inputPosition, inputDepartment, inputBirthdate, inputHiredate]
    .forEach(f => { f.value = ''; });
  validateForm();

  consentCheckbox.checked = false;
  updateConsentButton();

  scoreRingFill.style.strokeDashoffset = '314';
  scoreRingFill.className = 'score-ring-fill';

  showScene(1);
}

/* ════════════════════════════════════════════════════════════
   12. ОБРАБОТЧИКИ СОБЫТИЙ
════════════════════════════════════════════════════════════ */
btnStart.addEventListener('click', () => showScene(2));

btnConsentCont.addEventListener('click', () => {
  if (state.consentGiven) showScene(3);
});

btnFormSubmit.addEventListener('click', () => {
  collectFormData();
  startQuiz();
  showScene(4);
});

btnNext.addEventListener('click', () => {
  if (!btnNext.disabled) goToNextQuestion();
});

btnRetry.addEventListener('click', resetApp);

document.getElementById('user-form').addEventListener('submit', e => e.preventDefault());

/* ════════════════════════════════════════════════════════════
   13. ИНИЦИАЛИЗАЦИЯ
════════════════════════════════════════════════════════════ */
function init() {
  showScene(1);
  updateConsentButton();
  validateForm();
  btnNext.disabled = true;
  btnNext.setAttribute('aria-disabled', 'true');
  console.log('[Quiz] Приложение инициализировано. Вопросов:', TOTAL_QUESTIONS);
}

document.addEventListener('DOMContentLoaded', init);