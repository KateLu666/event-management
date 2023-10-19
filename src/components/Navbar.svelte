<script lang="ts">
	import type { User } from 'firebase/auth';
	import { authStore, authHandlers } from '../store/store';
	import { auth } from '$lib/firebase';

	let currentUser: User | null;
	authStore.subscribe((value) => {
		currentUser = value.user;
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
			<img
				src={currentUser?.photoURL}
				alt={currentUser?.displayName}
				class="w-12 h-12 rounded-full object-cover"
			/>
			<div class="flex flex-col">
				<p>
					Logged Out as : <span class="text-purple-500 italic font-bold"
						>{currentUser?.displayName}</span
					>
				</p>
				<p>{currentUser?.email}</p>
			</div>
			<button
				on:click={authHandlers.logout}
				class="bg-white hover:bg-grey-100 text-black font-bold py-1 px-3 border-b-4 border-gray-700 hover:border-gray-500 rounded"
				>Log Out</button
			>
		</div>
	{/if}
</header>
