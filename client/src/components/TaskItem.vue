<template>
  <div class="flex items-center justify-between p-4 border rounded">
    <div>
      <h3 
        class="font-semibold" 
        :class="{ 'line-through': task.completed }"
      >
        {{ task.title }}
      </h3>
      <p class="text-sm text-gray-600">{{ task.description }}</p>
    </div>
    <div class="flex gap-2">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="$emit('toggle-status', task)"
      />
      <button
        @click="$emit('delete', task.id)"
        class="text-red-500 hover:text-red-700"
      >
        Excluir
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
});
</script>