import data from '../data/portfolio.json'
import type { Portfolio } from '../types/portfolio'

/** Single source of content for every section. Components never hardcode copy. */
export function usePortfolio(): Portfolio {
  return data as Portfolio
}
