import constants from '../constants'

const initialState = {
  feed: []
}

export default (state = initialState, action) => {

  switch (action.type) {
    case constants.FEED_RECEIVED:
      console.log('FEED_RECEIVED' + JSON.stringify(action.data))
      let newState = Object.assign({}, state)
      newState['feed'] = action.data
      return newState
    default:
      return state
  }

}