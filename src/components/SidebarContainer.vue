<script setup lang="ts">
	import { useUiStore } from '@/store/uiStore';

	const uiStore = useUiStore();
</script>

<template>
	<aside
		:class="[uiStore.sidebarClass]"
		class="bg-white h-dvh transition-all duration-400"
	>
		<p>Sidebar Content</p>
		<button @click="uiStore.toggleSidebar">Toggle Sidebar</button>
	</aside>
</template>
