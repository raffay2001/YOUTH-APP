import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import WhiteArrow from '../assets/icons/WhiteArrow';

interface IVerifiedBadgeProps {
  width?: number;
  height?: number;
}

const VerifiedBadge: React.FC<IVerifiedBadgeProps> = ({
  width = 25,
  height = 25,
}) => {
  const borderRadius = width / 2;
  return (
    <LinearGradient
      style={{...styles.verifiedBadgeContainer, width, height, borderRadius}}
      colors={['#478FE4', '#5CD3C6']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <WhiteArrow />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  verifiedBadgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VerifiedBadge;
