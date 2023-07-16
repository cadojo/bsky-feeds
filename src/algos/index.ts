import { AppContext } from '../config'
import {
  QueryParams,
  OutputSchema as AlgoOutput,
} from '../lexicon/types/app/bsky/feed/getFeedSkeleton'
import * as scicmp from './scicmp'

type AlgoHandler = (ctx: AppContext, params: QueryParams) => Promise<AlgoOutput>

const algos = {
  [scicmp.shortname]: {
    handler: <AlgoHandler>scicmp.handler,
    manager: scicmp.manager,
  },
}

export default algos
