import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Calstar To Do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={'New To Do'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 50,
    fontWeight: '200',
    marginBottom: 30
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    width: width - 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#232323',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  }
});
