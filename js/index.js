var quotes = [
    {
        quoteCaption: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        quoteAuthor: "― Dr. Seuss"
    },
    {
        quoteCaption: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
        quoteAuthor: "― William W. Purkey"
    },
    {
        quoteCaption: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        quoteAuthor: "― Bernard M. Baruch"
    },
    {
        quoteCaption: "“A room without books is like a body without a soul.”",
        quoteAuthor: "― Marcus Tullius Cicero"
    },
    {
        quoteCaption: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        quoteAuthor: "― Albert Einstein"
    },
    {
        quoteCaption: "“So many books, so little time.”",
        quoteAuthor: "― Frank Zappa"
    },
    {
        quoteCaption: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        quoteAuthor: "― Marilyn Monroe"
    },
    {
        quoteCaption: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        quoteAuthor: "― Maya Angelou"
    },
    {
        quoteCaption: "“If you tell the truth, you don't have to remember anything.”",
        quoteAuthor: "― Mark Twain"
    },
    {
        quoteCaption: "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
        quoteAuthor: "― Albert Camus"
    },
    {
        quoteCaption: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        quoteAuthor: "― J.K. Rowling, Harry Potter and the Goblet of Fire"
    }
];


function changeQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteCaption").textContent = `"${quotes[randomQuote].quoteCaption}"`;
    document.getElementById("quoteAuthor").textContent = `"${quotes[randomQuote].quoteAuthor}"`;
    quoteCaption.classList.remove("d-none")
    quoteAuthor.classList.remove("d-none")
}
