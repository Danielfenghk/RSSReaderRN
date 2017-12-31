import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { selectEntry, fetchFeed, removeFeed } from '../actions'
import { ActivityIndicator } from 'react-native'
import {
  Button,
  Container,
  Content,
  Icon,
  List,
  ListItem,
  Spinner,
  Text
} from 'native-base'

@observer
export default class FeedDetail extends Component {
  state = {
    loading: false,
    entry: null
  }

  static navigationOptions = props => ({
    title: props.screenProps.store.selectedFeed.entry[0].category.label,
    headerRight: (
      <Button
        transparent
        onPress={() => {
          removeFeed(props.navigation.state.params.feedUrl)
          props.navigation.goBack()
        }}
      >
        <Icon name="trash" />
      </Button>
    )
  })

  _handleEntryPress = entry => e => {
    selectEntry(entry)
    this.props.navigation.navigate('EntryDetail')
  }

  componentWillMount() {
    this.setState({ loading: true })
    fetchFeed(this.props.screenProps.store.selectedFeed.url).then(feed => {
      this.setState({ loading: false })
      this.setState({ entry: feed.entry })
    })
  }

  render() {
    const { entry } = this.state
    return (
      <Container>
        <Content>
          {this.state.loading && <ActivityIndicator style={{ margin: 20 }} />}
          <List>
            {entry &&
              entry.map((feed, i) => (
                <ListItem key={i} onPress={this._handleEntryPress(feed)}>
                  <Text>{feed.title}</Text>
                </ListItem>
              ))}
          </List>
        </Content>
      </Container>
    )
  }
}
