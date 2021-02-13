import { gql } from 'graphql-request';

const createUser = gql`
  mutation($data: CreateUserInput!) {
    createUser(data: $data) {
      token,
      user {
        id
        username
        email
      }
    }
  }
`;

const login = gql`
  mutation($data: LoginInput!) {
    login(data: $data) {
      token,
      user {
        id
        username
      }
    }
  }
`;

const updateCharacter = gql`
  mutation($data: UpdateCharacterInput!) {
    updateCharacter(data: $data) {
      colour
      bio
    }
  }
`;

export { createUser, login, updateCharacter };
