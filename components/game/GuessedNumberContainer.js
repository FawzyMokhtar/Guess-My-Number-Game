import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../utils/colors';

function GuessedNumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default GuessedNumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    margin: 24,
    padding: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    fontSize: 36,
    color: Colors.accent500,
  },
});
