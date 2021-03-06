import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const { height } = Dimensions.get('window')

export default class Popular extends Component {
    state = {
        results: [],
        Height: 0
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ Height: contentHeight });
    }

    componentDidMount = async() => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=8367b1854dccedcfc9001204de735470&language=en-US&page=1`

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
                style={{padding: 10, maxWidth: '100%', backgroundColor:'#19263a'}}
            >
                <View >
                    {this.state.results.slice(0, 10).map((result, i) => {
                        return (
<View key={i}>
<Card style={{flex: 0}}>

  <CardItem style={{padding:20, maxWidth: '100%', backgroundColor:'#4b5360'}}>
    <Body>
      <Image source={{uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}`}} style={{height: 300, width: 300, flex: 1}}/>
      <Text style={{fontSize: 17,paddingLeft:5,paddingTop:10 ,color:'#fff'}} ellipsizeMode='tail' numberOfLines={3}>
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
