import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../utils/colors';

function RoundLog({ roundNumber, guessedNumber }) {
  return (
    <View style={styles.container}>
      <View style={styles.roundNumberContainer}>
        <Text style={styles.roundNumber}>{roundNumber}</Text>
      </View>
      <Text style={styles.guessedNumberText}>
        Computer's Guess: {guessedNumber}
      </Text>
    </View>
  );
}

export default RoundLog;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: Colors.primary800,
    backgroundColor: Colors.accent500,
    marginVertical: 8,
    padding: 6,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  roundNumberContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 8,
    backgroundColor: 'white',
  },
  roundNumber: {
    fontSize: 16,
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    textAlign: 'center',
  },
  guessedNumberText: {
    fontSize: 16,
    fontFamily: 'open-sans-bold',
    color: 'white',
    paddingHorizontal: 6,
    textAlign: 'center',
  },
});
