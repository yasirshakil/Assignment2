import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';

//Navigation Imports
import { createStackNavigator, createAppContainer,  } from 'react-navigation';


//Home Screen View Settings
class Introduction   extends Component {
  static navigationOptions = {
    title: 'Introduction'
    
  }
  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <Image
          style={{width: 200, height: 200}}
          source={{uri: 'https://pbs.twimg.com/profile_images/1061308032179671041/0JZjFzIH_400x400.jpg'}}
        />

        <Text>Introduction</Text>
      
        <Button
          title="Education"
          onPress={() => this.props.navigation.navigate('Education', {
            itemId: 12,
            otherMsg: "Sent to Education"
          })}
        />
      </View>

      

    );
  }
}


//Education Screen View Settings
class EducationScreen extends Component {
  static navigationOptions = {
    title: 'Education Screen'
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherMsg = navigation.getParam('otherMsg', 'This is the default Msg');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> eductional background</Text>
        
        

        <Button
          title="Experience"
          onPress={() => this.props.navigation.navigate('Experience')}
        />
        
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
    );
  }
}





//Experience Screen View Settings
class ExperienceScreen extends Component {
  static navigationOptions = {
    title: 'Experience Screen'
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherMsg = navigation.getParam('otherMsg', 'This is the default Msg');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Experience</Text>
        
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
    );
  }
}





//Creation of the Stack Navigator
const AppNavigator = createStackNavigator({
  Home: Introduction,
  Education: EducationScreen,
  Experience: ExperienceScreen
},
  {
    initialRouteName: "Home"
  });

//Exporting while creating the App Container
// export default createAppContainer(AppNavigator);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />
  }
}

