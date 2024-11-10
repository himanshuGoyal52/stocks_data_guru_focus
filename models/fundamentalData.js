const Mongoose = require('mongoose');

const fundamentalDataSchema = new Mongoose.Schema(
{   
    symbol : {type : String , required : true},
    exchange : {type : String , required : true},
    fundamental : {type: Map, of: Array},
    valuation_ratio : {type: Map, of: Array},
    profitability : {type: Map, of: Array},
    price : {type: Map, of: Array},
    dividends : {type: Map, of: Array},
    income_statement : {type: Map, of: Array},
    balance_sheet : {type: Map, of: Array},
    cashflow_statement : {type: Map, of: Array}
},
{
    timestamps : true,
}
);

const fundamentalData = Mongoose.model('guruFocusData' , fundamentalDataSchema);

module.exports = {
    fundamentalData
}