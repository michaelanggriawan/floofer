import { schema } from 'nexus';

schema.objectType({
  name: 'User',
  definition: (t) => {
    t.model.id();
    t.model.email();
    t.model.city();
  },
});

type RootAuth = {
  token: string;
};

// Coming soon
