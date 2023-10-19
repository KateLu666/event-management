<script lang="ts">
	import heroPic from '$lib/assets/heropic.svg';
	import hero1 from '$lib/assets/hero1.svg';
	import hero2 from '$lib/assets/hero2.svg';
	import hero3 from '$lib/assets/hero3.svg';
	import { goto } from '$app/navigation';
</script>

<main>
	<div class="relative mt-[150px] ml-[20px] p-2 lg:ml-[133px] flex">
		<!-- Main Tagline -->
		<div>
			<h1 class="text-[32px] font-bold text-white lg:w-[710px]">
				Your Ticket to Extraordinary : Register, Discover, Connect !
			</h1>
			<div class="flex flex-col px-10 sm:flex-row mt-20 gap-14">
				<button
					on:click={() => goto('/create')}
					class="py-[23px] px-[86px] bg-white text-xl w-[299px] hover:bg-black hover:text-white duration-300 transition-colors rounded"
					>Create Event</button
				>
				<button
					on:click={() => goto('/eventlist')}
					class="py-[23px] px-[86px] bg-black text-white text-xl w-[299px] hover:bg-white hover:text-black duration-300 transition-colors rounded"
					>List of Events</button
				>
			</div>
		</div>

		<img
			src={heroPic}
			alt="logo"
			class="absolute top-[-50px] left-[800px] h-[376px] w][706px] hidden xl:block"
		/>
	</div>

	<div
		class="mx-auto max-w-[1500px] flex flex-col items-center mt-[60px] bg-secondary rounded-lg p-10"
	>
		<div class="grid md:grid-cols-3 gap-x-10 gap-y-10">
			<!-- feature - 1 -->
			<div>
				<img src={hero1} alt="hero1" class="h-[203px] w-[400px] py-2" />
				<h2 class="text-2xl font-bold text-white text-center">Create Events</h2>
				<p class="text-sm text-gray-300 text-center">
					Your Events your way : Create, Innovate, Collaborate
				</p>
			</div>

			<!-- feature - 2 -->
			<div>
				<img src={hero2} alt="hero2" class="h-[203px] w-[400px] py-2" />
				<h2 class="text-2xl font-bold text-white text-center">Join Events</h2>
				<p class="text-sm text-gray-300 text-center">Join Events, Acquire Valuable Skills</p>
			</div>

			<!-- feature - 2 -->
			<div>
				<img src={hero3} alt="hero3" class="h-[203px] w-[400px] py-2" />
				<h2 class="text-2xl font-bold text-white text-center">Track Events</h2>
				<p class="text-sm text-gray-300 text-center">Track Events and Discover New Opportunities</p>
			</div>
		</div>
	</div>
</main>
