/* ====== DỮ LIỆU ====== */
const TOTAL = { 1: 500, 2: 1272, 3: 2245 };
const TAG = /^(HSK\s*\d+|（[^）]{0,8}）?)$/;
function parseRaw(t) {
  const L = (t || '').split(/\r?\n/), st = []; let prev = 0;
  L.forEach((l, i) => {
    const s = l.trim();
    if (/^\d+$/.test(s) && +s > prev && +s <= prev + 5 && (L[i + 1] || '').trim()) { st.push(i); prev = +s; }
  });
  return st.map((a, k) => {
    const seg = L.slice(a, st[k + 1] ?? L.length), rest = seg.slice(3);
    while (rest.length && !rest[rest.length - 1].trim()) rest.pop();
    let pos = '';
    if (rest.length && TAG.test(rest[rest.length - 1].trim())) {
      const tg = rest.pop().trim(); if (!/^HSK/.test(tg)) pos = tg.replace(/[（）]/g, '');
    }
    return { id: +seg[0], word: (seg[1] || '').trim(), pinyin: (seg[2] || '').trim(), pos, meaning: rest.join(' ').replace(/\s+/g, ' ').trim() };
  });
}
const D = {
  1: parseRaw(window.RAW_HSK1), 2: parseRaw(window.RAW_HSK2), 3: parseRaw(window.RAW_HSK3)
};
const IDX = {}; [1, 2, 3].forEach(l => { IDX[l] = {}; D[l].forEach(v => IDX[l][v.id] = v); });
const clean = w => w.replace(/[（(].*$/, '').trim();
const first = w => clean(w).split(/[｜|]/)[0].trim();
const showWord = w => clean(w).replace(/\s*[｜|]\s*/g, ' | ');
const partItems = (L, n) => D[L].filter(v => v.id > (n - 1) * 100 && v.id <= n * 100);
const partCount = L => Math.ceil(TOTAL[L] / 100);
const $ = s => document.querySelector(s);
const view = h => { $('#view').innerHTML = h; window.scrollTo(0, 0); };
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const btnRed = 'bg-red-600 hover:bg-red-700 text-white font-bold';

/* ====== ÂM THANH ====== */
function speakId(L, id) {
  const v = IDX[L][id];
  if (!v || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(first(v.word));
  u.lang = 'zh-CN'; u.rate = 0.85; speechSynthesis.speak(u);
}
const speakBtn = (L, id) => `<button onclick="speakId(${L},${id})" title="Nghe phát âm" class="speak-btn">🔊</button>`;

/* ====== DARK MODE ====== */
function toggleDarkMode() {
  const d = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', d ? 'dark' : 'light');
  $('#theme-icon').innerText = d ? '☀️' : '🌙';
}
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark'); $('#theme-icon').innerText = '☀️';
}

/* ====== ĐĂNG NHẬP ====== */
function handleLogin(e) {
  e.preventDefault();
  if ($('#username').value.trim() === '040106' && $('#password').value.trim() === '040106') { sessionStorage.setItem('isLoggedIn', 'true'); route(); }
  else $('#login-error').classList.remove('hidden');
}
function logout() { sessionStorage.removeItem('isLoggedIn'); location.hash = '#/'; route(); }
function renderLogin() {
  view(`<div class="max-w-sm mx-auto custom-card p-8 rounded-3xl shadow-xl mt-8">
    <div class="text-center mb-6"><div class="w-16 h-16 bg-red-100 dark:bg-red-950 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3 font-extrabold text-xl">HSK</div>
    <h2 class="text-2xl font-bold">Đăng Nhập</h2></div>
    <form onsubmit="handleLogin(event)" class="space-y-4">
      <input id="username" required placeholder="Tài khoản" class="w-full p-3 custom-sub rounded-xl text-sm">
      <input id="password" type="password" required placeholder="Mật khẩu" class="w-full p-3 custom-sub rounded-xl text-sm">
      <p id="login-error" class="text-xs text-red-500 font-semibold hidden">Tài khoản hoặc mật khẩu không chính xác.</p>
      <button class="w-full py-3 ${btnRed} rounded-xl text-sm">Đăng Nhập</button></form></div>`);
}

/* ====== ROUTER: #/ | #/hsk1 | #/hsk1/p/2 | #/hsk1/p/2/quiz ====== */
function route() {
  const logged = sessionStorage.getItem('isLoggedIn') === 'true';
  $('#nav').classList.toggle('hidden', !logged);
  if (!logged) return renderLogin();
  const h = location.hash.replace(/^#\/?/, '').split('/');
  document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === h[0]));
  const m = /^hsk([123])$/.exec(h[0]);
  if (!m) return renderHome();
  const L = +m[1], n = +h[2];
  if (!h[1] || !n || n > partCount(L)) return renderParts(L);
  return h[3] === 'quiz' ? renderSetup(L, n) : renderList(L, n);
}
addEventListener('hashchange', route);

/* ====== TRANG CHỦ / DANH MỤC ====== */
function renderHome() {
  const card = (tag, name, L, desc, btn) => `<div class="custom-card p-6 rounded-3xl shadow-sm flex flex-col justify-between">
    <div><div class="flex justify-between items-center mb-3"><span class="px-2.5 py-1 rounded-md text-[11px] font-bold bg-red-600 text-white uppercase">${tag}</span>
    <span class="text-xs text-slate-500">${TOTAL[L]} Từ vựng</span></div>
    <h3 class="text-xl font-bold mb-1">${name}</h3><p class="text-sm text-slate-500 mb-5">${desc}</p></div>
    <a href="#/hsk${L}" class="block text-center py-3 ${btnRed} rounded-xl text-sm">${btn} →</a></div>`;
  view(`<div class="text-center mb-8"><h1 class="text-3xl md:text-4xl font-extrabold mb-2">Lựa Chọn Cấp Độ Học Từ Vựng</h1>
    <p class="text-sm text-slate-500">Chọn trình độ HSK phù hợp để bắt đầu luyện tập.</p></div>
    <div class="grid md:grid-cols-2 gap-5">
      ${card('Cơ bản', 'HSK Cấp Độ 1', 1, 'Dành cho mấy con gà', 'Tôi gà -.-')}
      ${card('Sơ cấp', 'HSK Cấp Độ 2', 2, 'Cái này khó lắm đấy, làm được không?', 'Bố m đẳng cấp')}
      <div class="md:col-span-2 md:w-1/2 md:mx-auto">${card('Trung cấp', 'HSK 3', 3, 'Sắp có', 'Xem')}</div></div>`);
}
function renderParts(L) {
  if (!D[L].length) return view(`<div class="text-center py-20"><h1 class="text-3xl font-extrabold mb-2">HSK ${L}</h1><p class="text-slate-500">Nội dung sắp có.</p>
    <a href="#/" class="inline-block mt-6 px-6 py-3 ${btnRed} rounded-xl text-sm">Về Trang Chủ</a></div>`);
  let cards = '';
  for (let n = 1; n <= partCount(L); n++) {
    const c = partItems(L, n).length, end = Math.min(n * 100, TOTAL[L]);
    cards += `<div class="custom-card p-6 rounded-3xl shadow-sm"><h3 class="text-xl font-bold">Phần ${n}</h3>
      <p class="text-sm text-slate-500 mb-5">Từ ${(n - 1) * 100 + 1} - ${end}${c && c < end - (n - 1) * 100 ? ` (đã có ${c})` : ''}</p>
      ${c ? `<a href="#/hsk${L}/p/${n}" class="block text-center py-3 ${btnRed} rounded-xl text-sm">Xem danh sách</a>`
          : `<span class="block text-center py-3 bg-slate-300 dark:bg-slate-700 text-slate-500 font-bold rounded-xl text-sm">Sắp có</span>`}</div>`;
  }
  view(`<div class="text-center mb-8"><h1 class="text-3xl md:text-4xl font-extrabold mb-2">Danh Mục Từ Vựng HSK ${L}</h1>
    <p class="text-sm text-slate-500">Chọn phần từ vựng để bắt đầu học và làm bài tập</p></div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5">${cards}</div>`);
}

/* ====== DANH SÁCH TỪ ====== */
function renderList(L, n) {
  const items = partItems(L, n);
  if (!items.length) return renderParts(L);
  const border = 'style="border-color:var(--border-color)"';
  view(`<a href="#/hsk${L}" class="text-xs font-semibold text-slate-500 hover:text-red-600">← Quay lại danh mục</a>
    <div class="flex flex-wrap justify-between items-center gap-3 my-4">
      <h1 class="text-2xl md:text-3xl font-extrabold text-red-600">HSK ${L} - Phần ${n}: Từ ${items[0].id} - ${items[items.length - 1].id}</h1>
      <a href="#/hsk${L}/p/${n}/quiz" class="px-5 py-2.5 ${btnRed} rounded-xl text-sm">Làm trắc nghiệm →</a></div>
    <div class="custom-card rounded-2xl">${items.map(v => `<div class="flex items-center gap-3 p-3 border-b" ${border}>
      <span class="w-9 text-xs text-slate-400">#${v.id}</span>${speakBtn(L, v.id)}
      <div class="w-28 md:w-36"><div class="text-xl font-bold">${showWord(v.word)}</div><div class="text-xs text-red-600 font-semibold">${v.pinyin}</div></div>
      <div class="text-sm flex-1">${v.meaning || '—'}${v.pos ? ` <span class="ml-1 px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-[10px] font-bold">${v.pos}</span>` : ''}</div></div>`).join('')}</div>`);
}

/* ====== QUIZ ====== */
let Q = null;
function renderSetup(L, n) {
  const items = partItems(L, n);
  if (!items.length) return renderParts(L);
  const groups = [];
  for (let g = 0; g < 5; g++) {
    const arr = items.slice(g * 20, g * 20 + 20);
    if (arr.length) groups.push([`Nhóm ${g + 1} (${arr[0].id} - ${arr[arr.length - 1].id})`, `Từ "${first(arr[0].word)}" đến "${first(arr[arr.length - 1].word)}"`]);
  }
  const radio = (i, a, b) => `<label class="flex items-center p-3.5 custom-sub rounded-2xl cursor-pointer hover:border-red-400">
    <input type="radio" name="grp" value="${i}" ${i === '0' ? 'checked' : ''} class="w-4 h-4 accent-red-600"><div class="ml-3"><span class="block font-semibold text-sm">${a}</span><span class="block text-xs text-slate-400">${b}</span></div></label>`;
  view(`<a href="#/hsk${L}/p/${n}" class="text-xs font-semibold text-slate-500 hover:text-red-600">← Quay lại danh sách</a>
    <h1 class="text-2xl md:text-3xl font-extrabold text-red-600 text-center my-4">Trắc Nghiệm HSK ${L} (Phần ${n}: Từ ${items[0].id} - ${items[items.length - 1].id})</h1>
    <div class="custom-card rounded-3xl shadow-xl p-5 md:p-8 space-y-6">
      <h2 class="text-2xl font-bold text-center">Cấu hình bài luyện tập</h2>
      <div><p class="text-sm font-semibold mb-3">1. Chọn nhóm từ vựng cần ôn:</p><div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        ${groups.map((g, i) => radio(String(i), g[0], g[1])).join('')}${radio('all', `Tất cả (${items[0].id} - ${items[items.length - 1].id})`, `Gộp chung ${items.length} từ`)}</div></div>
      <div class="grid md:grid-cols-2 gap-4">
        <div><p class="text-sm font-semibold mb-2">2. Số lượng câu hỏi:</p><select id="qcount" class="w-full p-3 custom-sub rounded-xl text-sm font-medium">
          <option value="10">Luyện nhanh (10 câu)</option><option value="20" selected>Bộ 20 câu (Theo nhóm)</option><option value="all">Toàn bộ từ trong nhóm đã chọn</option></select></div>
        <div><p class="text-sm font-semibold mb-2">3. Thứ tự câu hỏi:</p><div class="grid grid-cols-2 gap-2">
          <label class="flex items-center justify-center p-3 custom-sub rounded-xl cursor-pointer"><input type="radio" name="ord" value="seq" checked class="accent-red-600"><span class="ml-2 text-xs font-semibold">Theo thứ tự</span></label>
          <label class="flex items-center justify-center p-3 custom-sub rounded-xl cursor-pointer"><input type="radio" name="ord" value="rand" class="accent-red-600"><span class="ml-2 text-xs font-semibold">Ngẫu nhiên</span></label></div></div></div>
      <button onclick="startQuiz(${L},${n})" class="w-full py-4 ${btnRed} rounded-2xl shadow-lg">Bắt Đầu Ôn Tập →</button></div>`);
}
function startQuiz(L, n) {
  const items = partItems(L, n), g = document.querySelector('input[name=grp]:checked').value;
  let pool = (g === 'all' ? items : items.slice(+g * 20, +g * 20 + 20)).filter(v => v.meaning);
  if (document.querySelector('input[name=ord]:checked').value === 'rand') shuffle(pool);
  const c = $('#qcount').value; if (c !== 'all') pool = pool.slice(0, +c);
  beginQuiz(L, n, pool);
}
function beginQuiz(L, n, list) { Q = { L, n, list, i: 0, ok: 0, bad: 0, wrong: [], done: false }; renderQuestion(); }
function renderQuestion() {
  const q = Q.list[Q.i]; Q.done = false;
  const others = [...new Set(D[Q.L].filter(v => v.meaning).map(v => v.meaning))].filter(m => m !== q.meaning);
  Q.choices = shuffle([q.meaning, ...shuffle(others).slice(0, 3)]);
  view(`<div class="custom-card rounded-3xl shadow-xl p-5 md:p-8 space-y-5">
    <div class="flex justify-between text-sm text-slate-500"><span>Tiến trình: <b class="text-red-600">${Q.i + 1}</b>/<b>${Q.list.length}</b></span>
      <span><b class="text-emerald-500">● Đúng: ${Q.ok}</b> &nbsp; <b class="text-rose-500">● Sai: ${Q.bad}</b></span></div>
    <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2"><div class="bg-red-600 h-2 rounded-full" style="width:${((Q.i + 1) / Q.list.length) * 100}%"></div></div>
    <div class="custom-sub rounded-3xl text-center py-10 px-4 relative">
      <span class="absolute top-4 left-4 px-2.5 py-1 bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300 text-xs font-bold rounded-lg">HSK ${Q.L}</span>
      <span class="absolute top-4 right-4 text-xs font-bold text-slate-400">#${q.id}</span>
      <div class="flex items-center justify-center gap-3"><h3 class="text-5xl md:text-6xl font-extrabold">${showWord(q.word)}</h3>${speakBtn(Q.L, q.id)}</div>
      <p id="pinyin" class="text-2xl text-red-600 dark:text-red-400 font-semibold mt-3 h-8 opacity-0 transition-opacity">${q.pinyin}</p></div>
    <div class="grid md:grid-cols-2 gap-3">${Q.choices.map((c, i) => `<button onclick="pick(${i})" class="opt w-full p-4 text-left border rounded-2xl custom-sub hover:border-red-400 flex items-center">
      <span class="badge w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0">${'ABCD'[i]}</span><span class="font-semibold">${c}</span></button>`).join('')}</div>
    <div id="fb" class="hidden"></div></div>`);
  speakId(Q.L, q.id);
}
function pick(i) {
  if (Q.done) return; Q.done = true;
  const q = Q.list[Q.i], right = Q.choices.indexOf(q.meaning), ok = i === right;
  document.querySelectorAll('.opt').forEach((b, k) => {
    b.disabled = true;
    const paint = c => { b.classList.add(`border-${c}-500`, `bg-${c}-100`, `text-${c}-900`, `dark:bg-${c}-950`, `dark:text-${c}-200`); b.querySelector('.badge').className = `badge w-8 h-8 rounded-xl bg-${c}-500 text-white flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0`; };
    if (k === right) paint('emerald'); else if (k === i) paint('rose');
  });
  $('#pinyin').classList.remove('opacity-0');
  if (ok) Q.ok++; else { Q.bad++; Q.wrong.push(q); }
  const c = ok ? 'emerald' : 'rose', last = Q.i + 1 >= Q.list.length, fb = $('#fb');
  fb.className = `p-4 rounded-2xl flex items-center justify-between gap-3 bg-${c}-50 dark:bg-${c}-950/50 border border-${c}-300 dark:border-${c}-800`;
  fb.innerHTML = `<div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-${c}-500 text-white flex items-center justify-center text-lg">${ok ? '✓' : '✕'}</div>
    <div><p class="font-bold text-${c}-800 dark:text-${c}-300">${ok ? 'Chính xác!' : 'Chưa chính xác!'}</p><p class="text-xs text-slate-500">${ok ? 'Nghĩa' : 'Đáp án đúng là'}: ${q.meaning}</p></div></div>
    <button onclick="nextQ()" class="px-6 py-2.5 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl text-sm">${last ? 'Xem kết quả' : 'Tiếp Tục'} →</button>`;
}
function nextQ() { Q.i++; Q.i < Q.list.length ? renderQuestion() : renderResult(); }
function renderResult() {
  const pct = Math.round((Q.ok / Q.list.length) * 100);
  view(`<div class="custom-card rounded-3xl shadow-xl p-5 md:p-8 space-y-6">
    <h2 class="text-3xl font-extrabold text-center">Hoàn Thành Đợt Luyện Tập!</h2>
    <div class="grid grid-cols-3 gap-3 text-center">
      <div class="rounded-2xl p-4 bg-red-50 dark:bg-red-950/30"><span class="block text-[11px] font-bold text-red-600 uppercase">Tỉ lệ đúng</span><b class="text-3xl text-red-600">${pct}%</b></div>
      <div class="rounded-2xl p-4 bg-emerald-50 dark:bg-emerald-950/30"><span class="block text-[11px] font-bold text-emerald-600 uppercase">Câu đúng</span><b class="text-3xl text-emerald-600">${Q.ok}</b></div>
      <div class="rounded-2xl p-4 bg-rose-50 dark:bg-rose-950/30"><span class="block text-[11px] font-bold text-rose-500 uppercase">Câu sai</span><b class="text-3xl text-rose-600">${Q.bad}</b></div></div>
    <div><div class="flex justify-between items-center mb-2"><h3 class="font-bold text-sm">⚠ Danh sách từ cần lưu ý:</h3>
      ${Q.wrong.length ? `<button onclick="beginQuiz(Q.L,Q.n,shuffle([...Q.wrong]))" class="px-3.5 py-1.5 ${btnRed} rounded-lg text-xs">Ôn lại riêng câu sai</button>` : ''}</div>
      <div class="max-h-60 overflow-y-auto custom-sub rounded-2xl">${Q.wrong.length ? Q.wrong.map(w => `<div class="p-3 flex items-center gap-3 border-b" style="border-color:var(--border-color)">${speakBtn(Q.L, w.id)}
        <div class="w-32"><b class="text-lg">${showWord(w.word)}</b> <span class="text-xs text-red-600 font-semibold">[${w.pinyin}]</span></div><span class="text-sm flex-1">${w.meaning}</span></div>`).join('')
        : '<p class="p-6 text-center text-slate-400 text-sm">Tuyệt vời! Bạn không sai câu nào.</p>'}</div></div>
    <div class="flex flex-col sm:flex-row gap-3">
      <button onclick="beginQuiz(Q.L,Q.n,Q.list)" class="flex-1 py-3.5 ${btnRed} rounded-xl text-sm">Làm Lại Đợt Này</button>
      <a href="#/hsk${Q.L}/p/${Q.n}/quiz" class="flex-1 py-3.5 custom-sub font-semibold rounded-xl text-sm text-center">Thay Đổi Tùy Chọn</a></div></div>`);
}

route();
