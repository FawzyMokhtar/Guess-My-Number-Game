import { View, StyleSheet, TextInput } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonWrapper}>
          <PrimaryButton>Rest</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 8,

    // Shadow for Android
    elevation: 4,

    // Shadow for IOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
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
