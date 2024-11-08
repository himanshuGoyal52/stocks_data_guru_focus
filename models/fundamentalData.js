const Mongoose = require('mongoose');

const fundamentalDataSchema = new Mongoose.Schema(
{   
    symbol : {type : String , required : true},
    sector : {type : String , required : true},
    params : [
        {
            date : {type: Date },
            market_cap : {type: String },
            stock_pe : {type: String },
            ind_pe : {type: String},
            opm : { type : String },
            roe : { type : String },
            roce : { type : String },
            debt_equity : { type : String },
            price_book : { type : String },
            peg_ratio : { type : String },
            sales_3_yrs : { type : String },
            profit_3_yrs : { type : String },
            price_3_yrs : { type : String },
            cwip : { type : String },
            promoters_stake : { type : String },
            fii_stake_change : { type : String },
            dii_stake_change : { type : String },
            interest_coverage : { type : String },
            current_ratio : { type : String },
            piotrowski_score : { type : String },
        },
    ]
},
{
    timestamps : true,
}
);

const fundamentalData = Mongoose.model('fundamentalData' , fundamentalDataSchema);

module.exports = {
    fundamentalData
}