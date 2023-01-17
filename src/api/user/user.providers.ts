import { Users } from '../../db/models/users.model';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: Users,
  },
];
