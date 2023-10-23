<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import { authStore } from '../store/authStore';
	import type { User } from 'firebase/auth';
	import { auth } from '$lib/firebase/firebase';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let currentUser: User | null;
	authStore.subscribe((value) => {
		currentUser = value.currentUser;
	});

	onMount(() => {
		const allowedPaths = ['/', '/forgotPassword', '/resetPassword'];

		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			authStore.update((curr) => {
				return { ...curr, isLoading: false, currentUser: user };
			});

			if (!user && !allowedPaths.includes(window.location.pathname)) {
				goto('/');
			}
		});

		return unsubscribe;
	});
</script>

<div>
	{#if $authStore.currentUser}
		<Navbar />
	{/if}
	<slot />
</div>
