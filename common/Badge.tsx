import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface IBadgeProps {
  text: string;
  width?: number;
  height?: number;
}

const Badge: React.FC<IBadgeProps> = ({text, width = 62, height = 24}) => {
  return (
    <LinearGradient
      style={{...styles.badgeContainer, width, height}}
      colors={['#478FE4', '#5CD3C6']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Text style={styles.badgeText}>{text}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  badgeText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
});

export default Badge;
