const postsDB = [
  {
    userId: 1,
    location: 'BSD',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    likes: 213424,
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore enim praesentium inventore asperiores sunt corporis unde dicta ipsa dolorum voluptatibus dolor, odio nobis est consequuntur labore!',
    id: 1,
  },
  {
    userId: 2,
    location: 'Jakarta',
    image: 'https://images.unsplash.com/photo-1644982648600-4583461837f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1724&q=80',
    likes: 53451,
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore enim praesentium inventore asperiores sunt corporis unde dicta ipsa dolorum voluptatibus dolor, odio nobis est consequuntur labore!',
    id: 2,
  },
  {
    userId: 3,
    location: 'Bandung',
    image: 'https://images.unsplash.com/photo-1646194840487-e8d3586533a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80',
    likes: 123534,
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore enim praesentium inventore asperiores sunt corporis unde dicta ipsa dolorum voluptatibus dolor, odio nobis est consequuntur labore!',
    id: 3,
  },
  {
    userId: 1,
    image: 'https://images.freeimages.com/images/small-previews/4d6/chugh-1171409.jpg',
    location: 'Jakarta',
    likes: 0,
    caption: 'asdf',
    id: 6,
  },
  {
    userId: 1,
    image: 'https://images.freeimages.com/images/small-previews/4d6/chugh-1171409.jpg',
    location: 'Jakarta',
    likes: 0,
    caption: 'asdf',
    id: 7,
  },
  {
    image: 'https://images.freeimages.com/images/small-previews/4d6/chugh-1171409.jpg',
    location: 'Tangerang Kota',
    likes: 0,
    caption: 'test lain akun bos',
    userId: 2,
    id: 8,
  },
  {
    image: 'https://images.freeimages.com/images/small-previews/4d6/chugh-1171409.jpg',
    location: 'medan',
    likes: 0,
    caption: 'rtrt',
    userId: 2,
    id: 9,
  },
];

const usersDB = [
  {
    id: 1,
    username: 'seto',
    email: 'seto@mail.com',
    full_name: 'seto zuckerberg',
    password: 'password123',
  },
  {
    id: 2,
    username: 'mark',
    email: 'mark@mail.com',
    full_name: 'mark robson',
    password: 'password123',
  },
  {
    id: 3,
    username: 'bill',
    email: 'bill@mail.com',
    full_name: 'bill a lish',
    password: 'password123',
  },
];

module.exports = { postsDB, usersDB };
