import React from 'react';
import { StyleSheet, Text, View,Button,StatusBar,SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title= 'About'
        onPress= {()=> this.props.navigation.navigate('About',{greet:'data'})}/>
      </View>
      </SafeAreaView>
    );
  }
}
class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.getParam('greet')}</Text>
        <Text>About Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home:HomeScreen,
  About:AboutScreen
},
{
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    
    
  },
});

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component{
  render(){
    return<AppContainer/>
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
