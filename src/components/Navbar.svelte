<script lang="ts">
	import type { User } from 'firebase/auth';
	import { authStore, authHandlers } from '../store/authStore';
	import { auth } from '$lib/firebase/firebase';
	import { goto } from '$app/navigation';

	let currentUser: User | null;
	authStore.subscribe((value) => {
		currentUser = value.currentUser;
	});
</script>

<header class="bg-secondary p-4 flex justify-between items-center text-white">
	<h1 class="font-bold text-sm md:text-2xl md:ml-10 tracking-widest ml-3">Event Manager Co.</h1>

	<!-- Links -->
	<div class="flex items-center space-x-10 font-semibold">
		<a href="/main">Main</a>
		<a href="/eventlist">Event List</a>
		<a href="/create">Create</a>
	</div>

	<!-- User/Logout -->
	{#if currentUser}
		<div class="items-center space-x-2 hidden xl:inline-flex">
			<div class="flex flex-col">
				<p>
					<span class="text-purple-500 italic font-bold">{currentUser?.email}</span>
				</p>
				<p />
			</div>
			<button
				on:click={() => goto('/updateProfile')}
				class="bg-white hover:bg-grey-100 text-black font-bold py-1 px-3 border-b-4 border-gray-700 hover:border-gray-500 rounded"
				>Update</button
			>
			<button
				on:click={authHandlers.logout}
				class="bg-white hover:bg-grey-100 text-black font-bold py-1 px-3 border-b-4 border-gray-700 hover:border-gray-500 rounded"
				>Log Out</button
			>
		</div>
	{/if}
</header>
