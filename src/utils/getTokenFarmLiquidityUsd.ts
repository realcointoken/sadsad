import { BigNumber } from 'bignumber.js';
import { BIG_TEN } from 'utils/bigNumber'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { Address } from 'config/constants/types'
import { getRouterContract } from './contractHelpers'
import brisePriceFromAPI from './brisePriceFromAPI';

const StonksUSDAddress = "0xD65b0bEdC15d4a33EDd311DF3D3BBe56a8017F87"
const amountIn = "1000"

const getTokenFarmLiquidityUsd = async(tokenAddress: Address, tokenDecimals: number, stakedAmount: string): Promise<BigNumber> => {
    
    const path = [getAddress(tokenAddress), StonksUSDAddress]
    const brisePriceUSD: BigNumber = await brisePriceFromAPI()

    const router = getRouterContract()
    const [, priceRaw] = await router.methods.getAmountsOut(amountIn, path).call({
        gasPrice: "0"
    })
    
    return new BigNumber(priceRaw).div(BIG_TEN.pow(tokenDecimals)).div(brisePriceUSD).times(new BigNumber(stakedAmount))
    // Get total staked token
    // Get staked token price in wbrise
    // Get wbrise price
    // Convert staked token price in StonksUSD to busd
}

export default getTokenFarmLiquidityUsd
