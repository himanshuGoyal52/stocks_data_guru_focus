let all_params = {
  "fundamental": [
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=zscore',
      name: 'altman_z_score'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=z2score',
      name: 'altman_z2_score'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=mscore',
      name: 'beneish_m_score'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Book%20Value%20Per%20Share',
      name: 'book_value_per_share'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=cash_per_share',
      name: 'cash_per_share'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=cyclically_adjusted_book',
      name: 'cyclically_adjusted_book'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=cyclically_adjusted_fcf',
      name: 'cyclically_adjusted_fcf'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=cyclically_adjusted_rvn',
      name: 'cyclically_adjusted_rvn'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Dividends%20Per%20Share',
      name: 'dividends_per_share'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=e10',
      name: 'e10'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=per%20share%20eps',
      name: 'earning_per_share_diluted'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=EBIT_per_share',
      name: 'ebit_per_share'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=EBITDA_per_share',
      name: 'ebitda_per_share'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ev',
      name: 'enterprise_value'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=eps_nri',
      name: 'eps_without_nri'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=per%20share_freecashflow ',
      name: 'free_cash_flow_per_share'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ins_owner',
      name: 'insider_ownership'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=insti_owner',
      name: 'institutional_ownership'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=mktcap',
      name: 'market_cap'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=gscore',
      name: 'mohanram_g_score'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=netcash',
      name: 'net_cash_per_share'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=NCAV_real',
      name: 'net_current_asset_value'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=NCAV',
      name: 'net_net_working_capital'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Cash_Flow_from_Operations_per_share',
      name: 'operating_cash_flow_per_share'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Owner_Earnings',
      name: 'owner_earnings_per_share'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=fscore',
      name: 'piotroski_f_score'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=per%20share%20rev',
      name: 'revenue_per_share'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=SNOA',
      name: 'scaled_net_operating_assets'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Tangibles_book_per_share',
      name: 'tangible_book_per_share'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Total_Debt_Per_Share',
      name: 'total_debt_per_share'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=growth_per_share_ebitda',
      name: 'yoy_e_b_i_t_d_a_growth'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=growth_per_share_eps',
      name: 'yoy_e_p_s_growth'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=growth_per_share_rev',
      name: 'yoy_rev_per_sh_growth'
    },
  ],
  "valuation_ratio": [
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=roiic_1y',
      name: '1_year_r_o_i_i_c_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=roiic_3y',
      name: '3_year_r_o_i_i_c_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=roiic_5y',
      name: '5_year_r_o_i_i_c_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=roiic_10y',
      name: '10_year_r_o_i_i_c_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=rore_3y',
      name: '3_year_r_o_r_e_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=rore_5y',
      name: '5_year_r_o_r_e_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=rore_10y',
      name: '10_year_r_o_r_e_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=turnover',
      name: 'asset_turnover'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=buyback_yield',
      name: 'buyback_yield_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=capex_to_operating_cash_flow',
      name: 'capex_to_operating_cash_flow'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=capex_to_operating_income',
      name: 'capex_to_operating_income'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=capex_to_revenue',
      name: 'capex_to_revenue'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=CCC',
      name: 'cash_conversion_cycle'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=cash_ratio',
      name: 'cash_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=cash2debt',
      name: 'cash_to_debt'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=cogs2rev',
      name: 'c_o_g_s_to_revenue'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=current_ratio',
      name: 'current_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=cyclically_adjusted_pb',
      name: 'cyclically_adjusted_p_b_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=cyclically_adjusted_pfcf',
      name: 'cyclically_adjusted_price_to_f_c_f'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=cyclically_adjusted_ps',
      name: 'cyclically_adjusted_p_s_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=DaysInventory',
      name: 'days_inventory'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=DaysPayable',
      name: 'days_payable'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=DaysSalesOutstanding',
      name: 'days_sales_outstanding'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=debt2asset',
      name: 'debt_to_asset'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=debt2ebitda',
      name: 'debt_to_e_b_i_t_d_a'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=deb2equity',
      name: 'debt_to_equity'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=debt2rev',
      name: 'debt_to_revenue'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=degree_of_financial_leverage',
      name: 'degree_of_financial_leverage'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=degree_of_operating_leverage',
      name: 'degree_of_operating_leverage'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=earning_yield_greenblatt',
      name: 'earnings_yield_joel_greenblatt_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=EffectiveInterestRate',
      name: 'effective_interest_rate_on_debt_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=equity2asset',
      name: 'equity_to_asset_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ev2ebit',
      name: 'e_v_to_e_b_i_t_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ev2ebitda',
      name: 'e_v_to_e_b_i_t_d_a'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ev2fcf',
      name: 'e_v_to_f_c_f'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ev2rev',
      name: 'e_v_to_revenue'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=FCFyield',
      name: 'f_c_f_yield_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=RateOfReturn',
      name: 'forward_rate_of_return_yacktman_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=goodwill2asset',
      name: 'goodwill_to_asset'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=grossprofit2asset',
      name: 'gross_profit_to_asset_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=interest_coverage',
      name: 'interest_coverage'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=InventoryTurnover',
      name: 'inventory_turnover'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=inventory2rev',
      name: 'inventory_to_revenue'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=liabilities_to_assets',
      name: 'liabilities_to_assets'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ltd2asset',
      name: 'l_t_debt_to_total_asset'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=net_debt_paydown_yield',
      name: 'net_debt_paydown_yield_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=pb',
      name: 'p_b_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=pe',
      name: 'p_e_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=pettm',
      name: 'p_e_ratio_ttm_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=penri',
      name: 'p_e_ratio_without_n_r_i'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=forwardPE',
      name: 'forward_p_e_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=peg',
      name: 'p_e_g_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=pfcf',
      name: 'price_to_free_cash_flow'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=pocf',
      name: 'price_to_operating_cash_flow'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=p2Owner_Earnings',
      name: 'price_to_owner_earnings'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=p2tangible_book',
      name: 'price_to_tangible_book'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ps',
      name: 'p_s_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=quick_ratio',
      name: 'quick_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=receivables_turnover',
      name: 'receivables_turnover'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ROTA',
      name: 'return_on_tangible_asset'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ROTE',
      name: 'return_on_tangible_equity'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ROA',
      name: 'roa_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ROC',
      name: 'roc_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ROC_JOEL',
      name: 'roc_joel_greenblatt_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ROCE',
      name: 'roce_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ROE',
      name: 'roe_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=roe_adj',
      name: 'r_o_e_adjusted_to_book_value'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ROIC',
      name: 'r_o_i_c_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=shareholder_yield',
      name: 'shareholder_yield_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=share_buyback_ratio',
      name: 'shares_buyback_ratio_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ShillerPE',
      name: 'shiller_p_e_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=sloanratio',
      name: 'sloan_ratio_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=TotalPayoutRatio',
      name: 'total_payout_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=TotalPayoutYield',
      name: 'total_payout_yield_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=wacc',
      name: 'wacc_'
    }
  ],
  "profitability": [
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ebitda_margin',
      name: 'e_b_i_t_d_a_margin_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=FCFmargin',
      name: 'f_c_f_margin_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=grossmargin',
      name: 'gross_margin_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=netmargin',
      name: 'net_margin_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=operatingmargin',
      name: 'operating_margin_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=pretaxmargin',
      name: 'pretax_margin_'
    }
  ],
  "price": [
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=beta',
      name: 'beta'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=EPV',
      name: 'earnings_power_value_e_p_v_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=grahamnumber',
      name: 'graham_number'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=iv_dcEarning',
      name: 'intrinsic_value_d_c_f_earnings_based_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=iv_dcf',
      name: 'intrinsic_value_d_c_f_f_c_f_based_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=iv_dcf_dividend',
      name: 'intrinsic_value_d_c_f_dividends_based_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=iv_dcf_share',
      name: 'intrinsic_value_projected_f_c_f'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=medpsvalue',
      name: 'median_p_s_value'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=lynchvalue',
      name: 'peter_lynch_fair_value'
    }
  ],
  "dividends": [
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=payout',
      name: 'dividend_payout_ratio'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=yield',
      name: 'dividend_yield_'
    }
  ],
  "income_statement": [
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=COGS',
      name: 'cost_of_goods_sold'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=DDA',
      name: 'depreciation_depletion_and_amortization'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=EBIT',
      name: 'e_b_i_t'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=EBITDA',
      name: 'e_b_i_t_d_a'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=eps_basic',
      name: 'e_p_s_basic_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=eps_diluated',
      name: 'e_p_s_diluted_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=general_admin_expense',
      name: 'general_and_admin_expense'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Gross%20Profit',
      name: 'gross_profit'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=InterestExpense',
      name: 'interest_expense'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=InterestIncome',
      name: 'interest_income'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Net%20Income',
      name: 'net_income'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Net%20Income%20(Continuing%20Operations)',
      name: 'net_income_continuing_operations_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Net%20Income%20(Discontinued%20Operations)',
      name: 'net_income_discontinued_operations_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=net_income_including_noncontrolling_interests',
      name: 'net_income_including_noncontrolling_interests'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=NetInterestIncome',
      name: 'net_interest_income'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Non%20Operating%20Income',
      name: 'non_operating_income'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Operating%20Income',
      name: 'operating_income'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=OtherIncomeExpense',
      name: 'other_income_expense_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=OtherIncome_minorityinterest',
      name: 'other_income_minority_interest_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=other_net_income_loss',
      name: 'other_net_income_loss_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=other_operating_charges',
      name: 'other_operating_expense'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Pretax%20Income',
      name: 'pre_tax_income'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=IS_preferred_dividends',
      name: 'preferred_dividends'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=RD',
      name: 'research_development'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Revenue',
      name: 'revenue'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=selling_market_expense',
      name: 'selling_and_marketing_expense'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=SGA',
      name: 'selling_general_admin_expense'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=shares_basic',
      name: 'shares_outstanding_basic_average_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Shares%20Outstanding',
      name: 'shares_outstanding_diluted_average_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=tax',
      name: 'tax_expense'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=TaxProvision',
      name: 'tax_provision'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=TaxRate',
      name: 'tax_rate_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=TotalOperatingExpense',
      name: 'total_operating_expense'
    }
  ],
  "balance_sheet": [
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=AccountsPayable',
      name: 'accounts_payable'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Accts%20Payable',
      name: 'accounts_payable_accrued_expense'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Accts%20Rec.',
      name: 'accounts_receivable'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=AccumulatedDepreciation',
      name: 'accumulated_depreciation'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=accumulated_other_comprehensive_income',
      name: 'accumulated_other_comprehensive_income_loss_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=AdditionalPaidInCapital',
      name: 'additional_paid_in_capital'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=BuildingsAndImprovements',
      name: 'buildings_and_improvements_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=CashAndCashEquivalents',
      name: 'cash_and_cash_equivalents'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Cash%20and%20Equiv',
      name: 'cash_cash_equivalents_marketable_securities'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=CommonStock',
      name: 'common_stock'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ConstructionInProgress',
      name: 'construction_in_progress'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=CurrentAccruedExpenses',
      name: 'current_accrued_expense'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=CurrentDeferredRevenue',
      name: 'current_deferred_revenue'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=CurrentDeferredTaxesLiabilities',
      name: 'current_deferred_taxes_liabilities'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=BS_CurrentDeferredLiabilities',
      name: 'deferred_tax_and_revenue'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Goodwill',
      name: 'goodwill'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=GrossPPE',
      name: 'gross_property_plant_and_equipment'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Intangibles',
      name: 'intangible_assets'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=FinishedGoods',
      name: 'inventories_finished_goods'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=InventoriesAdjustmentsAllowances',
      name: 'inventories_inventories_adjustments'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=OtherInventories',
      name: 'inventories_other'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=RawMaterials',
      name: 'inventories_raw_materials_components'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=WorkInProcess',
      name: 'inventories_work_in_process'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=InvestmentsAndAdvances',
      name: 'investments_and_advances'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=LandAndImprovements',
      name: 'land_and_improvements'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=LoansReceivable',
      name: 'loans_receivable'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=LongTermCapitalLeaseObligation',
      name: 'long_term_capital_lease_obligation'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=LongTermDebt',
      name: 'long_term_debt'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Long-Term%20Debt',
      name: 'long_term_debt_capital_lease_obligation'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=MachineryFurnitureEquipment',
      name: 'machinery_furniture_equipment'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=MarketableSecurities',
      name: 'marketable_securities'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Minority_interest',
      name: 'minority_interest'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=NonCurrentDeferredLiabilities',
      name: 'non_current_deferred_liabilities'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=NotesReceivable',
      name: 'notes_receivable'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Other%20Current%20Assets',
      name: 'other_current_assets'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Other%20Current%20Liab',
      name: 'other_current_liabilities'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=OtherCurrentPayables',
      name: 'other_current_payables'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=OtherCurrentReceivables',
      name: 'other_current_receivables'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=OtherGrossPPE',
      name: 'other_gross_p_p_e'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Other%20Long-Term%20Assets',
      name: 'other_long_term_assets'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Other%20Long-Term%20Liab',
      name: 'other_long_term_liabilities'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=OtherEquity',
      name: 'other_stockholders_equity'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=PensionAndRetirementBenefit',
      name: 'pension_and_retirement_benefit'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Preferred%20Stock',
      name: 'preferred_stock'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Net%20PPE',
      name: 'property_plant_and_equipment'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Retained%20Earnings',
      name: 'retained_earnings'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=BS_share',
      name: 'shares_outstanding_e_o_p_'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ShortTermCapitalLeaseObligation',
      name: 'short_term_capital_lease_obligation'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ShortTermDebt_without_lease',
      name: 'short_term_debt'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Short-Term%20Debt',
      name: 'short_term_debt_capital_lease_obligation'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Total%20Assets',
      name: 'total_assets'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Total%20Current%20Assets',
      name: 'total_current_assets'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Total%20Current%20Liabilities',
      name: 'total_current_liabilities'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=TotalEquityGrossMinorityInterest',
      name: 'total_equity'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Inventory',
      name: 'total_inventories'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Total%20Liabilities',
      name: 'total_liabilities'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=TotalNonCurrentAssets',
      name: 'total_long_term_assets'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=TotalNonCurrentLiabilitiesNetMinorityInterest',
      name: 'total_long_term_liabilities'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=TotalReceivables',
      name: 'total_receivables'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Total%20Equity',
      name: 'total_stockholders_equity'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=TotalTaxPayable',
      name: 'total_tax_payable'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Treasury%20Stock',
      name: 'treasury_stock'
    }
  ],
  "cashflow_statement": [
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=AssetImpairmentCharge',
      name: 'asset_impairment_charge'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=beginning_cash_position',
      name: 'beginning_cash_position'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Cash%20Flow_CPEX',
      name: 'capital_expenditure'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Dividends',
      name: 'cash_flow_for_dividends'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=cash_flow_for_lease_financing',
      name: 'cash_flow_for_lease_financing'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Cash%20Flow%20from%20Disc.%20Op.',
      name: 'cash_flow_from_discontinued_operations'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Cash%20from%20Financing',
      name: 'cash_flow_from_financing'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Cash%20Flow%20from%20Investing',
      name: 'cash_flow_from_investing'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Cash%20Flow%20from%20Operations',
      name: 'cash_flow_from_operations'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Cash%20Flow%20from%20Others',
      name: 'cash_flow_from_others'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=CashFromDiscontinuedInvestingActivities',
      name: 'cash_from_discontinued_investing_activities'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=CashFromDiscontinuedOperatingActivities',
      name: 'cash_from_discontinued_operating_activities'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=CashFromOtherInvestingActivities',
      name: 'cash_from_other_investing_activities'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ChangeInInventory',
      name: 'change_in_inventory'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=change_in_other_working_capital',
      name: 'change_in_other_working_capital'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ChangeInPayablesAndAccruedExpense',
      name: 'change_in_payables_and_accrued_expense'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ChangeInPrepaidAssets',
      name: 'change_in_prepaid_assets'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ChangeInReceivables',
      name: 'change_in_receivables'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ChangeInWorkingCapital',
      name: 'change_in_working_capital'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=CF_DeferredTax',
      name: 'deferred_tax'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=CF_DDA',
      name: 'depreciation_depletion_and_amortization'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=effect_of_exchange_rate_changes',
      name: 'effect_of_exchange_rate_changes'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=ending_cash_position',
      name: 'ending_cash_position'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=total_freecashflow',
      name: 'free_cash_flow'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=debt_issuance',
      name: 'issuance_of_debt'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Issuance_of_Stock',
      name: 'issuance_of_stock'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Net%20Change%20in%20Cash',
      name: 'net_change_in_cash'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=NetIncomeFromContinuingOperations',
      name: 'net_income_from_continuing_operations'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=NetIntangiblesPurchaseAndSale',
      name: 'net_intangibles_purchase_and_sale'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Net%20Issuance%20of%20Debt',
      name: 'net_issuance_of_debt'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Net%20Issuance%20of%20preferred',
      name: 'net_issuance_of_preferred_stock'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Other%20Financing',
      name: 'other_financing'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=debt_payments',
      name: 'payments_of_debt'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=PurchaseOfBusiness',
      name: 'purchase_of_business'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=PurchaseOfInvestment',
      name: 'purchase_of_investment'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=PurchaseOfPPE',
      name: 'purchase_of_property_plant_equipment'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=Repurchase_of_Stock',
      name: 'repurchase_of_stock'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=SaleOfBusiness',
      name: 'sale_of_business'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=SaleOfInvestment',
      name: 'sale_of_investment'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=SaleOfPPE',
      name: 'sale_of_property_plant_equipment'
    },
    {
      iframe_url: 'https://www.gurufocus.com/modules/chart/term/term_chart.php?symbol=|*symbol*|&series[]=StockBasedCompensation',
      name: 'stock_based_compensation'
    }
  ]
}

module.exports = all_params;