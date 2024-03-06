import React from 'react';
import {View} from 'react-native';
import {postWrapperStyles} from './styles';

const PostWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <View style={postWrapperStyles.container}>{children}</View>;
};

export default PostWrapper;
