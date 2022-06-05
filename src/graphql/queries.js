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
