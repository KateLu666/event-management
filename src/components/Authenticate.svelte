<script lang="ts">
	import { authHandlers, authStore } from '../store/authStore';

	let email = '';
	let password = '';
	let confirmPassword = '';

	let register = false;

	async function handleSubmit() {
		if (!email || !password || (register && !confirmPassword)) {
			return;
		}

		if (register && password === confirmPassword) {
			try {
				await authHandlers.signup(email, password);
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				await authHandlers.login(email, password);
			} catch (err) {
				console.log(err);
			}
		}

		if ($authStore.currentUser) {
			window.location.href = '/main';
		}
	}
</script>

<main class="flex flex-col items-center justify-center">
	<div class="mt-12 text-white">
		<h1 class="text-2xl text-white font-bold text-center">{register ? 'Register' : 'Sign In'}</h1>
		<form class="flex flex-col mt-8">
			<div>
				<label for="email" class="block mb-3 font-medium">Email </label>

				<input
					type="email"
					placeholder="Enter your email"
					bind:value={email}
					class="py-3 pl-5 pr-24 bg-transparent border border-borderclr mb-5"
				/>
			</div>

			<label for="password" class="block mb-3 font-medium"> Password</label>
			<input
				type="password"
				placeholder="Enter your password"
				bind:value={password}
				class="py-3 pl-5 pr-24 mb-4 bg-transparent border border-borderclr"
			/>

			{#if !register}
				<a href="/forgotPassword" class="text-purple-500 hover:text-purple-400">Forgot Password ?</a
				>
			{/if}

			{#if register}
				<label for="password" class="block my-2 font-medium"> Confirm Password</label>
				<input
					type="password"
					placeholder="Confirm your password"
					bind:value={confirmPassword}
					class="py-3 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			{/if}

			<!-- Button -->
			<button
				on:click={handleSubmit}
				class="p-4 bg-purple-500 text-black rounded-lg mt-8 mb-8 font-bold hover:scale-105 hover:bg-purple-400 transition-all duration-300 disabled:cursor-not-allowed"
			>
				{register ? 'Sign Up' : 'Sign In'}
			</button>

			{#if !register}
				<div class="inline-flex items-center justify-center w-full">
					<hr class="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
					<span
						class="absolute px-3 text-gray-100 -translate-x-1/2 bg-primary left-1/2 dark:text-white dark:bg-gray-900"
						>OR</span
					>
				</div>

				<button
					on:click={authHandlers.loginWithGoogle}
					class="p-4 bg-white rounded-lg mt-8 font-bold text-black hover:scale-105 transition-all duration-300 disabled:cursor-not-allowed hover:bg-gray-100"
				>
					<i class="fa-brands fa-google fa-xl mr-2" style="color: #eb4d27;" />Sign In with Google</button
				>{/if}
		</form>

		{#if register}
			<div
				role="presentation"
				class="mt-3 text-center cursor-pointer hover:text-gray-100"
				on:click={() => {
					register = !register;
				}}
			>
				Already have an account? <p>Login</p>
			</div>
		{:else}<div
				role="presentation"
				class="mt-5 text-center cursor-pointer hover:text-gray-100"
				on:click={() => {
					register = !register;
				}}
			>
				Don't have an account? <p>Sign Up</p>
			</div>{/if}
	</div>
	<!--  -->
</main>

<!-- <div class="mt-12">
	
</div> -->
