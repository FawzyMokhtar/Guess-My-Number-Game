import { FlatList, StyleSheet, View } from 'react-native';

import RoundLog from './RoundLog';

function RoundsLog({ rounds }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={rounds}
        keyExtractor={(item) => item}
        renderItem={(itemData) => (
          <RoundLog
            roundNumber={rounds.length - itemData.index}
            guessedNumber={itemData.item}
          />
        )}
      />
    </View>
  );
}

export default RoundsLog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 6,
    paddingVertical: 16,
  },
});
