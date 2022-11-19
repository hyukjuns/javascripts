const quotes = [
    {
        quote: "hello thanks 1",
        author: "hyukjun 1"   
    },
    {
        quote: "hello thanks 2",
        author: "hyukjun 2"   
    },
    {
        quote: "hello thanks 3",
        author: "hyukjun 3"   
    },
    {
        quote: "hello thanks 4",
        author: "hyukjun 4"   
    },
    {
        quote: "hello thanks 5",
        author: "hyukjun 5"   
    },
    {
        quote: "hello thanks 6",
        author: "hyukjun 6"   
    },
    {
        quote: "hello thanks 7",
        author: "hyukjun 7"   
    },
    {
        quote: "hello thanks 8",
        author: "hyukjun 8"   
    },
    {
        quote: "hello thanks 9",
        author: "hyukjun 9"   
    },
    {
        quote: "hello thanks 10",
        author: "hyukjun 10"   
    },

]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;