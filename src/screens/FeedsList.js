import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text } from 'native-base'
import { observer } from 'mobx-react/native'

@observer
export default class FeedsList Component {
  render() {
    const { feeds } = this.props.screenProps.store
    return (
      <Container>
       <Content>
        <List>
          {feeds && feeds.map((feed, i) => 
            <ListItem key={i}>
              <Text>{feed.title}</Text>
            </ListItem>
          )}
      </List>
      </Content>
      </Container>
    )
  }
}
