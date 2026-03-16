<script lang="ts">
	import PersonPage from '$lib/components/PersonPage.svelte';
	import { t, getLang } from '$lib/i18n.svelte';
</script>

<PersonPage name={t.jennieName} role={t.jennieRole} accentColor="#8B7BA8" photo="/photos/jennie.jpg">
	<!-- About -->
	<section class="mb-12">
		<h2
			class="mb-4 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'About Jennie' : 'Über Jennie'}
		</h2>
		<div class="prose prose-stone" style="font-family: 'Source Serif 4', serif;">
			<p>
				{getLang() === 'en'
					? "Jennie is our youngest, a joyful 4-year-old full of energy and laughter. She brings sunshine to our family every day with her playful spirit and adorable personality. She loves kindergarten and is always ready for new adventures!"
					: 'Jennie ist unsere Jüngste, eine fröhliche 4-Jährige voller Energie und Lachen. Sie bringt jeden Tag Sonnenschein in unsere Familie mit ihrem verspielten Geist und ihrer liebenswerten Persönlichkeit. Sie liebt den Kindergarten und ist immer bereit für neue Abenteuer!'}
			</p>
		</div>
	</section>

	<!-- Personality -->
	<section class="mb-12">
		<h2
			class="mb-4 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Personality' : 'Persönlichkeit'}
		</h2>
		<div class="flex flex-wrap gap-2">
			{#each getLang() === 'en'
				? ['Joyful', 'Playful', 'Energetic', 'Affectionate', 'Adventurous', 'Funny']
				: ['Fröhlich', 'Verspielt', 'Energiegeladen', 'Liebevoll', 'Abenteuerlustig', 'Lustig'] as trait}
				<span
					class="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700"
					style="font-family: 'Fraunces', serif;"
				>
					{trait}
				</span>
			{/each}
		</div>
	</section>

	<!-- Interests & Hobbies -->
	<section class="mb-12">
		<h2
			class="mb-6 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Interests & Hobbies' : 'Interessen & Hobbys'}
		</h2>

		<div class="grid gap-6 md:grid-cols-2">
			<div class="rounded-lg border border-stone-200 bg-white p-5">
				<h3 class="mb-2 font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Playing with Toys' : 'Spielen mit Spielzeug'}
				</h3>
				<p class="text-sm text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Loves her dolls, building blocks, and creating imaginative play scenarios with her big sister.'
						: 'Liebt ihre Puppen, Bausteine und das Erfinden fantasievoller Spielszenarien mit ihrer großen Schwester.'}
				</p>
			</div>

			<div class="rounded-lg border border-stone-200 bg-white p-5">
				<h3 class="mb-2 font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Singing & Dancing' : 'Singen & Tanzen'}
				</h3>
				<p class="text-sm text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Always singing her favorite songs and dancing around the house. Loves to put on performances.'
						: 'Singt immer ihre Lieblingslieder und tanzt durch das Haus. Liebt es, Aufführungen zu machen.'}
				</p>
			</div>

			<div class="rounded-lg border border-stone-200 bg-white p-5">
				<h3 class="mb-2 font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Animals' : 'Tiere'}
				</h3>
				<p class="text-sm text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Fascinated by animals of all kinds. Dreams of visiting the Berlin Zoo and seeing all the animals.'
						: 'Fasziniert von allen Arten von Tieren. Träumt davon, den Berliner Zoo zu besuchen und alle Tiere zu sehen.'}
				</p>
			</div>

			<div class="rounded-lg border border-stone-200 bg-white p-5">
				<h3 class="mb-2 font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Following Big Sister' : 'Der großen Schwester folgen'}
				</h3>
				<p class="text-sm text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Adores her big sister Jane and loves to do everything she does. They are best friends!'
						: 'Vergöttert ihre große Schwester Jane und liebt es, alles zu tun, was sie tut. Sie sind beste Freundinnen!'}
				</p>
			</div>
		</div>
	</section>

	<!-- Education -->
	<section class="mb-12">
		<h2
			class="mb-4 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Education' : 'Bildung'}
		</h2>
		<div class="border-l-2 border-stone-200 pl-6">
			<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
				{getLang() === 'en' ? 'Kindergarten' : 'Kindergarten'}
			</h3>
			<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
				{getLang() === 'en' ? 'Currently attending' : 'Aktuell'} · 2023 - {getLang() === 'en' ? 'Present' : 'Heute'}
			</p>
			<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
				{getLang() === 'en'
					? 'Enjoying kindergarten and learning through play. Looking forward to joining a Kita in Berlin!'
					: 'Genießt den Kindergarten und lernt durch Spielen. Freut sich darauf, einer Kita in Berlin beizutreten!'}
			</p>
		</div>
	</section>

	<!-- Languages -->
	<section>
		<h2
			class="mb-4 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Languages' : 'Sprachen'}
		</h2>
		<ul class="space-y-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
			<li>
				{getLang() === 'en' ? 'Korean — Native' : 'Koreanisch — Muttersprache'}
			</li>
			<li>
				{getLang() === 'en' ? 'German — Will learn soon!' : 'Deutsch — Wird bald lernen!'}
			</li>
		</ul>
	</section>
</PersonPage>
