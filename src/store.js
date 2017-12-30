import { observable } from 'mobx'
import { AsyncStorage } from ' react-native'

class Store {
  @observable feeds
  @observable selectedFeeds
  @observable selectedEntry

  constructor() {
    AsyncStorage.getItem('@feeds').then(sFeeds => {
      this.feeds = JSON.parse(sFeeds) || []
    })
  }

  _persistFeeds() {
    AsyncStorage.setItem('@feeds', JSON.stringify(this.feeds))
  }

  addFeed(url, feed) {
    const { entry, title, updated } = feed
    this.feeds.push({ url, entry, updated })
    this._persistFeeds()
  }

  removeFeed(url) {
    this.feeds = this.feeds.filter(feed => feed.url !== url)
    this._persistFeeds()
  }

  selectEntry(entry) {
    this.selectEntry = entry
  }
}

const store = new Store()
export default store
