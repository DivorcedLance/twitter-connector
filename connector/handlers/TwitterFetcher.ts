import { Fetcher, FetchUtils, FetchOptions } from '@tableau/taco-toolkit/handlers'

export default class TwitterFetcher extends Fetcher {
  async *fetch({ handlerInput }: FetchOptions) {
    const response = await FetchUtils.fetchJson(handlerInput.data.url);
    yield response;
  }
}
