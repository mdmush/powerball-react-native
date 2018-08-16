import React, { Component } from 'react';
import {
	TouchableOpacity,
	StyleSheet
} from 'react-native';
var Dimensions = require('Dimensions');
var windowSize  = Dimensions.get('window');
import { Container, Content, Card, CardItem, Text, Body, Header, Left, Title, Right, Item, Input, Button, Footer} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
export default class Main extends Component {
	// eslint-disable-line

	render() {
		// eslint-disable-line
		return (
      <Container style={styles.container}>
			<Header hasTabs noShadow androidStatusBarColor="#f4c92f" style={styles.header}>
			</Header>
            <Content style={styles.content}>
        		<Text style={styles.smallText}>Hey,</Text>
        		<Text style={styles.bigText}>Lucky Fella</Text>
  			</Content>
  			<Footer style={styles.footer}>
        		<Button style={styles.button} onPress={() => Actions.powerball()}>
        			<Text>Let's Play!</Text>
        			<IOSIcon style={styles.forwardButton} name="ios-arrow-round-forward" />
        		</Button>
        	</Footer>
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
	smallText:{
		fontWeight: '400', 
		fontSize: 30,
		color: '#8F7516',
		marginBottom: -15
	},
	bigText:{
		fontSize: 50,
		fontWeight: '600'
	},
	footer: {
		backgroundColor: 'transparent'
	},
	button:{
		borderRadius: 10, 
		width: windowSize.width/2, 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	forwardButton: {
		color: '#fff', 
		fontSize: 36
	}
});
