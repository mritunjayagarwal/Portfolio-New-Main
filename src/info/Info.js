import self from "../img/self.jpeg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mritunjay",
    lastName: "Agarwal",
    initials: "ma", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🎮',
            text: 'fueled by playing games'
        },
        {
            emoji: '🌎',
            text: 'based in Bengaluru'
        },
        {
            emoji: "💼",
            text: "Software Development Engineer 1 at Springworks"
        },
        {
            emoji: "📧",
            text: "mrityuunjay.agarwal@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/mrityuunjay.agarwal/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/mritunjayagarwal/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/mritunjay01/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: "Bonjour! I’m Mritunjay Agarwal, a Software Engineer at Springworks. I’ve got a background in Computer Science and a big love for building clean, scalable systems that actually make life easier. Outside of work, I’m usually geeking out over new tech, going for walks to clear my head, or deep in thought about how AI might just end up running the world someday (kinda exciting, kinda terrifying, right?). Always up for a good convo or a fun project—let’s connect!",
    skills:
    {
        proficientWith: ['nodejs', 'javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'java', 'sql', 'mongoDB', 'tailwind'],
        exposedTo: ['figma', 'adobe xd', 'python']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cycling',
            emoji: '🚴'
        }
    ],
    portfolio: [
        {
            title: "WebLayer Domain Marketplace",
            live: "https://domain-search-49l5.onrender.com/",
            source: "https://github.com/mritunjayagarwal",
            image: mock1
        },
        {
            title: "IEEE GLA University",
            live: "https://iscon-2k23.netlify.app/",
            source: "https://github.com/mritunjayagarwal",
            image: mock7
        },
        {
            title: "SYNK BOT Crypto Coin",
            live: "https://synk-rev.vercel.app/",
            source: "https://github.com/mritunjayagarwal",
            image: mock8
        },
        {
            title: "DLF Gurgaon",
            live: "https://dlftest.netlify.app/",
            source: "https://github.com/mritunjayagarwal",
            image: mock2
        },
        {
            title: "Indipaisa Merchant",
            live: "https://indipaisa.netlify.app",
            source: "https://github.com/mritunjayagarwal",
            image: mock3
        },
        {
            title: "Bettel Gaming",
            live: "https://bettle-gaming.netlify.app/",
            source: "https://github.com/mritunjayagarwal",
            image: mock4
        },
        {
            title: "Blackfort Crypto Marketplace",
            live: "https://blackfort-exchange.netlify.app/",
            source: "https://github.com/mritunjayagarwal",
            image: mock5
        },
        {
            title: "Quant Finance DEX Swap",
            live: "https://quantfinance.vercel.app/",
            source: "https://github.com/mritunjayagarwal",
            image: mock6
        },
    ]
}