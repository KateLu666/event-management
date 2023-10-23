<script lang="ts">
	import EventCard from '../../components/EventCard.svelte';
	import { collection, query, where, onSnapshot, QuerySnapshot } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase';
	import type { TEvents } from '../../types';

	let events: TEvents[] = [];

	const q = query(collection(db, 'events'));

	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		querySnapshot.forEach((doc) => {
			events.push(doc.data() as TEvents);
			events = events; // SvelteKit specific, reassignement to the array
			// Above two lines of code can be equivalent to
			// events = [...events, doc.data()];
		});
	});
</script>

<main class="text-gray-100 mt-10 max-w-5xl mx-auto">
	<h1 class="text-5xl font-bold my-5 mx-5">Events</h1>
	<div class="grid px-4 md:grid-cols-3 gap-8">
		{#each events as event (event.eventName)}
			<EventCard {...event} />
		{/each}
	</div>
</main>
