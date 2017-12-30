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
import { selectFeed } from '../actions'

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

  _handleFeedPress = feed => {
    selectFeed(feed)
    this.props.navigations.navigate('FeedDetail', { feedUrl: feed.url })
  }

  render() {
    const { feeds } = this.props.screenProps.store

    return (
      <Container>
        <Content>
          <List>
            {feeds &&
              feeds.map((feed, i) => (
                <ListItem key={i} onPress={this._handleFeedPress(feed)}>
                  <Text>{feed.title}</Text>
                </ListItem>
              ))}
          </List>
        </Content>
      </Container>
    )
  }
}
