import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMAGES_URIS} from '../constants';

const Likes = () => {
  return (
    <View style={styles.container}>
      {IMAGES_URIS.map((imageUri, index) => (
        <LinearGradient
          key={index}
          colors={['#478FE4', '#5CD3C6']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[styles.imageBorder, {left: index * 30}]}>
          <Image
            source={{
              uri: imageUri,
            }}
            style={styles.image}
          />
        </LinearGradient>
      ))}
      <LinearGradient
        colors={['#478FE4', '#5CD3C6']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[styles.imageBorder, styles.lastImageBorder, {left: 4 * 30}]}>
        <View style={styles.lastImage}>
          <Text style={styles.plusText}>62+</Text>
        </View>
      </LinearGradient>
      <Text style={styles.likeText}>Like it</Text>
    </View>
  );
};

const imageBorderWidth = 2;
const imageSize = 40;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: imageSize,
    marginVertical: 10,
  },
  imageBorder: {
    width: imageSize + imageBorderWidth * 3,
    height: imageSize + imageBorderWidth * 3,
    borderRadius: (imageSize + imageBorderWidth * 2) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  },
  lastImageBorder: {},
  lastImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    color: 'white',
    fontWeight: 'bold',
  },
  likeText: {
    color: '#2D2D2D',
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    position: 'absolute',
    left: 175,
  },
});

export default Likes;
