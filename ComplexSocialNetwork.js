/* 
Filename: ComplexSocialNetwork.js 

Content: This code represents a complex social network system, with various features such as user registration, login, profile management, friend requests, messaging, and news feed.

Note: Please ensure to have all required HTML elements with appropriate ids, CSS styles, and corresponding DOM manipulation if using this code in a browser.

*/

// User class representing a registered user in the social network
class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.friends = [];
    this.friendRequests = [];
    this.messages = [];
  }

  // Method to send a friend request
  sendFriendRequest(user) {
    this.friendRequests.push(user);
  }

  // Method to accept a friend request
  acceptFriendRequest(user) {
    const index = this.friendRequests.indexOf(user);
    if (index > -1) {
      this.friendRequests.splice(index, 1);
      this.friends.push(user);
      user.friends.push(this);
    }
  }

  // Method to reject a friend request
  rejectFriendRequest(user) {
    const index = this.friendRequests.indexOf(user);
    if (index > -1) {
      this.friendRequests.splice(index, 1);
    }
  }

  // Method to send a message to a friend
  sendMessage(user, message) {
    if (this.friends.includes(user)) {
      user.receiveMessage(this, message);
    } else {
      console.log("Cannot send message. User is not a friend.");
    }
  }

  // Method to receive a message from a friend
  receiveMessage(user, message) {
    this.messages.push({
      sender: user,
      message: message
    });
  }
}

// SocialNetwork class representing the entire social network system
class SocialNetwork {
  constructor() {
    this.users = [];
    this.newsFeed = [];
  }

  // Method to register a new user
  registerUser(username, password, email) {
    const newUser = new User(username, password, email);
    this.users.push(newUser);
    console.log("User registered successfully.");
    return newUser;
  }

  // Method to login a user
  loginUser(username, password) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      console.log("User logged in successfully.");
      return user;
    } else {
      console.log("Invalid credentials. Failed to login.");
      return null;
    }
  }

  // Method to post a message in the news feed
  postMessage(user, message) {
    this.newsFeed.push({
      user: user,
      message: message
    });
  }

  // Method to display the news feed
  displayNewsFeed() {
    console.log("News Feed:");
    this.newsFeed.forEach((post, index) => {
      console.log(`Post ${index + 1}: ${post.user.username} - ${post.message}`);
    });
  }
}

// Usage example

// Creating instance of SocialNetwork
const socialNetwork = new SocialNetwork();

// Registering new users
const user1 = socialNetwork.registerUser("user1", "password1", "user1@example.com");
const user2 = socialNetwork.registerUser("user2", "password2", "user2@example.com");
const user3 = socialNetwork.registerUser("user3", "password3", "user3@example.com");

// Simulating friend requests
user1.sendFriendRequest(user2);
user2.acceptFriendRequest(user1);
user3.sendFriendRequest(user1);

// Simulating messaging between friends
user1.sendMessage(user2, "Hello from user1 to user2!");
user2.sendMessage(user1, "Hello from user2 to user1!");

// Simulating posting in the news feed
socialNetwork.postMessage(user1, "Hello, everyone!");
socialNetwork.postMessage(user2, "Nice to be connected!");

// Displaying the news feed
socialNetwork.displayNewsFeed();