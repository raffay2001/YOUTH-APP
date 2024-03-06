import React from 'react';
import {ScrollView} from 'react-native';
import {postDetailStyles} from './styles';
import TopBar from '../../components/TopBar';
import PostWrapper from '../../components/PostWrapper';
import UserInfo from '../../components/UserInfo';
import Post from '../../components/Post';
import Likes from '../../common/Likes';
import Caption from '../../common/Caption';
import Comments from '../../components/Comments';

const PostDetail = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={postDetailStyles.container}>
      <TopBar />
      <PostWrapper>
        <UserInfo />
        <Post />
        <Likes />
        <Caption />
        <Comments />
      </PostWrapper>
    </ScrollView>
  );
};

export default PostDetail;
