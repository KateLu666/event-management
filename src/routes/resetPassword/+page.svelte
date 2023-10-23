<script lang="ts">
	import { auth } from '$lib/firebase/firebase';
	import { authHandlers } from '../../store/authStore';
	import { Alert } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let password = '';
	let confirmPassword = '';
	let successMessage = false;

	const params = new URLSearchParams($page.url.toString());
	const oobCode: string | null = params.get('oobCode');

	const handleSubmit = async (e: Event) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords did not match.');
			return;
		}

		try {
			if (oobCode) {
				await authHandlers.confirmThePasswordReset(oobCode, confirmPassword);
				password = '';
				confirmPassword = '';
				successMessage = true;
			} else {
				alert('Something is wrong; try again later!');
				console.log('missing oobCode');
			}
		} catch (error: any) {
			if (error.code === 'auth/invalid-action-code') {
				alert('Something is wrong; try again later.');
			}
			console.log(error.message);
		}
	};
</script>

<main class="flex flex-col items-center justify-center">
	<div class="mt-12 text-white">
		<h1 class="text-2xl text-white font-bold text-center">Reset Password</h1>
		<form class="flex flex-col mt-8">
			<div>
				<label for="password" class="block mb-3 font-medium">Password </label>

				<input
					type="password"
					bind:value={password}
					placeholder="Enter new password"
					class="py-3 pl-5 pr-24 bg-transparent border border-borderclr mb-5"
				/>

				<label for="password" class="block my-2 font-medium"> Confirm Password</label>
				<input
					type="password"
					placeholder="Confirm new password"
					bind:value={confirmPassword}
					class="py-3 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>

			<!-- Button -->
			<button
				on:click={handleSubmit}
				class="p-4 bg-purple-500 text-black rounded-lg mt-10 mb-8 font-bold hover:scale-105 hover:bg-purple-400 transition-all duration-300 disabled:cursor-not-allowed"
			>
				Reset
			</button>
		</form>
	</div>
	<!--  -->
</main>
