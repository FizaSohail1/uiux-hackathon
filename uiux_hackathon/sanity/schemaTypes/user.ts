export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'userId',
      type: 'string',
      title: 'UserID',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
    {
      name: 'password',
      type: 'boolean',
      title: 'Password',
    },
    {
      name: "image",
      type: "image",
      title: "Profile Image",
      options: {
        hotspot: true,
      },
    }
  ],
};