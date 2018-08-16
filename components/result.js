import React, { Component } from 'react';
import {
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Header, Left, Title, Right, Item, Input, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
export default class Result extends Component {
	// eslint-disable-line

	render() {
		// eslint-disable-line
		return (
      <Container style={styles.container}>
			<Header hasTabs noShadow androidStatusBarColor="#f4c92f" style={styles.header}>
			</Header>
			<Header hasTabs noShadow androidStatusBarColor="#f4c92f" style={styles.header}>
				<Body style={{flexDirection: 'row'}}>
						
				</Body>
			</Header>
            <Content style={styles.content}>
        		
  			</Content>
      </Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f4c92f',
	},
	header: { 
		backgroundColor: '#f4c92f', 
		borderBottomWidth: 0
	},
	content:{
		backgroundColor: '#f4c92f',
		padding: 10
	},
});
