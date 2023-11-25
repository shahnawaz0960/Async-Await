// Function to simulate pre-movie routine
const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

  const addButter = new Promise((resolve, reject) => resolve('butter'));

  let ticket = await promiseWifeBringingTickets;

  console.log(`wife: I have the ${ticket}`);
  console.log('husband: we should go in');
  console.log('wife: no, I am hungry');

  let popcorn = await getPopcorn;

  console.log(`husband: I got some ${popcorn} `);
  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');

  let butter = await addButter;

  console.log(`husband: I got some ${butter} on popcorn`);
  console.log(`husband: anything else?`);

  // New Promise for getting cold drinks after getting butter
  const getColdDrinks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('cold drinks'), 2000);
    });
  };

  let drinks = await getColdDrinks();

  console.log(`husband: I got some ${drinks}`);
  console.log(`wife: Let's go`);
  console.log(`husband: Thank you, let's go`);

  return ticket;
};

// Function to create a post using async/await
const createPost = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newPost = { id: 1, title: 'New Post' };
      resolve(newPost);
    }, 1000);
  });
};

// Function to delete a post using async/await
const deletePost = async (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const deletionStatus = `Post ${postId} deleted`;
      resolve(deletionStatus);
    }, 1500);
  });
};

// Function to create and delete a post using async/await
const createAndDeletePost = async () => {
  try {
    const newPost = await createPost();
    console.log('New post created:', newPost);

    const deletionStatus = await deletePost(newPost.id);
    console.log('Post deleted:', deletionStatus);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Execute the preMovie function and handle the result
preMovie().then((m) => console.log(`person3: shows ${m}`));

// Execute the createAndDeletePost function
createAndDeletePost();






















