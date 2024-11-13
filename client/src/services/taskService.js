import { request } from 'graphql-request';
import { GET_TASKS, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from '../graphql/queries';

const API_URL = 'http://localhost:4000/graphql';

export const taskService = {
  async getTasks() {
    return await request(API_URL, GET_TASKS);
  },

  async createTask(input) {
    return await request(API_URL, CREATE_TASK, { input });
  },

  async updateTask(id, input) {
    return await request(API_URL, UPDATE_TASK, { id, input });
  },

  async deleteTask(id) {
    return await request(API_URL, DELETE_TASK, { id });
  }
};