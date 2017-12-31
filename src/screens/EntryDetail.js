import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import { WebView } from 'react-native'

export default class EntryDetail extends Component {
  static navigationOptions = {
    title: 'Item'
  }
  render() {
    const entry = this.props.screenProps.store.selectedEntry
    return <WebView source={{ url: (entry.link.href || entry.link) }} />
  }
}
