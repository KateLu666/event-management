<script lang="ts">
	import { auth } from '$lib/firebase/firebase';
	import { authHandlers } from '../../store/authStore';
	import { Alert } from 'flowbite-svelte';

	let email = '';

	let isSubmitting = false;
</script>

<main class="flex flex-col items-center justify-center">
	<div class="mt-12 text-white">
		<h1 class="text-2xl text-white font-bold text-center">Forgot Password</h1>
		<form class="flex flex-col mt-8">
			<div>
				<label for="email" class="block mb-3 font-medium">Email </label>

				<input
					type="email"
					bind:value={email}
					placeholder="Enter your email"
					class="py-3 pl-5 pr-24 bg-transparent border border-borderclr mb-5"
				/>
			</div>

			<!-- Button -->
			<button
				on:click={() => authHandlers.resetPassword(email)}
				on:click={() => (isSubmitting = true)}
				class="p-4 bg-purple-500 text-black rounded-lg mt-3 mb-8 font-bold hover:scale-105 hover:bg-purple-400 transition-all duration-300 disabled:cursor-not-allowed"
			>
				Submit
			</button>

			{#if isSubmitting && email}
				<Alert color="green">
					<span class="font-medium">Email sent!</span>
					Please check your email
				</Alert>
			{/if}
		</form>
	</div>
	<!--  -->
</main>
