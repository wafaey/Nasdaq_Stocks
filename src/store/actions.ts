import { Overmind } from 'overmind';
import { Context } from '.';

export const onInitializeOvermind = (
  { state, actions, effects }: Context,
  instance: Overmind<Context>
) => {

};
export const loadTickers = async ({ effects, state }: Context) => {
 
}
export const getTickerDetails = async({effects, state }: Context, tickerName: string) => {

};
export const setIsLoading = ({ state }: Context, flag: boolean) => {
   state.isLoading = flag ;
};







