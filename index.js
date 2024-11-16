const puppeteer = require("puppeteer-extra");
const ExcelJS = require("exceljs");
const mongoose = require('mongoose');
const fs = require('node:fs');
const {fundamentalData} = require("./models/fundamentalData.js");
const all_params = require("./para.js")
require('dotenv').config()

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin())

var exchange = "NSE"; // {NSE , BOM}
// |*symbol*|
var login_url = "https://www.gurufocus.com/login/";

const connectMongo = async () => {
    await mongoose.connect(process.env.MONGODB_LOCAL_URI);
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

/* 
first filter : 500 cr and more 
second filter : 200 cr and less than 500
*/
var filter_value_low = 500;
var filter_value_high = null;

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
    
    await page.waitForNavigation();

    let starttt = 299;
    let enddd = 480;
    let stocks_symbols = await getStocksSymbols();
    // let stocks_symbols = ["NSE:TATAMOTORS"]

    //==================================Premium data=============================================//
    let download_reps = "";
    for(let i=starttt ; i<=Math.min(enddd , 819) ; i++){

        // market cap filter [Start] //
        // document.getElementById("def_body_detail_height").querySelector("font").innerHTML
        let market_cap_url = `https://www.gurufocus.com/term/mktcap/${stocks_symbols[i]}`;
        await page.goto(market_cap_url , { waitUntil: 'networkidle2' });
        let market_cap_data_string = await page.$eval('#def_body_detail_height > h1' , el => el.innerHTML);
        market_cap_data_string = market_cap_data_string.trim();

        if(market_cap_data_string.includes("Mil")){
            let mc_arru = market_cap_data_string.split(">: ");
            if(mc_arru[1]){
                let final_mc = mc_arru[1].split(" ")[0];
                
                let finall_mc = parseInt ( final_mc.substring(1 , final_mc.length).replace(/\,/g, '') );
                let finall_mc_cr = finall_mc / 10;

                if(filter_value_low > finall_mc_cr){
                    console.log(`${stocks_symbols[i]}_${i}: Market cap is ${finall_mc_cr} cr. which is lower than ${filter_value_low} cr. and higher than ${filter_value_high} cr.`)
                    continue;
                }
            }
        }

        // market cap filter [End]   //

        let dataObj = {
            symbol : stocks_symbols[i],
            exchange : exchange
        }

        

        for(let key in all_params){
            let sub_params = all_params[key];
            let finally_mill_gaya = [];
            let finally_obj_map = {};
            
            for(let j=0 ; j<sub_params.length ; j++){
                let url = sub_params[j].iframe_url;
                url = url.replaceAll("|*symbol*|" , stocks_symbols[i]);
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
                    if(page_headings.includes(stocks_symbols[i]) && page_headings.includes("data :")){
                        aaruoa.push(page_headings);
                    }
                }
                //console.log(aaruoa[0]);
                //console.log(aaruoa[1]);
                if(aaruoa.length <= 0 || !aaruoa[0]){
                    continue;
                }
                let data_split_arr = aaruoa[0].split("data :");
                let final_arr = [];
                for(let z=0 ; z<data_split_arr.length ; z++){
                    if(data_split_arr[z].includes("[[")){
                        final_arr.push(data_split_arr[z]);
                    }
                }
                let two_d_array = final_arr[0];
                let end_idx = two_d_array.indexOf("]]");
                try{
                    finally_mill_gaya = JSON.parse(
                        two_d_array.substring(0 , end_idx+2)
                    );
                    // console.log(finally_mill_gaya);
                }catch(e){
                    
                    console.log(stocks_symbols[i] +"_"+ i + " "  + " : " + e.message + " [" + sub_params[j].name + "]");
                    download_reps += stocks_symbols[i] +"_"+ i + " "  + " : " + e.message + " [" + sub_params[j].name + "]" + "\n";
                    continue;
                }
                

                

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
                let finally_array = [];
                for(let f=0 ; f<finally_mill_gaya.length ; f++){
                    if(finally_mill_gaya[f][1]){
                        finally_array.push({
                            "date" : new Date(finally_mill_gaya[f][0]),
                            "value" : finally_mill_gaya[f][1]
                        })
                    }
                }

                finally_obj_map[sub_params[j].name] = finally_array;

            }

            
            dataObj[key] = finally_obj_map;

        }

        let data_added_res = await saveDataToMongoDB(dataObj);
        console.log(stocks_symbols[i] +"_"+ i + " "  + " : " + data_added_res.toString());
        download_reps += stocks_symbols[i] +"_"+ i + " "  + " : " + data_added_res.toString() + "\n";

    }
    //==================================Premium data=============================================//
    
    /*fs.writeFile(`./download_reports/report_${exchange}_s${starttt}_e${enddd}_${new Date().toISOString().split("T")[0]}.txt` , download_reps , err => {
        if(err){
            console.log(err);
        }else{
            console.log("Files write success!");
        }
    })*/

    await browser.close();

    // let _data = await fundamentalData.findById("66f7ddf89e6b8496b3fe9c41");
    // console.log(_data);

    try{
        await disconnectMongo();
        console.log("Mongodb disconnected :(");
    }catch(e){
        return e.message;
    }
}

console.log("Welcome to the world of scraping!!");
scrapeFundamentalData(process.env.GURU_USERNAME , process.env.GURU_PASSWORD);