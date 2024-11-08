const puppeteer = require("puppeteer-extra");
const ExcelJS = require("exceljs");
const mongoose = require('mongoose');
const fs = require('node:fs');
const {fundamentalData} = require("./models/fundamentalData.js");
require('dotenv').config()

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

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
        return e.message;
    }
}

console.log("Welcome to the world of scraping!!");
scrapeFundamentalData(process.env.GURU_USERNAME , process.env.GURU_PASSWORD);