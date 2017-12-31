import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import { WebView } from 'react-native'

export default class EntryDetail extends Component {
  render() {
    const entry = this.propts.screenProps.store.selectedEntry
    return <WebView source={{ url: entry.link.href || entry.link }} />
  }
}
