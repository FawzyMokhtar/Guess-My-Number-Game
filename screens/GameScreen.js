import { StyleSheet, Text, View } from 'react-native';

import Title from '../components/Title';

function GameScreen() {
  return (
    <View style={styles.container}>
      <Title>Computer's Guess</Title>
      <Text>GUESS</Text>
      <View>
        <Text>Higher or lower?</Text>
        <Text>+</Text>
        <Text>-</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
