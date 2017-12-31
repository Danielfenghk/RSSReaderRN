import React, { Component } from 'react'
import {
  Button,
  Container,
  Content,
  Icon,
  List,
  ListItem,
  Text
} from 'native-base'
import { observer } from 'mobx-react/native'
import { selectFeed, removeFeed } from '../actions'

@observer
export default class FeedsList extends Component {
  static navigationOptions = props => ({
    title: 'My Feeds',
    headerRight: (
      <Button transparent onPress={() => props.navigation.navigate('AddFeed')}>
        <Icon name="add" />
      </Button>
    )
  })

  _handleFeedPress = feed => e => {
    console.log('feed', feed)
    selectFeed(feed)
    this.props.navigation.navigate('FeedDetail', { feedUrl: feed.url })
  }

  render() {
    const { feeds } = this.props.screenProps.store
    return (
      <Container>
        <Content>
          <List>
            {feeds &&
              feeds.map((feed, i) => (
                <ListItem
                  key={i}
                  style={{ margin: 10 }}
                  onPress={this._handleFeedPress(feed)}
                >
                  <Text>{feed.entry[0].category.label || feed.url}</Text>
                </ListItem>
              ))}
          </List>
        </Content>
      </Container>
    )
  }
}
