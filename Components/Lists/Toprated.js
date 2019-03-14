import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text,Subtitle, Button, Icon, Left, Body } from 'native-base';

const { height } = Dimensions.get('window')

export default class Toprated extends Component {
    state = {
        results: [],
        Height: 0
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ Height: contentHeight });
    }

    componentDidMount = async() => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=8367b1854dccedcfc9001204de735470&language=en-US&page=1`
        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })
    }

    render() {
        const scrollEnabled = this.state.Height > height;

        return (
            <ScrollView
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
            >
                <View >
                    {this.state.results.slice(0, 10).map((result, i) => {
                        return (

<View key={i}>
<Card style={{flex: 0}}>

  <CardItem>
    <Body>
      <Image source={{uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}`}} style={{height: 300, width: 300, flex: 1}}/>
      <Text>
      {result.overview}
      </Text>
    </Body>
  </CardItem>

</Card>

              </View>

                        )
                    })}
                </View>
            </ScrollView>
        )
    }
}
