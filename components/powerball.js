import React, { Component } from 'react';
import {
	TouchableOpacity,
	StyleSheet,
	View
} from 'react-native';
var Dimensions = require('Dimensions');
var windowSize  = Dimensions.get('window');
import { Container, Content, Card, CardItem, Text, Body, Header, Left, Title, Right, Item, Input, Button, Spinner, Footer } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
export default class Powerball extends Component {

	constructor(props){
		super(props);
		this.state = {
			numbers: [],
			powerballNumber: 0,
			values: [],
			clear: false
		}
	}
	// eslint-disable-line

	clear(){
		this.setState({
			numbers: [],
			powerballNumber: 0,
			values: [],
			clear: true
		})
	}

	componentWillMount(){
	  
	}

	componentDidMount(){
	this.getNumbers();
	
	}

	getNumbers(){
	this.setState({
	 clear: false
	})
	for (var i = 1; i <= 69; i++) {
	   	 var tempValues = this.state.values;
	   	 tempValues.push(i);
	   	 this.setState({
	   	  values: tempValues
	   	 })
	   };
	  for (var i = 0; i < 5; i++) {
	  	var randomNumber = Math.floor((Math.random() * 69) + 1);
	  	var tempNumbers = this.state.numbers;
	  	tempNumbers.push(randomNumber);
	  	setTimeout(() => {
		  	this.setState({
		  		numbers: tempNumbers
		  	})
	  	}, 2000);

	  	
	  };

	  var randomPowerballNumber = Math.floor((Math.random() * 26) + 1);
	  this.setState({
	  	powerballNumber: randomPowerballNumber
	  })
	}

	renderNumbers(){
		if (this.state.numbers.length) {
			return this.state.numbers.map((data, index) => {
		    return (
		    	<View key={index} style={{ backgroundColor: '#fff', borderRadius: 50, padding: 10, width: 40, justifyContent: 'center', alignItems: 'center'}}>
		    		<Text style={{color: '#2b2b2b'}}>{data}</Text>
		    	</View>
		    )})
		}
		else{

		for (var i = 0; i < 5; i++) {
			return (
		    	<View style={{ backgroundColor: '#fff', borderRadius: 50, padding: 10, height: 40, width: 40, justifyContent: 'center', alignItems: 'center'}}>
		    		
		    	</View>
		    )
		}
		}
	}

	renderPowerballNumber(){
	  if (this.state.powerballNumber != 0) {
		  return (
		    	<View style={{ backgroundColor: '#f4192f', borderRadius: 50, padding: 10, width: 40, justifyContent: 'center', alignItems: 'center'}}>
		    		<Text style={{color: '#fff'}}>{this.state.powerballNumber}</Text>
		    	</View>
		    )
	}
	else{
	return (
	    	<View style={{ backgroundColor: '#f4192f', borderRadius: 50, padding: 10, height: 40, width: 40, justifyContent: 'center', alignItems: 'center'}}>
	    		
	    	</View>
	    )
	}
	    
	  
	}

	renderValues(){

	   return this.state.values.map((data, index) => {
	    if (this.state.numbers.includes(data)) {
	    	return (
		    	<View key={index} style={{ borderWidth: 1, borderColor: '#2b2b2b', backgroundColor: '#fff', borderRadius: 50, padding: 10, width: 40, justifyContent: 'center', alignItems: 'center', marginRight: 1}}>
		    		<Text style={{color: '#2b2b2b'}}>{data}</Text>
		    	</View>
		    )
	    }
	    if (data === this.state.powerballNumber) {
	    	return (
		    	<View key={index} style={{ borderWidth: 1, borderColor: '#f4192f', backgroundColor: '#f4192f', borderRadius: 50, padding: 10, width: 40, justifyContent: 'center', alignItems: 'center', marginRight: 1}}>
		    		<Text style={{color: '#fff'}}>{data}</Text>
		    	</View>
		    )
	    }
	    else{
		    return (
		    	<View key={index} style={{ backgroundColor: '#fff', borderRadius: 50, padding: 10, width: 40, justifyContent: 'center', alignItems: 'center', marginRight: 1}}>
		    		<Text style={{color: '#2b2b2b'}}>{data}</Text>
		    	</View>
		    )
	    }
	  })
	}

	saveTicket(){

	}



	render() {
		// eslint-disable-line
		return (
      <Container style={styles.container}>
			<Header hasTabs noShadow androidStatusBarColor="#f4c92f" style={styles.header}>
				<Body style={{flexDirection: 'row'}}>
						<Left>
							
						</Left>
						<Title style={{color: '#2b2b2b', fontSize: 18, fontWeight: '600', marginTop: 17}}>NUMBERS</Title>
						<Right>
							{!this.state.clear ? <TouchableOpacity onPress={() => this.clear()} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60, width: 50}}>
				              <Text style={styles.clearText}>CLEAR</Text>
				            </TouchableOpacity>
				            :
				            <TouchableOpacity onPress={() => this.getNumbers()} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60, width: 50}}>
				              <Text style={styles.clearText}>RELOAD</Text>
				            </TouchableOpacity>
				            }
						</Right>
					</Body>
			</Header>
			<Header hasTabs noShadow androidStatusBarColor="#f4c92f" style={styles.header}>
				<Body style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 25}}>
					{this.renderNumbers()}
					{this.renderPowerballNumber()}
				</Body>
			</Header>
            <Content style={styles.content}>
            	<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        		{this.state.values ? this.renderValues() : <Spinner color="#2b2b2b" />}
        		</View>
  			</Content>
  			<Footer style={styles.footer}>
        		<Button style={styles.button} onPress={() => this.saveTicket()}>
        			<Text>Save Ticket</Text>
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
		borderBottomWidth: 0,
	},
	content:{
		backgroundColor: '#fff',
		padding: 10,
		borderTopLeftRadius: 15, 
		borderTopRightRadius: 15
	},
	clearText: {
	fontSize: 12
	},
	footer: {
		backgroundColor: '#fff',
		borderTopColor: '#fff'
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
