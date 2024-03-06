import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Caption = () => {
  return (
    <View style={styles.captionsContainer}>
      <Text style={styles.captionText}>
        Enjoyed the day with the family 😘😍
      </Text>
      <Text style={styles.captionText}>
        <Text style={styles.captionMentionsText}>
          @Adam_Mohamed & @Haya_Mohamed
        </Text>{' '}
        ...More
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  captionsContainer: {
    rowGap: 2,
  },
  captionText: {
    color: '#2D2D2D',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  captionMentionsText: {
    color: '#008FDF',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
});

export default Caption;
