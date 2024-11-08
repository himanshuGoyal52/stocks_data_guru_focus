const puppeteer = require("puppeteer-extra");
const ExcelJS = require("exceljs");
const mongoose = require('mongoose');
const fs = require('node:fs');
const {fundamentalData} = require("./models/fundamentalData.js");
require('dotenv').config()

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

/*
// Fundamental
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=zscore [Altman Z-Score]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=z2score [Altman Z2-Score]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=mscore [Beneish M-Score]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=Book%20Value%20Per%20Share [book-value-per-share]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=cash_per_share [cash-per-share]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=cyclically_adjusted_book [cyclically-adjusted-book]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=cyclically_adjusted_fcf [cyclically-adjusted-fcf]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=cyclically_adjusted_rvn [cyclically-adjusted-rvn]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=Dividends%20Per%20Share [dividends-per-share]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=e10 [E10]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=per%20share%20eps [earning-per-share-diluted]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=EBIT_per_share [ebit-per-share]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=EBITDA_per_share [ebitda-per-share]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ev [enterprise-value]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=eps_nri [eps-without-nri]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=per%20share_freecashflow  [free-cash-flow-per-share]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ins_owner [Insider Ownership]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=insti_owner [Institutional Ownership]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=mktcap [Market Cap]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=gscore [Mohanram G-Score]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=netcash [Net Cash per Share]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=NCAV_real [Net Current Asset Value]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=NCAV [Net-Net Working Capital]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=Cash_Flow_from_Operations_per_share [Operating Cash Flow per Share]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=Owner_Earnings [Owner Earnings per Share]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=fscore [Piotroski F-Score]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=per%20share%20rev [Revenue per Share]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=SNOA [Scaled Net Operating Assets]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=Tangibles_book_per_share [Tangible Book per Share]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=Total_Debt_Per_Share [Total Debt per Share]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=growth_per_share_ebitda [YoY EBITDA Growth]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=growth_per_share_eps [YoY EPS Growth]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=growth_per_share_rev [YoY Rev. per Sh. Growth]

// Valuation Ratio
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=roiic_1y [1-Year ROIIC %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=roiic_3y [3-Year ROIIC %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=roiic_5y [5-Year ROIIC %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=roiic_10y [10-Year ROIIC %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=rore_3y [3-Year RORE %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=rore_5y [5-Year RORE %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=rore_10y [10-Year RORE %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=turnover [Asset Turnover]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=buyback_yield [Buyback Yield %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=capex_to_operating_cash_flow [Capex-to-Operating-Cash-Flow]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=capex_to_operating_income [Capex-to-Operating-Income]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=capex_to_revenue [Capex-to-Revenue]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=CCC [Cash Conversion Cycle]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=cash_ratio [Cash Ratio]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=cash2debt [Cash-to-Debt]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=cogs2rev [COGS-to-Revenue]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=current_ratio [Current Ratio]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=cyclically_adjusted_pb [Cyclically Adjusted PB Ratio]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=cyclically_adjusted_pfcf [Cyclically Adjusted Price-to-FCF]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=cyclically_adjusted_ps [Cyclically Adjusted PS Ratio]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=DaysInventory [Days Inventory]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=DaysPayable [Days Payable]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=DaysSalesOutstanding [Days Sales Outstanding]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=debt2asset [Debt-to-Asset]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=debt2ebitda [Debt-to-EBITDA]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=deb2equity [Debt-to-Equity]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=debt2rev [Debt-to-Revenue]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=degree_of_financial_leverage [Degree of Financial Leverage]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=degree_of_operating_leverage [Degree of Operating Leverage]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=earning_yield_greenblatt [Earnings Yield (Joel Greenblatt) %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=EffectiveInterestRate [Effective Interest Rate on Debt %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=equity2asset [Equity-to-Asset] 
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ev2ebit [EV-to-EBIT] 
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ev2ebitda [EV-to-EBITDA]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ev2fcf [EV-to-FCF]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ev2rev [EV-to-Revenue]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=FCFyield [FCF Yield %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=RateOfReturn [Forward Rate of Return (Yacktman) %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=goodwill2asset [Goodwill-to-Asset]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=grossprofit2asset [Gross-Profit-to-Asset %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=interest_coverage [Interest Coverage]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=InventoryTurnover [Inventory Turnover]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=inventory2rev [Inventory-to-Revenue]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=liabilities_to_assets [Liabilities-to-Assets]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ltd2asset [LT-Debt-to-Total-Asset]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=net_debt_paydown_yield [Net Debt Paydown Yield %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=pb [PB Ratio]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=pe [PE Ratio]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=pettm [PE Ratio (TTM)]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=penri [PE Ratio without NRI]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=forwardPE [Forward PE Ratio]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=peg [PEG Ratio]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=pfcf [Price-to-Free-Cash-Flow]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=pocf [Price-to-Operating-Cash-Flow]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=p2Owner_Earnings [Price-to-Owner-Earnings]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=p2tangible_book [Price-to-Tangible-Book]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ps [PS Ratio]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=quick_ratio [Quick Ratio]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=receivables_turnover [Receivables Turnover]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ROTA [Return-on-Tangible-Asset]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ROTE [Return-on-Tangible-Equity]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ROA [ROA %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ROC [ROC %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ROC_JOEL [ROC (Joel Greenblatt) %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ROCE [ROCE %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ROE [ROE %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=roe_adj [ROE % Adjusted to Book Value]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ROIC [ROIC %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=shareholder_yield [Shareholder Yield %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=share_buyback_ratio [Shares Buyback Ratio %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=ShillerPE [Shiller PE Ratio]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=sloanratio [Sloan Ratio %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=TotalPayoutRatio [Total Payout Ratio]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=TotalPayoutYield [Total Payout Yield %]
https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=wacc [WACC %]

*/

var exchange = "NSE"; // {NSE , BOM}
var login_url = "https://www.gurufocus.com/login/";
var data_url = "https://www.gurufocus.com/term/";
var fundamentals_parameter = [ 
    // "mktcap",
    "pe-ratio"
    // "operating-margin",
    // "roe",
    // "roce",
    // "debt-to-equity",
    // "pb-ratio",
    // "peg-ratio",
    // "rvn-growth-3y",
    // "ebitda-growth-3y",
    // "cashflow-growth-3y",
    // "interest-coverage",
    // "current-ratio",
    // "fscore"
];

const connectMongo = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
}
const disconnectMongo = async () => {
    await mongoose.disconnect();
}

const saveDataToMongoDB = async (dataObj) => {
    const fd = new fundamentalData(dataObj);
    try{
        const newfd = await fd.save();
        return "Done";
    }catch(e){
        return e.message;
    }
}

const getStocksSymbols = async () => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("GURU_FOCUS_NSE_BOM.xlsx");
    let worksheet = workbook.getWorksheet(exchange);
    let symbol_data = worksheet.getSheetValues();

    let processed_data = [];
    for(let i=2 ; i<symbol_data.length ; i++){
        if(symbol_data[i]){
            for(let j=0 ; j<symbol_data[i].length ; j++){
                if(symbol_data[i][j]){
                    processed_data.push(symbol_data[i][j]);
                }
            }
        }
    }
    
    return processed_data;
}

const scrapeFundamentalData = async (username , password) => {
    try{
        await connectMongo();
        console.log("Mongodb Connected :)");
    }catch(e){
        console.log(e.message);
        return e.message;
    }

    const browser = await puppeteer.launch({headless : true});
    const page = await browser.newPage();

    await page.goto(login_url);

    await page.waitForSelector(`[id="login-dialog-name-input"]` , {visible : true});

    // login form //
    await page.screenshot({path: "./images/1_login_page.png"});

    await page.type(`[id="login-dialog-name-input"]` , username);
    await page.type(`[id="login-dialog-pass-input"]` , password);

    await page.screenshot({path : "./images/2_login_page_filled.png"});

    await page.click('[type=button]');
    
    // await page.waitForNetworkIdle();
    await page.waitForNavigation();
    // await page.waitForSelector("div[id=el-popover-975]" , {visible : true});

    //let stocks_symbols = await getStocksSymbols();
    let stocks_symbols = ["NSE:TATAMOTORS"]

    // Premium data
    for(let i=0 ; i<1 ; i++){
        for(let j=0 ; j<fundamentals_parameter.length ; j++){
            //let url = data_url + fundamentals_parameter[j] + "/" + stocks_symbols[i];
            let url = "https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=NSE:TATAMOTORS&series[]=pe"
            await page.goto(url , { waitUntil: 'networkidle2' });

            // await page.waitForNetworkIdle();

            // await page.waitForSelector('[id="median"]' , {visible : true});

            // await page.click('[id="median"]');

            // await page.click("g ::-p-text(All)");


            // const targetUrlPart = '/interactive_chart_json_morn.php'; // Replace with the unique part of the XHR request URL

        
            
            // await page.waitForSelector("h1" , {visible : true});

            //await page.screenshot({path : "./images/" + fundamentals_parameter[j] + ".png"})

            const bodyHandle = await page.$$('script');
            let aaruoa = [];
            for(let z=0 ; z < bodyHandle.length ; z++){
                const page_headings = await page.evaluate((body) => {
                    // native broswer //
                    return body.innerHTML;
                } , bodyHandle[z]);
    
                await bodyHandle[z].dispose();

                // console.log(page_headings);
                if(page_headings.includes("NSE:TATAMOTORS") && page_headings.includes("data :")){
                    aaruoa.push(page_headings);
                }
            }


            //console.log(aaruoa[0]);
            //console.log(aaruoa[1]);
            
            let data_split_arr = aaruoa[0].split("data :");
            let final_arr = [];
            

            for(let z=0 ; z<data_split_arr.length ; z++){
                if(data_split_arr[z].includes("[[")){
                    final_arr.push(data_split_arr[z]);
                }
            }

            let two_d_array = final_arr[0];

            let end_idx = two_d_array.indexOf("]]");
            let finally_mill_gaya = JSON.parse(
                two_d_array.substring(0 , end_idx+2)
            );

            console.log(finally_mill_gaya);


            // console.log("===================================================");
            
            // fs.writeFile("./zero.html" , aaruoa[0] , err => {
            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log("Files write success!");
            //     }
            // })

            // fs.writeFile("./first.html" , aaruoa[1] , err => {
            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log("Files write success!");
            //     }
            // })
            // console.log("===================================================");

            // console.log(page_headings);
        }
    }

    await browser.close();

    let _data = await fundamentalData.findById("66f7ddf89e6b8496b3fe9c41");
    console.log(_data);

    try{
        await disconnectMongo();
        console.log("Mongodb disconnected :(");
    }catch(e){
        console.log(e.message);
        return e.message;
    }
}

console.log("Welcome to the world of scraping!!");
scrapeFundamentalData(process.env.GURU_USERNAME , process.env.GURU_PASSWORD);