export const GET_TASKS = `
  query {
    tasks {
      id
      title
      description
      completed
      createdAt
    }
  }
`;

export const CREATE_TASK = `
  mutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      title
      description
      completed
    }
  }
`;

export const UPDATE_TASK = `
  mutation($id: ID!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
      id
      completed
    }
  }
`;

export const DELETE_TASK = `
  mutation($id: ID!) {
    deleteTask(id: $id)
  }
`;