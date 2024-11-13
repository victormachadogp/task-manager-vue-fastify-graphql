<template>
  <div class="mb-8">
    <div class="flex flex-col gap-4">
      <input
        v-model="task.title"
        class="px-4 py-2 border rounded"
        placeholder="Título da tarefa"
      />
      <textarea
        v-model="task.description"
        class="px-4 py-2 border rounded"
        placeholder="Descrição"
      ></textarea>
      <button
        @click="handleSubmit"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {{ isEditing ? 'Atualizar' : 'Adicionar' }} Tarefa
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['submit']);
const task = ref({
  title: '',
  description: ''
});

const isEditing = ref(false);

const handleSubmit = () => {
  if (task.value.title.trim()) {
    emit('submit', { ...task.value });
    task.value = { title: '', description: '' };
  }
};
</script>