import store from './store'
import xml2json from 'simple-xml2json'

const fetchFeed = async url => {
  const response = await fetch(url)
  const xml = await response.text()
  let json = xml2json.parser(xml)
  return {
    entry:
      (json.feed && json.feed.entry) || (json.rss && json.rss.channel.item),
    title:
      (json.feed && json.feed.title) || (json.rss && json.rss.channel.title),
    updated: (json.feed && json.feed.updated) || null
  }
}

const selectFeed = feed => store.selectFeed(feed)

const selectEntry = entry => store.selectEntry(entry)

const addFeed = (url, feed) => store.addFeed(url, feed)

const removeFeed = url => store.removeFeed(url)

export {
  fetchFeed,
  selectFeed,
  selectEntry,
  addFeed,
  removeFeed
}
