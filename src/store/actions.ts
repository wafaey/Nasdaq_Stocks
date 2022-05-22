import { Overmind } from 'overmind';
import { Context } from '.';

export const onInitializeOvermind = (
  { state, actions, effects }: Context,
  instance: Overmind<Context>
) => {

};
export const loadTickers = async ({ effects, state }: Context) => {
  state.isLoading = true;
  const response = await effects.storage.getTickers(state.nextURL);
  state.tickers = [...state.tickers,...response.data.results];
  state.nextURL = response.data.next_url;
  state.isLoading = false;
}

export const getTickerDetails = async({effects, state }: Context, tickerName: string) => {
  state.isLoading = true;
  const detailsResponse = await effects.storage.getTickerDetails(tickerName);
  const companyResponse = await effects.storage.getTickerCompanyDetails(tickerName);
  state.tickerStatistics = detailsResponse.data.results[0];
  state.tickerInfo = companyResponse.data.results;
  state.isLoading = false;
};
export const setIsLoading = ({ state }: Context, flag: boolean) => {
   state.isLoading = flag ;
};







