// Google Translate language switcher
// Handles EN/繁 toggle and shows the translation notice banner.

var currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('cces_lang', lang); } catch (e) {}

  // Update button states
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.textContent.trim() === (lang === 'zh' ? '繁' : 'EN'));
  });

  // Show/hide translation notice
  var notice = document.getElementById('translate-notice');
  if (notice) notice.style.display = lang === 'zh' ? 'block' : 'none';

  // Apply Google Translate
  applyTranslate(lang);
}

function applyTranslate(lang, attempt) {
  attempt = attempt || 0;
  var combo = document.querySelector('.goog-te-combo');
  if (combo) {
    combo.value = (lang === 'zh') ? 'zh-TW' : '';
    combo.dispatchEvent(new Event('change'));
    if (lang !== 'zh') {
      document.cookie = 'googtrans=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }
  } else if (attempt < 75) {
    setTimeout(function () { applyTranslate(lang, attempt + 1); }, 200);
  }
}

// Restore language preference on page load
try {
  var saved = localStorage.getItem('cces_lang');
  if (saved === 'zh') setLang('zh');
} catch (e) {}
