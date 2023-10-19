<script lang="ts">
	import type { Member } from '../types';

	export let guestName: string;
	export let guestDesignation: string;
	export let guestPhoto: string;
	export let hostName: string;
	export let hostEmail: string;
	export let hostPhoto: string;
	export let members: Member[];

	let recentMembers = members.slice(0, 3);
</script>

<section class="h-screen w-screen bg-secondary">
	<div class="mt-[224px] ml-[89px] text-white">
		<!-- Socials -->
		<div class="mr-[496px]">
			<p class="text-gray-400">Share</p>
			<div class="flex space-x-2 text-gray-200">
				<p>Facebook</p>
				<p>Twitter</p>
				<p>LinkedIn</p>
			</div>
		</div>

		<!-- Guest -->
		<div class="mt-10">
			<p class="capitalize tracking-widest">GUESTS</p>
			<div class="flex mt-4">
				<img src={guestPhoto} alt={guestName} class="rounded-full h-12 w-12 object-cover" />
				<div class="flex flex-col ml-2">
					<p class="text-sm font-bold">{guestName}</p>
					<p class="text-xm text-gray-200">{guestDesignation}</p>
				</div>
			</div>

			<!-- Host -->
			<p class="capitalize tracking-widest mt-10">HOSTED BY</p>
			<div class="flex mt-4">
				<img src={hostPhoto} alt={hostName} class="rounded-full h-12 w-12 object-cover" />
				<div class="flex flex-col ml-2">
					<p class="text-sm font-bold">{hostName}</p>
					<p class="text-xm text-gray-200">{hostEmail}</p>
				</div>
			</div>

			<!-- Recent members -->
			<p class="capitalize tracking-widest mt-10">RECENT MEMBERS</p>
			<div class="grid grid-cols-2 mt-4">
				{#if recentMembers.length === 0}
					<p>No Members Yet</p>
				{:else}
					{#each recentMembers as member (member.memberName)}
						<div class="mb-4">
							<img
								src={member.memberPhoto === null
									? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagAOppyMeA7F5Dv98mR8mvCbPtCXO5bI_F-Q3aYg21g&s'
									: member.memberPhoto}
								alt="profile.pic"
								class="rounded-full h-12 w-12 object-cover"
							/>
							<div class="flex flex-col ml-2">
								<p class="text-sm font-bold">{member.memberName}</p>
								<p class="text-xm text-gray-200">{member.memberEmail}</p>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</section>
