var quotes = []
function displayQuote() {
    quotes = [
        {
            quote: ' " Be yourself; everyone else is already taken. " ',
            author: "― Oscar Wilde"
        },
        {
            quote: ' "Be mindful. Be grateful. Be positive. Be true. Be kind." ',
            author: "― Roy T. Bennett"
        }
        ,
        {
            quote: ' " A room without books is like a body without a soul. " ',
            author: "― Marcus Tullius"
        },
        {
            quote: ' " Be the change that you wish to see in the world." ',
            author: "― Mahatma Gandhi"
        },
        {
            quote: ' "Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down." ',
            author: "―Roy T. Bennett, The Light in the Heart"
        },

        {
            quote: ' " Respect other people\'s feelings. It might mean nothing to you, but it could mean everything to them " ',
            author: "― Roy T. Bennett"
        },
        {
            quote: ' " Do not waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy." ',
            author: "― Roy T. Bennett"
        },
        {
            quote: ' " three words I can sum up everything I\'ve learned about life: it goes on." ',
            author: "― Robert Frost"
        },
        {
            quote: ' " Live as if you were to die tomorrow. Learn as if you were to live forever." ',
            author: "― Mahatma Gandhi"
        },
        {
            quote: ' " It is better to be hated for what you are than to be loved for what you are not." ',
            author: "― Andre Gide"
        },
        {
            quote: ' " Everything you can imagine is real." ',
            author: "― Pablo Picasso"
        }


    ];
    var random = Math.floor(Math.random() * quotes.length)
    var i = random;
    for (; i <= random; i++) {
        console.log(i)
        document.getElementById("specialQuote").innerHTML = quotes[i].quote;
        document.getElementById("specialAuthor").innerHTML = quotes[i].author;
    }

}

