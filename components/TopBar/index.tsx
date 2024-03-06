import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {topBarStyles} from './styles';
import BackArrow from '../../assets/icons/BackArrow';
import ThreeDots from '../../assets/icons/ThreeDots';

const TopBar = () => {
  return (
    <View style={topBarStyles.container}>
      <TouchableOpacity>
        <BackArrow />
      </TouchableOpacity>
      <Text style={topBarStyles.heading}>Post</Text>
      <TouchableOpacity>
        <ThreeDots />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
