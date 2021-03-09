/*
    Author: Jacob Jimenez
    Strategy:
    AUM $: 
    All-Time Gain:
    3 months:
    6 months:
    1 Year:
    3 Year:
    5 Year:
*/

/////////////////////////////////////////////////////////////////////////
//                            VARIABLES                                //
/////////////////////////////////////////////////////////////////////////

// Reddit stuff
// Subreddit list
const SUBREDDITS_LIST = ["valueinvesting", "stocks", "SecurityAnalysis", "PennyStocksDD", "Stock_Picks"] ;
// Can you guess?
var SUBREDDIT ;
// What this is?
var SUB_URL = "https://www.reddit.com/r/"+SUBREDDIT+"/.json?limit=100" ;

// Value investors club URL
const VIC_URL = "https://www.valueinvestorsclub.com/ideas" ;
const VIC_LOGIN_URL = "https://www.valueinvestorsclub.com/login";

// Utradea URL
const UTRA_URL = "https://utradea.com/session/signin";
const UTRA_LOGIN_URL = "https://utradea.com/session/signin";

// Credentials
const SECRET = require('./assets/creds.json');

// small Db
const db = require('./assets/db.json');

/////////////////////////////////////////////////////////////////////////
//                           / VARIABLES                               //
/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//                               MODULES                               //
/////////////////////////////////////////////////////////////////////////

const puppeteer = require('puppeteer');

/////////////////////////////////////////////////////////////////////////
//                              / MODULES                              //
/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//                            FUNCTIONS                                //
/////////////////////////////////////////////////////////////////////////


async function getVICPicks() { 
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    // scrape requirements
    await page.setViewport({width: 1920, height: 1080});

    // wait until page load
    await page.goto(VIC_LOGIN_URL, { waitUntil: 'networkidle0' });

    // This selects their logo
    await page.keyboard.press('Tab');

    // Get input for username
    await page.keyboard.press('Tab');
    page.keyboard.sendCharacter(SECRET.VIC.USER);

    // Get input for username
    await page.keyboard.press('Tab');
    page.keyboard.sendCharacter(SECRET.VIC.PASS);

    // click and wait for navigation
    await Promise.all([
      page.click('#login_btn'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    await page.screenshot({ path: 'vic.png' });

    await browser.close();
   };

async function getRedditPicks() { return false };  

/////////////////////////////////////////////////////////////////////////
//                           / FUNCTIONS                               //
/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//                                 MAIN                                //
/////////////////////////////////////////////////////////////////////////

  async function main() {

    getVICPicks();

  }

  main();

/////////////////////////////////////////////////////////////////////////
//                                / MAIN                               //
/////////////////////////////////////////////////////////////////////////
