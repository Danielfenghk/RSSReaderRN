import { observable } from 'mobx'

class Store {
  @observable feeds

  constructor() {
    this.feeds = []
  }

  addFeed(url, feed) {
    const { entry, title, update } = feed
    this.feeds.push({
      url,
      entry,
      updated
    })
    this._persistFeeds()
  }
}
