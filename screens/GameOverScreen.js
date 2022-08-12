import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../utils/colors';

function GameOverScreen({ gameNumber, roundsCount, onStartNewGame }) {
  const { width: deviceWidth, height: deviceHeight } = useWindowDimensions();

  let imageContainerSize = 300;

  if (deviceWidth < 380) {
    imageContainerSize = 150;
  }

  if (deviceHeight < 400) {
    imageContainerSize = 80;
  }

  const imageStyle = {
    width: imageContainerSize,
    height: imageContainerSize,
    borderRadius: imageContainerSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title>GAME OVER..!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsCount}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{gameNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
