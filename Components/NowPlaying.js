import React, { Component } from 'react'
import { Container, View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'

const { height } = Dimensions.get('window')

class Playing extends Component {
    state = {
        results: [],
        screenHeight: 0
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    }

    componentDidMount = async() => {
        const number = Math.floor(Math.random() * 10)
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=8367b1854dccedcfc9001204de735470&language=en-US&page=${number}`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })
    }
    render() {
        const scrollEnable = this.state.screenHeight > height

        return(




            <ScrollView
                scrollEnabled={scrollEnable}
                onContentSizeChange={this.onContentSizeChange}
                style={{padding: 10, maxWidth: '100%', backgroundColor:'#19263a'}}
            >
                <View style={styles.container2}>

                    {this.state.results.slice(0 ,1).map((result, i) => {
                        return (

                            <View key={i} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Image style={styles.imageStyle} resizeMode={'contain'} source={{uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}`}} />

                                <Text style={{fontWeight: '300', color: '#707884', fontSize:'20'}}></Text>
                                <Text style={styles.titleText}> {result.title} </Text>

                                <View style={styles.section}>
                                    <Text style={{fontSize: 18, marginTop: 10, color: '#fff'}}><Text style={{fontWeight: '500', color: '#7f858e', fontSize:'18'}}>Popularity:</Text> {Math.round(result.popularity)} </Text>
                                    <Text style={{fontSize: 18, marginTop: 10, color: '#fff'}}><Text style={{fontWeight: '500', color: '#7f858e', fontSize:'18'}}>Release Date:</Text> {result.release_date} </Text>
                                    <Text style={{fontSize: 16, marginTop: 10, color: '#fff'}}><Text style={{fontWeight: '500', color: '#7f858e', fontSize:'16'}}>Overview:</Text> {result.overview} </Text>
                                </View>

                            </View>

                        )
                    })}
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        // backgroundColor: '#000000',
    },
    imageStyle: {
        width: 300,
        height: 350,
    },
    titleText: {
        fontWeight: '700',
        color: '#fff',
        fontSize: 30,
        marginTop: 10,
    },
    section: {
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Left',
        marginTop: 10,
    },
})

export default Playing
