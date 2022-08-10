import { StyleSheet, Text } from 'react-native';

import Colors from '../../utils/colors';

function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: Colors.accent500,
  },
});
