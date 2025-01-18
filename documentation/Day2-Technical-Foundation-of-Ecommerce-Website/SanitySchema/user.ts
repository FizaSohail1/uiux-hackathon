// /studio/schemaTypes/user.ts
export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string',
        validation: Rule => Rule.required().email(),
      },
      {
        name: 'address',
        title: 'Address',
        type: 'text',
      },
      {
        name: 'phoneNumber',
        title: 'Phone Number',
        type: 'string',
      }
    ],
  };
  