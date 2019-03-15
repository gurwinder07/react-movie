import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body } from 'native-base';
import Form from './Form'

const { height } = Dimensions.get('window')

class Movie extends Component {
    state = {
        text: null,
        results: [],
        screenHeight: 0
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    }

    fetchMovieData = async() => {
        const { text } = this.state

        const url =  `https://api.themoviedb.org/3/search/person?api_key=8367b1854dccedcfc9001204de735470&language=en-US&query=${text}&page=1`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })
    }

    render() {
        const scrollEnabled = this.state.screenHeight > height;

        return (
            <ScrollView
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
              style={{ maxWidth: '100%', backgroundColor:'#4b5360',padding:10}}
            >
                <View >
                    <Form
                        onSubmit={this.fetchMovieData}
                        onChangeText={text => this.setState({ text })}
                    />
                    {this.state.results.slice(0, 10).map((result, i) => {
                        return (
                          <View key={i}>
                          <Card style={{flex: 0}}>

                            <CardItem style={{ padding:20, maxWidth: '100%', backgroundColor:'#4b5360',paddingLeft:0}}>
                              <Body>
                                <Image source={{uri: `https://image.tmdb.org/t/p/original/${result.profile_path}`}} style={{height: 300, width: 300, flex: 1}}/>
                                <Text style={{fontSize: 17,color:'#fff'}} ellipsizeMode='tail' numberOfLines={3}>
                                {result.known_for[0].overview}
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



export default Movie
