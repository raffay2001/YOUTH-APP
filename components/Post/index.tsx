import React, {useState} from 'react';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import {postStyles} from './styles';
import Heart from '../../assets/icons/Heart';
import Comment from '../../assets/icons/Comment';
import Link from '../../assets/icons/Link';
import Share from '../../assets/icons/Share';
import Bookmark from '../../assets/icons/Bookmark';
import LinearGradient from 'react-native-linear-gradient';
import UserTag from '../../assets/icons/UserTag';
import Timer from '../../assets/icons/Timer';
import CarouselDots from '../../assets/icons/CarouselDots';
import UserTagName from '../../assets/icons/UserTagName';

interface IActionButtons {
  isSelected: boolean;
  count: number;
}

const Post = () => {
  // States
  const [likes, setLikes] = useState<IActionButtons>({
    count: 66,
    isSelected: false,
  });
  const [comments, setComments] = useState<IActionButtons>({
    count: 18,
    isSelected: false,
  });
  const [bookMarks, setBookmarks] = useState<IActionButtons>({
    count: 7,
    isSelected: false,
  });
  const [links, setLinks] = useState<IActionButtons>({
    count: 3,
    isSelected: false,
  });
  const [_, setShare] = useState<IActionButtons>({
    count: 0,
    isSelected: false,
  });

  // Handlers
  const toggleActions = (
    actionType: 'like' | 'comment' | 'bookMark' | 'link' | 'share',
  ) => {
    switch (actionType) {
      case 'like':
        setLikes(prevLikes => {
          let newCount = prevLikes.count;
          if (prevLikes.isSelected) {
            newCount -= 1;
          } else {
            newCount += 1;
          }
          return {
            count: newCount,
            isSelected: !prevLikes.isSelected,
          };
        });
        break;

      case 'comment':
        setComments(prevComments => {
          let newCount = prevComments.count;
          if (prevComments.isSelected) {
            newCount -= 1;
          } else {
            newCount += 1;
          }
          return {
            count: newCount,
            isSelected: !prevComments.isSelected,
          };
        });
        break;

      case 'bookMark':
        setBookmarks(prevBookmarks => {
          let newCount = prevBookmarks.count;
          if (prevBookmarks.isSelected) {
            newCount -= 1;
          } else {
            newCount += 1;
          }
          return {
            count: newCount,
            isSelected: !prevBookmarks.isSelected,
          };
        });
        break;

      case 'link':
        setLinks(prevLinks => {
          let newCount = prevLinks.count;
          if (prevLinks.isSelected) {
            newCount -= 1;
          } else {
            newCount += 1;
          }
          return {
            count: newCount,
            isSelected: !prevLinks.isSelected,
          };
        });
        break;

      case 'share':
        setShare(prevShare => {
          let newCount = prevShare.count;
          if (prevShare.isSelected) {
            newCount -= 1;
          } else {
            newCount += 1;
          }
          return {
            count: newCount,
            isSelected: !prevShare.isSelected,
          };
        });
        break;
    }
  };

  return (
    <View style={postStyles.container}>
      <ImageBackground
        source={require('../../assets/images/postImage.jpeg')}
        style={postStyles.postImageBackground}>
        {/* Top Bar */}
        <View style={postStyles.topBarContainer}>
          <UserTag />
          <Timer />
        </View>

        <View style={postStyles.carouselDotsContainer}>
          <CarouselDots />
        </View>

        <View style={postStyles.userTagNameContainer}>
          <UserTagName />
        </View>

        {/* Action Bar  */}
        <ImageBackground
          blurRadius={80}
          source={require('../../assets/images/postImage.jpeg')}
          style={postStyles.blurTint}>
          <View style={postStyles.actionBarContainer}>
            <View style={postStyles.actionItemContainer}>
              <TouchableOpacity onPress={() => toggleActions('like')}>
                <Heart isFilledHeart={likes.isSelected} />
              </TouchableOpacity>
              <Text style={postStyles.actionItemText}>{likes.count}</Text>
            </View>

            <View style={postStyles.actionItemContainer}>
              <TouchableOpacity onPress={() => toggleActions('comment')}>
                <Comment isFilledComment={comments.isSelected} />
              </TouchableOpacity>
              <Text style={postStyles.actionItemText}>{comments.count}</Text>
            </View>

            <View style={postStyles.actionItemContainer}>
              <TouchableOpacity onPress={() => toggleActions('bookMark')}>
                <Bookmark />
              </TouchableOpacity>
              <Text style={postStyles.actionItemText}>{bookMarks.count}</Text>
            </View>

            <View style={postStyles.actionItemContainer}>
              <TouchableOpacity onPress={() => toggleActions('link')}>
                <Link />
              </TouchableOpacity>
              <Text style={postStyles.actionItemText}>{links.count}</Text>
            </View>

            <View style={postStyles.actionItemContainer}>
              <TouchableOpacity onPress={() => toggleActions('share')}>
                <Share />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <LinearGradient
                style={postStyles.followButton}
                colors={['#FE6587', '#F52D6A']}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}>
                <Text style={postStyles.followButtonText}>Follow</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default Post;
