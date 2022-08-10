import { StyleSheet, Text, View } from 'react-native';

import PrimaryButton from '../ui/PrimaryButton';

function GuessNumber({ onLower, onHigher }) {
  return (
    <View style={styles.container}>
      <Text style={styles.higherOrLowerText}>Higher or lower?</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onLower}>-</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onHigher}>+</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GuessNumber;

const styles = StyleSheet.create({
  container: {},
  higherOrLowerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  buttonContainer: {
    flex: 1,
  },
});
