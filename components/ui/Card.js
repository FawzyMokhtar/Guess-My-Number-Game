import { StyleSheet, View } from 'react-native';

import Colors from '../../utils/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,

    // Shadow for Android
    elevation: 4,

    // Shadow for IOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
