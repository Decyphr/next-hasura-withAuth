import gql from "graphql-tag";

const GET_TASKS = gql`
  query getTasks {
    tasks {
      id
      title
    }
  }
`;

export default GET_TASKS;
