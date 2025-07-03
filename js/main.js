const quotes = [
  { quote: "“Be yourself; everyone else is already taken.”", author: "― Oscar Wilde" },
  { quote: "“I'm selfish, impatient and a little insecure...”", author: "― Marilyn Monroe" },
  { quote: "“So many books, so little time.”", author: "― Frank Zappa" },
  { quote: "“Two things are infinite: the universe and human stupidity...”", author: "― Albert Einstein" },
  { quote: "“A room without books is like a body without a soul.”", author: "― Cicero" },
  { quote: "“Be who you are and say what you feel...”", author: "― Bernard Baruch" },
  { quote: "“You've gotta dance like there's nobody watching...”", author: "― William W. Purkey" },
  { quote: "“You know you're in love when you can't fall asleep...”", author: "― Dr. Seuss" },
  { quote: "“You only live once, but if you do it right, once is enough.”", author: "― Mae West" },
  { quote: "“In three words I can sum up everything I've learned about life: it goes on.”", author: "― Robert Frost" },
  { quote: "“If you want to know what a man's like...”", author: "― J.K. Rowling" },
  { quote: "“Don’t walk in front of me… just be my friend”", author: "― Albert Camus" },
  { quote: "“If you tell the truth, you don't have to remember anything.”", author: "― Mark Twain" },
  { quote: "“People will forget what you said... but never how you made them feel.”", author: "― Maya Angelou" },
  { quote: "“To live is the rarest thing in the world...”", author: "― Oscar Wilde" },
  { quote: "“A friend is someone who knows all about you and still loves you.”", author: "― Elbert Hubbard" },
  { quote: "“Always forgive your enemies; nothing annoys them so much.”", author: "― Oscar Wilde" },
  { quote: "“Hate cannot drive out hate: only love can do that.”", author: "― Martin Luther King Jr." },
  { quote: "“You miss 100% of the shots you don't take.”", author: "--Wayne Gretzky" },
  { quote: "“Success is not final, failure is not fatal...”", author: "― Winston Churchill" },
  { quote: "“Happiness depends upon ourselves.”", author: "― Aristotle" },
  { quote: "“The only way to do great work is to love what you do.”", author: "― Steve Jobs" },
  { quote: "“It does not matter how slowly you go as long as you do not stop.”", author: "― Confucius" },
  { quote: "“In the middle of every difficulty lies opportunity.”", author: "― Albert Einstein" },
  { quote: "“What lies behind us... are tiny matters compared to what lies within us.”", author: "― Emerson" },
  { quote: "“Dream big and dare to fail.”", author: "― Norman Vaughan" },
  { quote: "“Life is 10% what happens and 90% how you react.”", author: "― Swindoll" },
  { quote: "“The best way out is always through.”", author: "― Robert Frost" },
  { quote: "“You must be the change you wish to see in the world.”", author: "― Gandhi" }
];

let unusedIndexes = [...Array(quotes.length).keys()];

// جلب مؤشر عشوائي بدون تكرار، ويُعيد تعبئة إذا انتهت الاقتباسات
function getRandomIndex() {
  if (unusedIndexes.length === 0) {
    unusedIndexes = [...Array(quotes.length).keys()];
  }
  const randomPos = Math.floor(Math.random() * unusedIndexes.length);
  return unusedIndexes.splice(randomPos, 1)[0];
}

// تحديث عداد الاقتباسات المتبقية مع صياغة عربية صحيحة
function updateCounter() {
  const counterEl = document.getElementById("counter");
  const left = unusedIndexes.length;
  if (left === 0) {
    counterEl.textContent = `انتهت الاقتباسات، سيتم إعادة التعيين تلقائياً.`;
  } else if (left === 1) {
    counterEl.textContent = `تبقى اقتباس واحد من ${quotes.length}`;
  } else {
    counterEl.textContent = `تبقى ${left} اقتباسات من ${quotes.length}`;
  }
}

// عرض اقتباس، إما بالرقم المحدد أو عشوائي
function showQuote(index = null) {
  const quoteEl = document.getElementById("quoteOutput");
  const authorEl = document.getElementById("authorOutput");

  // تأثير اختفاء تدريجي
  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    const i = index !== null ? index : getRandomIndex();
    const q = quotes[i];

    quoteEl.textContent = q.quote;
    authorEl.textContent = q.author;

    updateCounter();

    localStorage.setItem("lastQuoteIndex", i);

    // تأثير ظهور تدريجي
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 1;
  }, 400);
}

// نسخ الاقتباس مع عرض رسالة بدون alert
function copyQuote() {
  const quote = document.getElementById("quoteOutput").textContent;
  const author = document.getElementById("authorOutput").textContent;
  navigator.clipboard.writeText(`${quote}\n${author}`).then(() => {
    showToast("✅ تم نسخ الاقتباس!");
  }).catch(() => {
    showToast("⚠️ حدث خطأ أثناء النسخ");
  });
}

// إعادة تعيين الاقتباسات وحذف حفظ آخر اقتباس
function resetQuotes() {
  unusedIndexes = [...Array(quotes.length).keys()];
  localStorage.removeItem("lastQuoteIndex");
  document.getElementById("quoteOutput").textContent = "اضغط الزر للحصول على اقتباس";
  document.getElementById("authorOutput").textContent = "";
  document.getElementById("counter").textContent = "";
}

// عرض رسالة منبثقة قصيرة (toast)
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// عند تحميل الصفحة: استرجاع آخر اقتباس وحذفه من unusedIndexes لتحديث العداد
window.onload = function () {
  const savedIndex = localStorage.getItem("lastQuoteIndex");
  if (savedIndex !== null) {
    const savedI = parseInt(savedIndex);
    unusedIndexes = unusedIndexes.filter(i => i !== savedI);
    showQuote(savedI);
  }
};

// ربط الأزرار بالوظائف
document.getElementById("newQuoteBtn").addEventListener("click", () => showQuote());
document.getElementById("copyQuoteBtn").addEventListener("click", copyQuote);
document.getElementById("resetBtn").addEventListener("click", resetQuotes);
