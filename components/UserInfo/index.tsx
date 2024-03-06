import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {userInfoStyles} from './styles';
import User1 from '../../assets/images/User1';
import ThreeDots from '../../assets/icons/ThreeDots';
import VerifiedBadge from '../../common/VerifiedBadge';
import Badge from '../../common/Badge';

const UserInfo = () => {
  return (
    <View style={userInfoStyles.container}>
      <View style={userInfoStyles.userCardContainer}>
        <User1 />
        <View style={userInfoStyles.userInfoContainer}>
          <View style={userInfoStyles.userNameContainer}>
            <Text style={userInfoStyles.userName}>Mohamed Mostafa</Text>
            <VerifiedBadge />
          </View>
          <View style={userInfoStyles.timeLocationContainer}>
            <Badge text="1h Ago" />
            <Badge text="Dubai" />
          </View>
        </View>
      </View>
      <TouchableOpacity style={userInfoStyles.threeDotsContainer}>
        <ThreeDots width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
