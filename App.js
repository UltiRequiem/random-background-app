import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

function randomHex() {
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
    backgroundColor: randomHex()
  },
  instructions: {
    color: 'white'
  }
})

class randomBackground extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    this.state = {
      backgroundColor: randomHex()
    }
  }

  onClick() {
    this.setState({ backgroundColor: randomHex() })
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
          <Text style={styles.instructions}>Tap to change the background</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
export default randomBackground
