import React from 'react';
import {Text, View} from 'react-native';
import {commentsStyles} from './styles';
import CommentCard from '../CommentCard';

const Comments = () => {
  return (
    <View style={commentsStyles.container}>
      <Text style={commentsStyles.heading}>View all 17 comments</Text>
      {[0, 1].map((item, index) => (
        <CommentCard key={index} />
      ))}
    </View>
  );
};

export default Comments;
