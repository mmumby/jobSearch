import constants from '../constants'

export default {

  fetchFeed: (feed) => {
    return {
      type: constants.FEED_RECEIVED,
      data: feed
    }
  }
}