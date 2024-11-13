<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <h1 class="text-2xl font-bold mb-8">Lista de Tarefas</h1>
              
              <TaskForm @submit="createTask" />
              
              <div class="space-y-4">
                <TaskItem
                  v-for="task in tasks"
                  :key="task.id"
                  :task="task"
                  @toggle-status="updateTaskStatus"
                  @delete="deleteTask"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TaskForm from '@/components/TaskForm.vue';
import TaskItem from '@/components/TaskItem.vue';
import { taskService } from '@/services/taskService';

const tasks = ref([]);

const fetchTasks = async () => {
  const response = await taskService.getTasks();
  tasks.value = response.tasks;
};

const createTask = async (taskData) => {
  await taskService.createTask(taskData);
  await fetchTasks();
};

const updateTaskStatus = async (task) => {
  await taskService.updateTask(task.id, {
    completed: !task.completed
  });
  await fetchTasks();
};

const deleteTask = async (id) => {
  await taskService.deleteTask(id);
  await fetchTasks();
};

onMounted(fetchTasks);
</script>