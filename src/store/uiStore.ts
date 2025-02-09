import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUiStore = defineStore('ui', () => {
	const isSidebarOpen = ref(false);

	const sidebarClass = computed(() => (isSidebarOpen.value ? 'w-16' : 'w-80'));

	function toggleSidebar() {
		isSidebarOpen.value = !isSidebarOpen.value;
	}

	function setSidebarState(value: boolean) {
		isSidebarOpen.value = value;
	}

	return { isSidebarOpen, sidebarClass, toggleSidebar, setSidebarState };
});
