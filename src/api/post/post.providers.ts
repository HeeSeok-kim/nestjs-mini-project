import { Posts } from '../../db/models/posts.model';

export const postsProviders = [
  {
    provide: 'POST_REPOSITORY',
    useValue: Posts,
  },
];
