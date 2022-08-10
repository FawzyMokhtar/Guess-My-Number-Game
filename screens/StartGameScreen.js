import { useState } from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Colors from '../utils/colors';

function StartGameScreen({ onPickNumber }) {
  const [inputNumber, setInputNumber] = useState('');

  function inputNumberHandler(value) {
    setInputNumber(value);
  }

  function confirmHandler() {
    const gameNumber = parseInt(inputNumber);

    if (isNaN(gameNumber) || gameNumber < 1 || gameNumber > 99) {
      return Alert.alert(
        'Invalid number',
        'You must enter a number between\n(1 and 99)',
        [{ text: 'OK', style: 'destructive', onPress: resetHandler }]
      );
    }

    onPickNumber(gameNumber);
  }

  function resetHandler() {
    setInputNumber('');
  }

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Card>
          <InstructionText>Enter a number</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType='number-pad'
            autoCapitalize='none'
            autoCorrect={false}
            value={inputNumber}
            onChangeText={inputNumberHandler}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonWrapper}>
              <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
            </View>
            <View style={styles.buttonWrapper}>
              <PrimaryButton onPress={resetHandler}>Rest</PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 36,
    paddingHorizontal: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  buttonWrapper: {
    flex: 1,
  },
});
