<script lang="ts">
	import { authHandlers, authStore } from '../store/authStore';
	import { Alert } from 'flowbite-svelte';

	let action = '';
	let newEmail = '';
	let newPass = '';
	let errorMessage: string | null = null;

	async function handleSubmit() {
		errorMessage = null;
		if (!action) {
			return;
		}
		try {
			if (action === 'updatePass') {
				await authHandlers.updatePassword(newPass);
			}

			if (action === 'updateEmail') {
				await authHandlers.updateEmail(newEmail);
			}
		} catch (error: any) {
			alert('An error occurred. Please try again later.');
		}
	}
</script>

<div class="flex flex-col items-center justify-center">
	<div class="flex flex-row">
		<button
			class="px-5 py-3 m-10 bg-purple-500 hover:bg-purple-400 rounded-full"
			on:click={() => {
				action = 'updateEmail';
			}}>Update Email</button
		>
		<button
			class="px-5 py-3 m-10 bg-purple-500 hover:bg-purple-400 rounded-full"
			on:click={() => {
				action = 'updatePass';
			}}>Update Password</button
		>
	</div>
	{#if action === 'updatePass'}
		<form>
			<input
				type="password"
				placeholder="Enter new password"
				bind:value={newPass}
				class="py-3 pl-5 pr-24 bg-transparent border border-borderclr mb-5 text-white"
			/>

			<button class="px-3 py-2 mx-3 bg-purple-400 rounded-full" on:click={handleSubmit}
				>Submit</button
			>
		</form>
	{/if}
	{#if action === 'updateEmail'}
		<form>
			<input
				type="email"
				placeholder="Enter new Email"
				bind:value={newEmail}
				class="py-3 pl-5 pr-24 bg-transparent border border-borderclr mb-5 text-white"
			/>
			<button class="px-3 py-2 mx-3 bg-purple-400 rounded-full" on:click={handleSubmit}
				>Submit</button
			>
		</form>
	{/if}
</div>
