<script lang="ts">
	import { t, getLang } from '$lib/i18n.svelte';

	// Landscape photos (wider than tall)
	const landscapePhotos = [
		'/photos/family_01.jpeg',
		'/photos/family_02.JPG',
		'/photos/family_03.JPG',
		'/photos/family_04.JPG',
		'/photos/family_05.jpeg',
		'/photos/family_06.JPG',
		'/photos/family_08.JPG',
		'/photos/family_09.JPG',
		'/photos/family_10.jpeg',
		'/photos/family_11.JPG',
		'/photos/family_12.JPG',
		'/photos/family_13.jpg',
		'/photos/couple_01.jpeg',
		'/photos/couple_02.jpeg',
		'/photos/couple_03.jpeg',
		'/photos/couple_04.jpeg',
		'/photos/couple_05.jpeg',
		'/photos/couple_07.JPG',
		'/photos/couple_08.jpeg',
		'/photos/couple_09.jpeg'
	];

	// Portrait photos (taller than wide)
	const portraitPhotos = [
		'/photos/family_07.JPG',
		'/photos/couple_06.JPG',
		'/photos/couple_10.JPG'
	];
</script>

<svelte:head>
	<title>{getLang() === 'en' ? 'Family Gallery' : 'Familiengalerie'} | {t.title}</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div
	class="min-h-screen"
	style="background: linear-gradient(180deg, #FDF8F3 0%, #F9F1E8 50%, #FDF8F3 100%);"
>
	<header class="relative px-6 pt-24 pb-12 md:pt-28">
		<div class="mx-auto max-w-5xl">
			<a
				href="/"
				class="mb-8 inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-stone-800"
				style="font-family: 'Fraunces', serif;"
			>
				&larr; {t.backToHome}
			</a>

			<h1
				class="mb-4 text-4xl text-stone-800 md:text-5xl"
				style="font-family: 'Fraunces', serif; font-weight: 500;"
			>
				{getLang() === 'en' ? 'Family Gallery' : 'Familiengalerie'}
			</h1>
			<p class="text-lg text-stone-600" style="font-family: 'Source Serif 4', serif;">
				{getLang() === 'en' ? 'Moments together as a family' : 'Gemeinsame Momente als Familie'}
			</p>
		</div>
	</header>

	<main class="px-6 pb-20">
		<div class="mx-auto max-w-5xl">
			<!-- Landscape photos -->
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
				{#each landscapePhotos as src}
					<div class="overflow-hidden rounded-lg bg-white shadow-md">
						<img
							{src}
							alt="Koo Family"
							class="w-full"
						/>
					</div>
				{/each}
			</div>

			<!-- Portrait photos -->
			<div class="grid gap-6 grid-cols-3">
				{#each portraitPhotos as src}
					<div class="overflow-hidden rounded-lg bg-white shadow-md">
						<img
							{src}
							alt="Koo Family"
							class="w-full"
						/>
					</div>
				{/each}
			</div>
		</div>
	</main>

	<footer class="px-6 py-12">
		<div class="mx-auto max-w-5xl">
			<div class="border-t border-stone-200 pt-8 text-center">
				<a
					href="/"
					class="text-sm text-stone-500 transition-colors hover:text-stone-800"
					style="font-family: 'Fraunces', serif;"
				>
					&larr; {t.backToHome}
				</a>
			</div>
		</div>
	</footer>
</div>
