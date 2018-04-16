import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, Alert, TouchableHighlight, ScrollView, FlatList, Image, TextInput, StatusBar} from 'react-native';
import { StackNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Expo from 'expo'

/*
class Greatings extends React.Component {
	render() {
		return (
			<Text> Hello, Bitch - {this.props.name}! </Text>
			);
	}
}

export default class LotsOfGreetings extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'space-evenly', alignItems: 'center'}}>
       	<View style={{flexBasis:50, width: 100, backgroundColor: 'blue'}}></View>
       	<View style={{flexBasis:50, width: 100, backgroundColor: 'red'}}></View>
       	<View style={{flexBasis:50, width: 100, backgroundColor: 'green'}}></View>
       	<View style={{flexBasis:50, width: 100, backgroundColor: 'yellow'}}></View>
       	<Button
  			onPress={() => {
    			Alert.alert('You tapped the button!');
  			}}
  			title="Press Me"
  			color='green'
			/>
		<TouchableHighlight onPress = {() => {Alert.alert('This works')}} underlayColor = 'white'>
			<View style = {{width: 260, backgroundColor: 'blue', alignItems: 'center'}}>
				<Text style = {{color: 'white', padding: 20}}>Hello</Text>
			</View>
		</TouchableHighlight>
		<ScrollView>
      	<Text style = {{fontSize:96}}>Hello</Text>
      	<Text style = {{fontSize:96}}>Fock you</Text>
      	<Text style = {{fontSize:96}}>Fock you</Text>
      	<Text style = {{fontSize:96}}>Fock you</Text>
      	<Text style = {{fontSize:96}}>Fock you</Text>
      	<Text style = {{fontSize:96}}>Fock you</Text>
      	<Text style = {{fontSize:96}}>Fock you</Text>
      	<Text style = {{fontSize:96}}>Fock you</Text>
      	<Text style = {{fontSize:96}}>Fock you</Text>
     	</ScrollView>
     	<FlatList data = {[{key: 'Davin'}, {key: 'Seva'}, {key: 'Sanya'}]}
     				renderItem = {({item}) => <Text> {item.key} </Text>}/>
      </View>
      
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
  
});
*/

class GroupReceiptItem extends React.Component { //Категория рецептов (горячая)
	render() {
		return (
		<TouchableHighlight onPress={() => this.props.navigation.navigate('ListAll')} underlayColor = 'white' style={{borderRadius: 5, elevation: 5, marginBottom: 30}}>
			<View style = {styles.groupItem}>
				<Text style = {styles.groupItemText}>{this.props.category}</Text>
				<Image style = {styles.groupItemImage} source={{uri: `${this.props.url}`}} />
			</View>
		</TouchableHighlight>
			);
	}
}

class EditableReceiptItem extends React.Component { //Рецепт, который можно редактировать
	render() {
		return (
			<TouchableHighlight onPress={() => this.props.navigation.navigate('Dish')} underlayColor = 'white' style={{borderRadius: 5, elevation: 5, marginBottom: 30}}>
				<View style = {styles.groupItem}>
					<Text style = {styles.editItemText}>{this.props.dish}</Text>
					<TouchableHighlight style = {styles.editItemOption} onPress={() => this.props.navigation.navigate('Add')} underlayColor = 'white' >
						<Image style = {styles.editItemImage} source={require('./img/write.png')} />
					</TouchableHighlight>
					<TouchableHighlight style = {styles.editItemOption} onPress={() => {Alert.alert('Вы действительно хотите удалить рецепт?');}} underlayColor = 'white' >
						<Image style = {styles.editItemImage} source={require('./img/delete.png')} />
					</TouchableHighlight>
				</View>
			</TouchableHighlight>
			);
	}
}

class EditableImage extends React.Component {
	render() {
		return (
			<TouchableHighlight onPress={() => {Alert.alert('Выберите путь к изображению');}} underlayColor = 'white' style = {{width: 360, height: 150, marginTop: 20}}>
				<Image style = {{flex: 1}} source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/09/a3/01/f6/nagashi-asian-food.jpg'}} />
			</TouchableHighlight>
			);
	}
}


class InputItem extends React.Component { //Поле ввода
	constructor(props) {
    super(props);
    this.state = { text: '' };
  }
	render() {
		return (
			<TextInput
          		style={this.props.chooseStyle}
          		placeholder={this.props.placeholder}
          		onChangeText={(text) => this.setState({text})}
        		value={this.state.text}
        		multiline = {this.props.ifMultiline}
        		editable = {true}
        		maxLength = {this.props.length}
        		numberOfLines = {this.props.lines}
        		secureTextEntry = {this.props.hide}
        		placeholderTextColor = {this.props.colorHolder}
        		underlineColorAndroid='rgba(0,0,0,0)'
        />
			);
	}
}

class ButtonItem extends React.Component { //Категория рецептов (горячая)
	render() {
		return (
			<TouchableHighlight style = {this.props.chooseStyle} onPress={() => this.props.navigation.navigate(this.props.link)} >
				<View style = {{flex: 1, justifyContent: 'center'}}>
					<Text style = {{textAlign: 'center', color: 'white', fontSize: 18}}>{this.props.text}</Text>
				</View>
			</TouchableHighlight>
			);
	}
}

class PersonIcon extends React.Component {
  render() {
    return (
    <TouchableHighlight style = {{marginRight: 10, marginTop: 13}} onPress={() => this.props.navigation.navigate('Add')} underlayColor = 'white' >
      	<Image
        source={require('./img/material.png')}
        style={{ width: 46, height: 46 }}
      	/>
    </TouchableHighlight>
    );
  }
}

class LeftArrowIcon extends React.Component {
  render() {
    return (
      <Image
        source={require('./img/material.png')}
        style={{ width: 46, height: 46, marginRight: 10, marginTop: 30 }}
      />
    );
  }
}

class AuthorizationScreen extends React.Component {
  static navigationOptions = {
    title: 'Authorization',
  };
  render() {
    return (
    	<View style = {{flex:1, alignItems: 'center', backgroundColor: '#FFEBCD'}}>
    		<InputItem chooseStyle = {styles.inputItem} placeholder='FullName' ifMultiline={true} colorHolder = 'white' length={40} lines={1} colorHolder = 'white' />
    		<InputItem chooseStyle = {styles.inputItem} placeholder='Password' ifMultiline={false} hide={true} colorHolder = 'white' length={40} lines={1} colorHolder = 'white' />
    		<Text style = {{width: 200, textAlign: 'right', color: 'red', fontSize: 14, paddingTop: 8, paddingBottom: 20}}>Forgot password? </Text>
    		<ButtonItem chooseStyle = {styles.buttonTop} text = 'Enter' navigation = {this.props.navigation} link = "Home" />
    		<ButtonItem chooseStyle = {styles.buttonTop} text = 'Register' navigation = {this.props.navigation} link = "Register" />
    	</View>
    );
  }
}

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
  };
  render() {
    return (
    	<View style = {{flex:1, alignItems: 'center', backgroundColor: '#FFEBCD'}}>
    		<InputItem chooseStyle = {styles.inputItem}  placeholder='FullName' ifMultiline={true} colorHolder = 'white' length={40} lines={1} />
    		<InputItem chooseStyle = {styles.inputItem} placeholder='Email' ifMultiline={true} hide={true} colorHolder = 'white' length={40} lines={1} />
    		<InputItem chooseStyle = {styles.inputItem} placeholder='Password' ifMultiline={false} hide={true} colorHolder = 'white' length={40} lines={1} />
    		<InputItem chooseStyle = {styles.inputItem} placeholder='Repeat Password' ifMultiline={false} hide={true} colorHolder = 'white' length={40} lines={1} />
    		<ButtonItem chooseStyle = {styles.buttonTop} text = 'Register' navigation = {this.props.navigation} link = "Home" />
    	</View>
    );
  }
}


class CategoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories',
  };
  render() {
    return (
    	<View style = {styles.main}>
      		<FlatList style = {{padding: 30}}
      				data = {[{category: 'European food', url: 'https://orogoldcosmetics.files.wordpress.com/2015/07/orogold-must-try-foods-of-europe-pizza-italy.jpg?w=560&h=374'},
      						 {category: 'Asian food', url: 'https://media-cdn.tripadvisor.com/media/photo-s/09/a3/01/f6/nagashi-asian-food.jpg'},
      						 {category: 'Belarus food', url: 'http://belarusfeed.com/wp-content/uploads/2016/10/20161001_dranik_fest_dzianis_vasilkou_001.jpg'},
      						 {category: 'Russian food', url: 'https://media1.fdncms.com/boiseweekly/imager/u/original/3788555/picks_russianfoodfestival_iakovfilimonov.jpg'},
      						 {category: 'USA food', url: 'http://images.indianexpress.com/2017/05/american-food-thinkstock-759.jpg'}]}
     				renderItem = {({item}) => <GroupReceiptItem navigation = {this.props.navigation} category = {item.category} url = {item.url} />} />
      	</View>
    );
  }
}

class ListAllScreen extends React.Component {
  static navigationOptions = {
    title: 'All',
  };
  render() {
    return (
    	<View style = {styles.main}>
    		<Text style = {styles.centerText}>European food</Text>
      		<FlatList style = {{padding: 30}}
      				data = {[{name: 'Salsa', url: 'https://orogoldcosmetics.files.wordpress.com/2015/07/orogold-must-try-foods-of-europe-pizza-italy.jpg?w=560&h=374'},
      						 {name: 'Barista', url: 'https://media-cdn.tripadvisor.com/media/photo-s/09/a3/01/f6/nagashi-asian-food.jpg'},
      						 {name: 'Draniki', url: 'http://belarusfeed.com/wp-content/uploads/2016/10/20161001_dranik_fest_dzianis_vasilkou_001.jpg'},
      						 {name: 'Pork', url: 'https://media1.fdncms.com/boiseweekly/imager/u/original/3788555/picks_russianfoodfestival_iakovfilimonov.jpg'},
      						 {name: 'CheeseBurger', url: 'http://images.indianexpress.com/2017/05/american-food-thinkstock-759.jpg'}]}
     				renderItem = {({item}) => <GroupReceiptItem navigation = {this.props.navigation} category = {item.name} url = {item.url} />} />
     		<ButtonItem chooseStyle = {styles.buttonDown} text = 'Add' navigation = {this.props.navigation} link = "Add" />
      	</View>
    );
  }
}

class AddScreen extends React.Component {
  static navigationOptions = {
    title: 'Add',
  };
  render() {
    return (
    	<View style = {styles.main}>
    		<InputItem chooseStyle = {styles.inputHeadText} placeholder='Your receipt' ifMultiline={false} length={40} lines={1} colorHolder='red' />
    		<EditableImage />
    		<InputItem chooseStyle = {styles.inputTextAreaItem} placeholder='Add Description' ifMultiline={true} length={200} lines={20} colorHolder = 'black' />
    		<ButtonItem chooseStyle = {styles.buttonDown} text = 'Add receipt' navigation = {this.props.navigation} link = "Note" />
    	</View>
    );
  }
}

class DishScreen extends React.Component {
	static navigationOptions = {
    title: 'Dish',
  };
  render() {
    return (
    	<View style = {{flex:1, alignItems: 'center', backgroundColor: '#FFEBCD'}}>
    		<Text style = {styles.centerText}>Salsa</Text>
    		<Image style = {styles.centerImage} source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/09/a3/01/f6/nagashi-asian-food.jpg'}} />
    		<InputItem chooseStyle = {styles.inputTextAreaItem} placeholder='Add Description' ifMultiline={true} length={200} lines={20} colorHolder = 'black' />
    		<ButtonItem chooseStyle = {styles.buttonDown} text = 'Notes' navigation = {this.props.navigation} link = "Note" />
    	</View>
    );
  }
}

class NoteScreen extends React.Component {
	static navigationOptions = {
    title: 'Notes',
  };
  render() {
    return (
    	<View style = {{flex:1, alignItems: 'center', backgroundColor: '#FFEBCD'}}>
    		<Text style = {styles.centerText}>Type your note</Text>
    		<InputItem chooseStyle = {styles.inputTextAreaItem} placeholder='Type note' ifMultiline={true} length={400} lines={40} colorHolder = 'black' />
    		<ButtonItem chooseStyle = {styles.buttonDown} text = 'Add note' navigation = {this.props.navigation} link = "Note" />
    	</View>
    );
  }
}


class HomeScreen extends React.Component {
	static navigationOptions = {
    title: 'Dish',
  };
  render() {
    return (
    	<View style = {styles.main}>
    	<Text style = {styles.centerText}>Your dishes</Text>
      		<FlatList style = {{padding: 30}}
      				data = {[{dish: 'Salsa'},
      						 {dish: 'Barista'},
      						 {dish: 'Draniki'},
      						 {dish: 'Pork'},
      						 {dish: 'CheeseBurger'}]}
     				renderItem = {({item}) => <EditableReceiptItem dish={item.dish} navigation = {this.props.navigation} />} />
     		<ButtonItem chooseStyle = {styles.buttonDown} text = 'Add' navigation = {this.props.navigation} link = "Add" />
    	</View>
    );
  }
}

const RootStack = StackNavigator({
	Home: {screen: HomeScreen},
	Register: {screen: RegisterScreen},
	Authorization: {screen: AuthorizationScreen},
	Category: {screen: CategoryScreen},
	Dish: {screen: DishScreen},
	ListAll: {screen: ListAllScreen},
	Add: {screen: AddScreen}, //то же, что и Edit: {screen: EditScreen}, просто при edit не будет добавляться новая запись в бд
	Note: {screen: NoteScreen},
	},
	{
    initialRouteName: 'Category',
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: 'red',
        height: 80,
        paddingTop: Expo.Constants.statusBarHeight,
      },

      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        paddingLeft: 10,
      },
      headerRight: <PersonIcon navigation = {navigation} />,
    }),
  	}
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


const styles = StyleSheet.create({
  main: {
  	flex:1, 
  	justifyContent: 'space-around',
  	alignItems: 'center', 
  	backgroundColor: '#FFEBCD'
  },
  centerText: {
  	fontSize: 20,
  	width: 300, 
  	textAlign: 'left',
  	color: 'red',
  	marginTop: 20,
  },
  buttonTop: {
  	width: 120,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 40,
    elevation: 5,
  },
  buttonDown: {
  	width: 120,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 5,
    marginBottom: 30,
    elevation: 5,
  },
  inputItem: {
  	width: 200,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
    color: 'white'
  },
  inputTextAreaItem: {
  	width: 300,
    height: 250,
    color: 'black',
    textAlign: 'left',
    marginTop: 20,
    fontSize: 18,
  },
  inputHeadText: {
  	fontSize: 20,
  	width: 300, 
  	textAlign: 'left',
  	color: 'red',
  	marginTop: 20,
  },
  groupItem: {
  	flexDirection: 'row',
  	alignItems: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  groupItemText: {
  	flex:3,
  	color: 'white',
  	fontSize: 18,
  	textAlign: 'center',
  },
  groupItemImage: {
  	flex:1,
  	height: 50,
  	borderTopRightRadius: 5,
  	borderBottomRightRadius: 5,
  },
  editItemText: {
  	flex:3,
  	color: 'white',
  	fontSize: 18,
  	textAlign: 'center',
  },
  editItemOption: {
  	flex:1,
  	alignItems: 'center',
  	justifyContent: 'center',
  	height: 50,
  },
  editItemImage: {
  	width: 31,
  	height: 31,
  },
  centerImage: {
  	width: 360,
  	height: 150,
  	marginTop: 20,
  },
});
