import React, { Component } from 'react'
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Text
} from 'native-base'
import { addFeed, fetchFeed } from '../actions'
import { Alert, ActivityIndicator } from 'react-native'

export default class AddFeed extends Component {
  static navigationOptions = {
    title: 'Add Feed'
  }

  state = {
    url: '',
    loading: false
  }

  _handleAddPress = () => {
    if (this.state.url) {
      this.setState({ loading: true })
      fetchFeed(this.state.url)
        .then(feed => {
          addFeed(this.state.url, feed)
          this.setState({ loading: false })
          this.props.navigation.goBack()
        })
        .catch(() => {
          Alert.alert('Could not find any rss feed with that url.')
          this.setState({ loading: false })
        })
    }
  }

  render() {
    return (
      <Container style={{ padding: 10 }}>
        <Content>
          <Form>
            <Item>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="feed url"
                onChangeText={url => this.setState({ url })}
              />
            </Item>
            <Button
              block
              style={{ marginTop: 20 }}
              onPress={this._handleAddPress}
            >
              {this.state.loading && (
                <ActivityIndicator color="white" style={{ margin: 10 }} />
              )}
              <Text>Add</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
