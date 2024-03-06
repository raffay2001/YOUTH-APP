import {StyleSheet} from 'react-native';

export const commentCardStyles = StyleSheet.create({
  container: {
    borderColor: '#EBEBEB',
    borderStyle: 'solid',
    borderWidth: 1.2,
    borderRadius: 8,
    width: '100%',
    height: 200,
  },
  commenterInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  commenterInfoParent: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6,
  },
  commenterInfoTextContainer: {
    rowGap: 0,
  },
  commenterNameText: {
    color: '#2D2D2D',
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 14,
  },
  childCommenterNameText: {
    color: '#000000',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
  },
  commenterLastSeenText: {
    color: '#828282',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
  },
  imageBorder: {
    width: 24 + 2 * 3,
    height: 24 + 2 * 3,
    borderRadius: (24 + 2 * 2) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
  },
  commentActionsConatiner: {
    flexDirection: 'row',
    columnGap: 12,
    marginRight: 8,
  },
  childCommentActionsConatiner: {
    flexDirection: 'row',
    columnGap: 12,
    marginRight: 20,
    marginTop: 4,
  },
  commentTextContainer: {
    paddingLeft: 42,
  },
  commentText: {
    color: '#2D2D2D',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
  },
  commentCaptionText: {
    color: '#008FDF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
  },
  childCommentContainer: {
    marginTop: 12,
    marginLeft: 42,
    paddingLeft: 24,
  },
  leftBorder: {
    height: 80,
    borderLeftColor: '#E7E8EF',
    borderLeftWidth: 1,
    borderStyle: 'solid',
    position: 'absolute',
    left: 0,
  },
  childCommentUserInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  childCommentUserInfoParent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  recordingParent: {
    marginTop: -120,
    marginLeft: -50,
  },
  showMoreCommentsTextContainer: {
    marginLeft: 40,
    marginTop: -130,
  },
  showMoreCommentsText: {
    color: '#2D2D2D',
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 10,
  },
});
