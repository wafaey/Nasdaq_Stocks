
export type Ticker = {
    active: boolean,
    cik: string,
    composite_figi: string
    currency_name: string,
    last_updated_utc: string,
    locale: string,
    market:string,
    name: string,
    primary_exchange: string,
    share_class_figi: string,
    ticker: string,
    type: string,
};
export type TickerStatistics  = {
    T: string,
    c: number,
    h:  number,
    l:  number,
    n:  number,
    o:  number,
    t:  number,
    v:  number,
    vw:  number,
};
export type TickerInfo = {
    description: string,
    homepage_url:string,
    name:string,
}
type State = {
    tickers: Ticker[];
    nextURL: string;
    tickerStatistics: TickerStatistics;
    tickerInfo: TickerInfo;
    isLoading: boolean;
    tickerStatisticsLoading: boolean;
};

export const state: State = {
    tickers: [],
    nextURL:"",
    tickerStatistics:{ T: "",
    c: 0,
    h:  0,
    l:  0,
    n:  0,
    o:  0,
    t:  0,
    v:  0,
    vw:  0,
    },
    tickerInfo:{ description: "",
    homepage_url:"",
        name: "",
    },
    isLoading: false,
    tickerStatisticsLoading:false,
};
