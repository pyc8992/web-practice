import User, { associate as associateUser } from './user';
import Comment, { associate as associateComent } from './comment';
import Hashtag, { associate as associateHashtag } from './hashtag';
import Image, { associate as associateImage } from './image';
import Post, { associate as associatePost } from './post';

export * from './sequelize';

const db = {
  User,
  Comment,
  Hashtag,
  Image,
  Post,
};

export type dbType = typeof db;

associateUser(db);
associateComent(db);
associateHashtag(db);
associateImage(db);
associatePost(db);