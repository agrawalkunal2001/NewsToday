import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles=[
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": "Posted by sumanan",
            "title": "Mumbai Drug Bust Case Live Updates: Aryan Khan Custody Needed Till Monday, Anti-Drugs Agency Tells Court - NDTV",
            "description": "Aryan Khan, son of movie star Shah Rukh Khan, will be produced in court today in the Mumbai drugs-on-cruise case.",
            "url": "https://www.ndtv.com/india-news/mumbai-drug-bust-case-live-updates-aryan-khans-narcotics-control-bureau-custody-ends-today-2566610",
            "urlToImage": "https://c.ndtvimg.com/2021-10/nulv4no4_aryan-khan-afp_625x300_04_October_21.jpg",
            "publishedAt": "2021-10-07T10:23:18Z",
            "content": "Mumbai Drug Bust Case Updates: Aryan Khan will be produced in court.\r\nNew Delhi: Aryan Khan, son of movie star Shah Rukh Khan, will be produced in court today in the Mumbai drugs-on-cruise case. On M… [+6263 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "BJP Acts Against Varun Gandhi After His Tweets On Farmers Run Over - NDTV",
            "description": "The names of Varun Gandhi and his mother Maneka Gandhi were dropped from the fresh list of the 80-member BJP national executive posted today amid a flurry of tweets by the BJP MP, condemning the events of UP's Lakhimpur Kheri.",
            "url": "https://www.ndtv.com/india-news/varun-gandhi-mother-maneka-gandhi-removed-from-top-bjp-body-after-his-tweets-condemning-farmers-killing-in-up-2566940",
            "urlToImage": "https://c.ndtvimg.com/2019-03/eha7geh_varun-gandhimaneka-gandhi_625x300_26_March_19.jpg",
            "publishedAt": "2021-10-07T09:40:00Z",
            "content": "New Delhi: The names of Varun Gandhi and his mother Maneka Gandhi were dropped from the fresh list of the 80-member BJP national executive posted today amid a flurry of tweets by the BJP MP, condemni… [+3386 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "hindustantimes.com",
            "title": "Aryan Khan arrest: Nawab Malik releases new videos, questions Wankhede - Hindustan Times",
            "description": "\"Why was he not sure about the number of arrests. Did they have an intention to frame 2 more people?\" Nawab Malik said. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/aryan-khan-arrest-nawab-malik-releases-new-videos-asks-2-questions-to-wankhede-101633596614856.html",
            "urlToImage": "https://images.hindustantimes.com/img/2021/10/07/1600x900/f4aa7de6-2543-11ec-97ad-def1feb12b09_1633596625194_1633596657299.jpg",
            "publishedAt": "2021-10-07T08:57:12Z",
            "content": "Nationalist Congress Party leader Nawab Malik has released another video purportedly showing Kiran P Gosavi and Manish Bhanushali entering and leaving the NCB office the same night the cruise ship wa… [+2583 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Tenzin Chodon",
            "title": "Should people be taking medicines to lower cholesterol? - Times of India",
            "description": "Cholesterol has earned itself a bad name, considering it's association with many cardiovascular ailments. However, it is not the substance itself that is bad, rather high levels of it that increases your risk of heart diseases.",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/should-people-be-taking-medicines-to-lower-cholesterol/photostory/86834578.cms",
            "urlToImage": "https://static.toiimg.com/photo/86834589.cms",
            "publishedAt": "2021-10-07T08:30:00Z",
            "content": "Cholesterol has earned itself a bad name, considering it's association with many cardiovascular ailments. However, it is not the substance itself that is bad, rather high levels of it that increases … [+1249 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "Nuking a rogue asteroid is a safe strategy for Earth after all, says study - WION",
            "description": "A rogue asteroid hitting Earth to end human civilisation as we know it is very much possible. Last time such an asteroid hit Earth, it eliminated more than half of life on the planet and ended the reign of dinosaurs. To avoid such a fate, space agencies aroun…",
            "url": "https://www.wionews.com/science/rogue-asteroid-nuclear-bomb-safe-strategy-earth-study-418831",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2021/02/08/181728-untitled-design-2.jpg",
            "publishedAt": "2021-10-07T08:27:51Z",
            "content": "A rogue asteroid hitting Earth to end human civilisation as we know it is very much possible. Last time such an asteroid hit Earth, it eliminated more than half of life on the planet and ended the re… [+1388 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Mukesh Ambani Brings 7-Eleven Stores To India, First One In Mumbai - NDTV",
            "description": "Mukesh Ambani, Asia's richest man, will bring 7-Eleven Inc.'s convenience stores to India, adding to his burgeoning retail empire in the world's only billion-people-plus consumer market that's open to foreign firms.",
            "url": "https://www.ndtv.com/india-news/first-7-11-store-opens-in-mumbai-on-weekend-part-of-mukesh-ambani-retail-empire-2566800",
            "urlToImage": "https://c.ndtvimg.com/2021-10/45e7jrso_mukesh-ambani_650x400_07_October_21.jpg",
            "publishedAt": "2021-10-07T07:58:00Z",
            "content": "The first 7-Eleven store will open Saturday in Mumbai.\r\nMukesh Ambani, Asia's richest man, will bring 7-Eleven Inc.'s convenience stores to India, adding to his burgeoning retail empire in the world'… [+3647 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "IIT Student Arrested For Posting Morphed Pics Of Young Girls - NDTV",
            "description": "A 19-year-old IIT student was arrested from Bihar on Thursday for allegedly stalking girl students and teachers of a reputed school in Delhi and uploading their morphed pictures on social media, police said.",
            "url": "https://www.ndtv.com/delhi-news/iit-student-arrested-for-posting-morphed-pics-of-young-girls-2566883",
            "urlToImage": "https://i.ndtvimg.com/i/2017-05/arrest-generic_650x400_41495967190.jpg",
            "publishedAt": "2021-10-07T07:54:50Z",
            "content": "Police said his phone and laptop were seized. (Representational)\r\nNew Delhi: A 19-year-old IIT student was arrested from Bihar on Thursday for allegedly stalking girl students and teachers of a reput… [+2653 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ThePrint"
            },
            "author": "Abantika Ghosh",
            "title": "The India connection to world’s first malaria vaccine, now approved by WHO - ThePrint",
            "description": "WHO gave its nod to RTS,S after pilot projects in Malawi, Ghana and Kenya found significant reduction in incidence of severe disease.",
            "url": "https://theprint.in/health/the-india-connection-to-worlds-first-malaria-vaccine-now-approved-by-who/746683/",
            "urlToImage": "https://static.theprint.in/wp-content/uploads/2021/10/RTSS-vaccine_MVIP_Ghana_2019-1-1.jpg",
            "publishedAt": "2021-10-07T07:44:47Z",
            "content": "New Delhi: Scientific efforts that spanned three decades came to fruition Wednesday when the World Health Organisation (WHO) gave its nod to the worlds first vaccine against any parasitic disease. \r\n… [+6692 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "\"Intimidating\": Dubai Ruler Tried To Buy 30 Million Pound Home Next To Ex - NDTV",
            "description": "Dubai's ruler Sheikh Mohammed bin Rashid al-Maktoum tried to buy one of the most expensive properties for sale in Britain which overlooked his ex-wife's rural estate, in a \"deliberate\" act that was \"intimidating\", a senior British judge has ruled.",
            "url": "https://www.ndtv.com/world-news/intimidating-dubai-ruler-sheikh-mohammed-bin-rashid-al-maktoum-tried-to-buy-30-million-pound-house-next-to-ex-wife-haya-bint-al-hussein-2566834",
            "urlToImage": "https://c.ndtvimg.com/2019-07/4ltusa1s_sheikh-mohammed-bin-rashid-almaktoum-princess-haya-reuters_625x300_30_July_19.jpg",
            "publishedAt": "2021-10-07T07:40:00Z",
            "content": "Jordanian Princess Haya bint al-Hussein, had raised the matter at the High Court in London. (File)\r\nLondon: Dubai's ruler Sheikh Mohammed bin Rashid al-Maktoum tried to buy one of the most expensive … [+3778 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "hindustantimes.com",
            "title": "Ajit Pawar confirms income tax raids on firms, shares 'only grief' - Hindustan Times",
            "description": "“I don’t know whether they were conducted for political purposes or they want more information as we have been paying taxes on time,” Ajit Pawar said. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/ajit-pawar-confirms-income-tax-raids-on-firms-shares-only-grief-101633591877306.html",
            "urlToImage": "https://images.hindustantimes.com/img/2021/10/07/1600x900/Some_firms_related_to_Ajit_Pawar_were_raided_1633591926868_1633591927023.jpg",
            "publishedAt": "2021-10-07T07:35:36Z",
            "content": "Maharashtra deputy chief minister Ajit Pawar said on Thursday that some firms related to him were raided by the income tax department earlier in the day. Pawar said he has no complaint, but feels bad… [+1006 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": "Satvik Khare",
            "title": "Realme GT Neo 2 India Launch on October 13, Key Specifications Confirmed - Gadgets 360",
            "description": "Realme GT Neo 2's launch date in India has been confirmed for October 13 at 12:30pm IST. The smartphone's specifications have also been confirmed via the microsite on Realme's website. It will be powered by a Snapdragon 870 SoC and will sport a Samsung E4 AMO…",
            "url": "https://gadgets.ndtv.com/mobiles/news/realme-gt-neo-2-launch-october-13-12-30pm-ist-specifications-snapdragon-870-soc-2566831",
            "urlToImage": "https://i.gadgets360cdn.com/large/realme_gt_neo_2_india_launch_1633590971984.jpg",
            "publishedAt": "2021-10-07T07:24:12Z",
            "content": "Realme GT Neo 2's launch date in India is set for October 13, Realme confirmed through a press note and a microsite on the company's website. The smartphone will be launched through a virtual event t… [+1808 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": null,
            "title": "A rare object with a 7,20,000 km-long-tail detected cruising in the solar system - India Today",
            "description": "The unique object was discovered to be active in July 2021 by the Asteroid Terrestrial-Impact Last Alert System (ATLAS) survey.",
            "url": "https://www.indiatoday.in/science/story/asteroid-2005-qn173-comet-atlas-survey-nasa-jpl-1861877-2021-10-07",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/2005_NGC173-647x363.jpeg?iNsB9475N5G9wghM63QABILOqQZCu2Dp",
            "publishedAt": "2021-10-07T07:20:42Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Cricbuzz"
            },
            "author": null,
            "title": "India trainer Nick Webb resigns, to leave after T20 WC | Cricbuzz.com - Cricbuzz - Cricbuzz",
            "description": "The New Zealander, who was appointed in 2019, has revealed that he won't be seeking an extension",
            "url": "https://www.cricbuzz.com/cricket-news/119331/india-trainer-nick-webb-resigns-to-leave-after-t20-world-cup",
            "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c214928/webb-was-appointed-by-the-bcci.jpg",
            "publishedAt": "2021-10-07T07:18:01Z",
            "content": "Webb was appointed by the BCCI in 2019. © Getty\r\nTeam India trainer Nick Webb has decided to leave. The New Zealander has said that he will not be part of the Indian team post the upcoming Twenty20 W… [+3435 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Phone Numbers Shown In Squid Game Lead To Barrage Of Prank Calls. Netflix's Damage Control Move - NDTV Movies",
            "description": "Citing a confirmation from Netflix, The Verge reported that the numbers that appear in Squid Game will be revised or edited out",
            "url": "https://www.ndtv.com/entertainment/phone-numbers-shown-in-squid-game-lead-to-barrage-of-prank-calls-netflixs-damage-control-move-2566777",
            "urlToImage": "https://c.ndtvimg.com/2021-10/0sp15rbg_squid-game_625x300_07_October_21.jpg",
            "publishedAt": "2021-10-07T06:37:21Z",
            "content": "Netflix's Squid Game has become widely over the days following its release\r\nHighlights\r\n<ul><li>'Squid Game' released on Netflix internationally last month\r\n</li><li>Some scenes contain phone numbers… [+2131 chars]"
          },
          {
            "source": {
              "id": "google-news",
              "name": "Google News"
            },
            "author": null,
            "title": "Tata Motors, Nazara, Bata, other stocks hit 52-week highs on BSE; 9 stocks at 52-wk lows on F&O expiry day - The Financial Express",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMilgFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9tYXJrZXQvdGF0YS1tb3RvcnMtbmF6YXJhLWJhdGEtb3RoZXItc3RvY2tzLWhpdC01Mi13ZWVrLWhpZ2hzLW9uLWJzZS05LXN0b2Nrcy1hdC01Mi13ay1sb3dzLW9uLWZvLWV4cGlyeS1kYXkvMjM0NTUyNC_SAZsBaHR0cHM6Ly93d3cuZmluYW5jaWFsZXhwcmVzcy5jb20vbWFya2V0L3RhdGEtbW90b3JzLW5hemFyYS1iYXRhLW90aGVyLXN0b2Nrcy1oaXQtNTItd2Vlay1oaWdocy1vbi1ic2UtOS1zdG9ja3MtYXQtNTItd2stbG93cy1vbi1mby1leHBpcnktZGF5LzIzNDU1MjQvbGl0ZS8?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-10-07T06:32:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Thewire.in"
            },
            "author": "Debdutta Paul",
            "title": "AstroSat Catches Nuclear Reactions Spreading Across a Neutron Star - The Wire Science",
            "description": "A study has shed important new light on the astrophysics of the thermonuclear bursts of neutron stars, using AstroSat data.",
            "url": "https://science.thewire.in/the-sciences/astrosat-laxpc-thermonuclear-burst-spreading-across-neutron-star/",
            "urlToImage": "https://cdn.thewire.in/wp-content/uploads/2021/10/06213632/Screenshot-2021-10-06-at-9.35.06-PM.png",
            "publishedAt": "2021-10-07T06:29:09Z",
            "content": "An artist’s rendering of a compact neutron star with a disc of gas and dust swirling around it. Illustration: Raphael.concorde/Wikimedia Commons, CC BY-SA 4.0\r\n<ul><li>Occasionally, the radiation emi… [+8512 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Kumar Shakti Shekhar",
            "title": "Why Priyanka Gandhi Vadra’s Lakhimpur Kheri visit isn’t like Indira Gandhi’s Belchi moment - Times of India",
            "description": "India News: Once again, it is being touted as Congress general secretary Priyanka Gandhi Vadra’s Belchi moment. Her efforts to visit Lakhimpur Kheri to meet the b",
            "url": "https://timesofindia.indiatimes.com/india/why-priyanka-gandhi-vadras-lakhimpur-kheri-visit-isnt-like-indira-gandhis-belchi-moment/articleshow/86831827.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-86831852,width-1070,height-580,imgsize-69668,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-10-07T06:06:00Z",
            "content": "If arrest of Mrs Indira Gandhi on October 3,1977 proved to be the undoing of Janta Partys govt , the arrest of Pri https://t.co/Pzic4T0xxv\r\n— Sunil Jakhar (@sunilkjakhar) 1633321987000"
          },
          {
            "source": {
              "id": "google-news",
              "name": "Google News"
            },
            "author": null,
            "title": "7% Population In India Still Reluctant of COVID-19 Vaccines: Here's What Stopping Them - TheHealthSite",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMijwFodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS9uZXdzLzctcG9wdWxhdGlvbi1pbi1pbmRpYS1zdGlsbC1yZWx1Y3RhbnQtb2YtY292aWQtMTktdmFjY2luZXMtcmVhc29ucy13aHktcGVvcGxlLWFyZS1ub3QtZ2V0dGluZy1qYWJiZWQtODQxMjExL9IBkwFodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS9uZXdzLzctcG9wdWxhdGlvbi1pbi1pbmRpYS1zdGlsbC1yZWx1Y3RhbnQtb2YtY292aWQtMTktdmFjY2luZXMtcmVhc29ucy13aHktcGVvcGxlLWFyZS1ub3QtZ2V0dGluZy1qYWJiZWQtODQxMjExL2FtcC8?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-10-07T06:06:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "Times Now Digital",
            "title": "Jammu and Kashmir: Terrorists shoot dead Sikh school principal and Hindu teacher in Srinagar targeted attack - Times Now",
            "description": "Kashmir terror attack - One of the victims was identified as school principal Sukhvinder Kaur while the second victim was teacher Deepak.",
            "url": "https://www.timesnownews.com/india/article/terrorists-open-fire-at-hindu-school-principal-and-teacher-in-jammu-and-kashmir/821288",
            "urlToImage": "https://imgk.timesnownews.com/story/Kashmir-attack_0.jpg?tr=w-560,h-292,fo-top",
            "publishedAt": "2021-10-07T06:05:00Z",
            "content": "Srinagar: In a ghastly targeted attack, unidentified terrorists on Thursday shot dead two non-Muslim teachers, one of them a school principal, in the Kashmir Valley. Both the teachers had sustained i… [+3047 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "ET Telecom",
            "title": "Amazon launches Fire TV Stick 4K Max with Wi-Fi 6 at Rs 6,499 - ETTelecom.com",
            "description": "The device claims to be 40% more powerful than Fire TV Stick 4K and has faster app startups along with improved navigation smoothness.",
            "url": "https://telecom.economictimes.indiatimes.com/news/amazon-launches-fire-tv-stick-4k-max-with-wi-fi-6-at-rs-6499/86831563",
            "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-86831563,imgsize-20044,width-800,height-434,overlay-ettelecom/amazon-launches-fire-tv-stick-4k-max-with-wi-fi-6-at-rs-6-499.jpg",
            "publishedAt": "2021-10-07T05:51:00Z",
            "content": "NEW DELHI: Amazon Thursday launched its new streaming stick in India the Amazon Fire TV Stick 4K Max with Wi-Fi 6 and priced it at Rs 6,499.The device claims to be 40% more powerful than Fire TV Stic… [+744 chars]"
          }
        ]

    constructor(){
        super();
        this.state={ // State is used when data is changes dynamically
            articles1: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines</h2>
                <div className="row">
                {this.state.articles1.map((element) => {
                  return   <div className="col-md-4 my-3" key={element.url}/* Each element must return a unique key. Here url is the unique key*/>
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
                })}
                </div>
            </div>
        )
    }
}
