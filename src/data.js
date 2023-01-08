import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"
export const pageLinks=[
    {id:1,href:"#home",text:"home"},
    {id:2,href:"#about",text:"about"},
    {id:3,href:"#services",text:"services"},
    {id:4,href:"#tours",text:"tours"}
];

export const socialLinks=[
    {id:1, href: "https://www.facebook.com",icon:"fab fa-facebook"},
    {id:2, href: "https://www.twitter.com",icon:"fab fa-twitter"},
    {id:3, href: "https://www.squarespace.com",icon:"fab fa-squarespace"},
];

 export const servicesLink=[
    {
        id:1,
        icon:"fas fa-wallet fa-fw",
        title:"saving money",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    },
    {
        id:2,
        icon:"fas fa-tree fa-fw",
        title:"endless hiking",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    },
    {
        id:3,
        icon:"fas fa-socks fa-fw",
        title:"amazing comfort",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    }
 ];
 export const toursLink=[
    {
        id:1,
        image:tour1,
        date:"august 26th, 2020",
        title:"Tibet Adventure",
        info:"Tashi Delek! Adventures In Tibet is a Tibetan owned travel agency in Lhasa. Dedicated to offering fun, safe and affordable tours and trekking adventures in Tibet",
        location:"China",
        duration:6,
        location2:2100
    },
    {
        id:2,
        image:tour2,
        date:"October 1th, 2020",
        title:"Best Of Java",
        info:"Java is one of the Indonesian islands that’s gaining popularity for it’s amazing volcanoes, fantastic temples and breathtaking landscapes. Java has it all.",
        location:"Indonesia",
        duration:11,
        location2:1400
    },
    {
        id:3,
        image:tour3,
        date:"September 15th, 2020",
        title:"Explore Hong Kong",
        info:"Honk Gong began as an island settlement 45 miles off the coast of the Eastern coast of Asaina. Although it was just a small fishing village at the time, the economic.",
        location:"Honk-Gonk",
        duration:8,
        location2:5000
    },
    {
        id:4,
        image:tour4,
        date:"December 5th, 2019",
        title:"Kenya Highlights",
        info:"Kenya – the name is almost synonymous with the word  Few other places on the planet conjure such a spirit of adventure and romance. The diversity of things.",
        location:"Kenya",
        duration:6 ,
        location2:3300
       
    },
 ]