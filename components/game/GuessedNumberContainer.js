import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Colors from '../../utils/colors';

function GuessedNumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default GuessedNumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: deviceWidth < 380 ? 2 : 4,
    borderColor: Colors.accent500,
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 380 ? 12 : 36,
    color: Colors.accent500,
  },
});
