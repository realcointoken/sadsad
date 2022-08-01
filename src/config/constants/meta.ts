import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'StoncksUSD',
  description:
    'The AMM you can trust on the BitGert network. Bringing you the true meaning of DeFi. Trade and farm tokens, passively, on our platform.',
  image: 'https://briseswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('StoncksUSD')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('StoncksUSD')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('StoncksUSD')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('StoncksUSD')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('StoncksUSD')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('StoncksUSD')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('StoncksUSD')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('StoncksUSD')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('StoncksUSD')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('StoncksUSD')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('StoncksUSD')}`,
      }
    default:
      return null
  }
}
