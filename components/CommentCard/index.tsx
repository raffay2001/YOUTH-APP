import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {commentCardStyles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {IMAGES_URIS} from '../../constants';
import Heart from '../../assets/icons/Heart';
import Comment from '../../assets/icons/Comment';
import ChildCommentUser from '../../assets/images/ChildCommentUser';
import Recording from '../../assets/images/Recording';

const CommentCard = () => {
  const [commentLikeStatus, setCommentLikeStatus] = useState({
    parent: false,
    child: false,
  });
  const commentLikeHandler = (commentType: 'parent' | 'child') => {
    switch (commentType) {
      case 'parent':
        setCommentLikeStatus(prevCommentLikeStatus => ({
          ...prevCommentLikeStatus,
          parent: !prevCommentLikeStatus.parent,
        }));
        break;
      case 'child':
        setCommentLikeStatus(prevCommentLikeStatus => ({
          ...prevCommentLikeStatus,
          child: !prevCommentLikeStatus.child,
        }));
        break;
    }
  };

  return (
    <View style={commentCardStyles.container}>
      <View style={commentCardStyles.commenterInfoContainer}>
        <View style={commentCardStyles.commenterInfoParent}>
          <LinearGradient
            colors={['#478FE4', '#5CD3C6']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={commentCardStyles.imageBorder}>
            <Image
              source={{
                uri: IMAGES_URIS[0],
              }}
              style={commentCardStyles.image}
            />
          </LinearGradient>
          <View style={commentCardStyles.commenterInfoTextContainer}>
            <Text style={commentCardStyles.commenterNameText}>
              Adam Mohamed
            </Text>
            <Text style={commentCardStyles.commenterLastSeenText}>
              14 Hours Ago
            </Text>
          </View>
        </View>
        <View style={commentCardStyles.commentActionsConatiner}>
          <TouchableOpacity onPress={() => commentLikeHandler('parent')}>
            <Heart isFilledHeart={commentLikeStatus.parent} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Comment isFilledComment />
          </TouchableOpacity>
        </View>
      </View>

      <View style={commentCardStyles.commentTextContainer}>
        <Text style={commentCardStyles.commentText}>
          Lovely 😘😍 I’ve enjoyed the day too With{' '}
          <Text style={commentCardStyles.commentCaptionText}>@Haya</Text> &{' '}
          <Text style={commentCardStyles.commentCaptionText}>
            @Battamostafffa
          </Text>
        </Text>
      </View>

      <View style={commentCardStyles.childCommentContainer}>
        <View style={commentCardStyles.leftBorder} />
        <View style={commentCardStyles.childCommentUserInfoParent}>
          <View style={commentCardStyles.childCommentUserInfoContainer}>
            <ChildCommentUser />
            <View style={commentCardStyles.commenterInfoTextContainer}>
              <Text style={commentCardStyles.childCommenterNameText}>
                Daniel Hamilton
              </Text>
              <Text style={commentCardStyles.commenterLastSeenText}>
                5 Hours Ago
              </Text>
            </View>
          </View>
          <View style={commentCardStyles.childCommentActionsConatiner}>
            <TouchableOpacity onPress={() => commentLikeHandler('child')}>
              <Heart
                isFilledHeart={commentLikeStatus.child}
                width={16}
                height={16}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Comment isFilledComment width={16} height={16} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={commentCardStyles.recordingParent}>
          <Recording width={250} height={300} />
        </View>
      </View>
      <View style={commentCardStyles.showMoreCommentsTextContainer}>
        <Text style={commentCardStyles.showMoreCommentsText}>
          Show more 3 replies
        </Text>
      </View>
    </View>
  );
};

export default CommentCard;
