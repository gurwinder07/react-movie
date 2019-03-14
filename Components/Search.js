import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button,Subtitle, Icon, Title, Segment, Content } from 'native-base';
import {Image,View,Text, StyleSheet} from 'react-native'

import Movie from './Search/Movie'
import People from './Search/People'
import Tvshow from './Search/Tvshow'

export default class Search extends Component {

  state =
  {
SelectedList:'1'
  }

  renderSelectedList()
  {
switch(this.state.SelectedList){
  case '1':
  return (<Movie />);
  break;

  case '2':
  return (<People />);
  break;

  case '3':
  return (<Tvshow />);
  break;

  default:
}

  }

  render() {
    return (

      <Container>

        <Segment>
          <Button   active={this.state.SelectedList==='1'} onPress={() => this.setState({SelectedList:'1'})}>
            <Text>Movie</Text>
          </Button>
          <Button  active={this.state.SelectedList==='2'} onPress={() => this.setState({SelectedList:'2'})}>
            <Text>People</Text>
          </Button>
          <Button  active={this.state.SelectedList==='3'} onPress={() => this.setState({SelectedList:'3'})} >
            <Text>Tv shows</Text>
          </Button>
        </Segment>

        <Content >

                {this.renderSelectedList()}

        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {
    width: 250,
    height:280,
  },
  CardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
  },
});
