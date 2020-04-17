import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  onClick = () => {
    this.setState({
      name: 'World!',
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello {this.state.name}</Text>
        <Button
          onPress={() => {
            this.onClick();
          }}
          title="Click me"
          color="#4169E1"
        />
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
  nameText: {
    fontSize: 50,
    padding: 15,
  },
});
