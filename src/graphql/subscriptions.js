import { gql } from "@apollo/client";

export const MSG_SUB = gql`
  subscription Subscription {
    messageAdded {
      id
      text
      receiverId
      senderId
      createdAt
    }
  }
`;

const COMMENTS_SUBSCRIPTION = gql`
  subscription OnCommentAdded($postID: ID!) {
    commentAdded(postID: $postID) {
      id
      content
    }
  }
`;