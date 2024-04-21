<script lang="ts">
	import DefaultButton from '../components/buttons/DefaultButton.svelte';

	const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

	$: speed = 5000;
	$: note = 'A5';

	function incrementSpeed(value: number) {
		if (speed + value > 999) {
			speed += value;
		}
	}

	function randomizeNote() {
		let fingerIndex = Math.ceil(Math.random() * 5);
		let noteIndex = Math.ceil(Math.random() * (notes.length - 1));

		note = `${fingerIndex}${notes[noteIndex]}`;
		setTimeout(randomizeNote, speed);
	}

	randomizeNote();
</script>

<div class="flex flex-col items-center justify-center align-middle h-svh">
	<span id="note" class="font-nova-mono text-[12rem]"> {note} </span>
	<div class="flex flex-row items-center">
		<DefaultButton title={'<<'} on:click={() => incrementSpeed(-1000)} />
		<DefaultButton title={'<'} on:click={() => incrementSpeed(-500)} />
		<span class="font-sans m-5">{speed / 1000} s</span>
		<DefaultButton title={'>'} on:click={() => incrementSpeed(500)} />
		<DefaultButton title={'>>'} on:click={() => incrementSpeed(1000)} />
	</div>
</div>
