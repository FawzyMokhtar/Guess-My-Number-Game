import { StyleSheet, View } from 'react-native';

import PrimaryButton from '../ui/PrimaryButton';
import Card from '../ui/Card';
import InstructionText from '../ui/InstructionText';

function GuessNumber({ onLower, onHigher }) {
  return (
    <Card>
      <InstructionText>Lower or higher?</InstructionText>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onLower}>-</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onHigher}>+</PrimaryButton>
        </View>
      </View>
    </Card>
  );
}

export default GuessNumber;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  buttonContainer: {
    flex: 1,
  },
});
