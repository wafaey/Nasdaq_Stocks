import Request from "./config";
import { Ticker, TickerInfo, TickerStatistics } from "../store/state";
import { BaseURL, API_KEY } from "../utils/constants";

type GetTickersResponse = {
  data: {
    count: number;
    next_url: string;
    request_id: string;
    results: Ticker[];
    status: string;
  };
};
type GetTickerStatisticsResponse = {
  data: {
    request_id: string;
    results: TickerStatistics[];
    status: string;
  };
};

type GetTickerInfoResponse = {
  data: {
    adjusted: boolean;
    count: number;
    queryCount: number;
    resultsCount: number;
    ticker: string;
    request_id: string;
    results: TickerInfo;
    status: string;
  };
};

export const storage = {
  getTickers: (url: string): Promise<GetTickersResponse> => {
    const subUrl = url
      ? url + `&${API_KEY}`
      : BaseURL +
      `/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=20&${API_KEY}`;
    return Request.get(subUrl, {});
  },
  getTickerDetails: (ticker: string): Promise<GetTickerStatisticsResponse> => {
    const subUrl =
      BaseURL + `/v2/aggs/ticker/${ticker}/prev?adjusted=true&${API_KEY}`;
    return Request.get(subUrl, {});
  },
  getTickerCompanyDetails: (ticker: string): Promise<GetTickerInfoResponse> => {
    const subUrl = BaseURL + `/v3/reference/tickers/${ticker}?${API_KEY}`;
    return Request.get(subUrl, {});
  },
};

