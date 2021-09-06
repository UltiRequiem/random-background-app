import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

function randomColorHex() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: randomColorHex()
  },
  text: {
    color: 'white'
  }
})

class randomBackground extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    this.state = {
      backgroundColor: randomColorHex()
    }
  }

  onClick() {
    this.setState({ backgroundColor: randomColorHex() })
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.onClick}
        style={[
          styles.container,
          { backgroundColor: this.state.backgroundColor }
        ]}
      >
        <View>
          <Text style={styles.text}>Tap to change the background color.</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
export default randomBackground
