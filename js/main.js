var usedIndexes = [];

var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle...”",
    author: "― Marilyn Monroe",
  },
  {
    quote: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
  {
    quote: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
    author: "― William W. Purkey",
  },
  {
    quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "― Dr. Seuss",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "― Robert Frost",
  },
  {
    quote: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    author: "― J.K. Rowling",
  },
  {
    quote: "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
    author: "― Albert Camus",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain",
  },
  {
    quote: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    author: "― Maya Angelou",
  },
  {
    quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "― Oscar Wilde",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },
  {
    quote: "“Always forgive your enemies; nothing annoys them so much.”",
    author: "― Oscar Wilde",
  },
  {
    quote: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
    author: "― Martin Luther King Jr.",
  },
  {
    quote: "“You miss 100% of the shots you don't take.”",
    author: "--Wayne Gretzky",
  },
  {
    quote: "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
    author: "― Winston Churchill",
  },
  {
    quote: "“Happiness depends upon ourselves.”",
    author: "― Aristotle",
  },
  {
    quote: "“The only way to do great work is to love what you do.”",
    author: "― Steve Jobs",
  },
  {
    quote: "“It does not matter how slowly you go as long as you do not stop.”",
    author: "― Confucius",
  },
  {
    quote: "“In the middle of every difficulty lies opportunity.”",
    author: "― Albert Einstein",
  },
  {
    quote: "“What lies behind us and what lies before us are tiny matters compared to what lies within us.”",
    author: "― Ralph Waldo Emerson",
  },
  {
    quote: "“Dream big and dare to fail.”",
    author: "― Norman Vaughan",
  },
  {
    quote: "“Life is 10% what happens to us and 90% how we react to it.”",
    author: "― Charles R. Swindoll",
  },
  {
    quote: "“The best way out is always through.”",
    author: "― Robert Frost",
  },
  {
    quote: "“You must be the change you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
];

function randomIndex() {
  if (usedIndexes.length === quotes.length) {
    usedIndexes = [];
  }
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (usedIndexes.includes(index));
  usedIndexes.push(index);
  return index;
}

function showQuote() {
  var newIndex = randomIndex();
  document.getElementById("quoteOutput").textContent = quotes[newIndex].quote;
  document.getElementById("authorOutput").textContent = "- " + quotes[newIndex].author;
}
