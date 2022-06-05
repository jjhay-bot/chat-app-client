import { gql } from "@apollo/client";

export const GET_ALL_USER = gql`
  query getAllUsers {
    users {
      id
      firstName
      lastName
      email
    }
  }
`;

export const GET_MSG = gql`
  query Query($receiverId: Int!) {
    messagesByUser(receiverId: $receiverId) {
      id
      text
      receiverId
      senderId
      createdAt
    }
  }
`;
