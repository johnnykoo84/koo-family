<script lang="ts">
	import PersonPage from '$lib/components/PersonPage.svelte';
	import { t, getLang } from '$lib/i18n.svelte';

	const photos = [
		{
			src: '/photos/jane_01.jpeg',
			en: 'Proudly presenting her colorful mixed-media artwork with glitter and 3D elements',
			de: 'Stolz präsentiert sie ihr farbenfrohes Mixed-Media-Kunstwerk mit Glitzer und 3D-Elementen'
		},
		{
			src: '/photos/jane_02.jpeg',
			en: 'Focused and creative - painting a tree at art class',
			de: 'Konzentriert und kreativ - malt einen Baum im Kunstunterricht'
		},
		{
			src: '/photos/jane_03.jpeg',
			en: 'Pure joy! Getting messy with paint at the art studio',
			de: 'Pure Freude! Wird im Kunstatelier kreativ mit Farben'
		},
		{
			src: '/photos/jane_04.jpeg',
			en: 'Wearing her handmade crown decorated with colorful pom-poms',
			de: 'Trägt ihre selbstgemachte Krone, verziert mit bunten Pompons'
		},
		{
			src: '/photos/jane_05.jpeg',
			en: 'Crafting with scissors, sequins, and pom-poms - developing fine motor skills',
			de: 'Basteln mit Schere, Pailletten und Pompons - Feinmotorik entwickeln'
		},
		{
			src: '/photos/jane_06.jpeg',
			en: 'Celebrating her English reading achievement certificate',
			de: 'Feiert ihr Zertifikat für Englisch-Leseleistungen'
		},
		{
			src: '/photos/jane_07.jpeg',
			en: 'Learning English vocabulary with flashcards',
			de: 'Lernt englische Vokabeln mit Lernkarten'
		},
		{
			src: '/photos/jane_08.jpeg',
			en: 'Ice skating adventures - always ready to try new activities!',
			de: 'Eislauf-Abenteuer - immer bereit, neue Aktivitäten auszuprobieren!'
		}
	];
</script>

<PersonPage name={t.janeName} role={t.janeRole} accentColor="#5B8A9A" photo="/photos/jane.jpg">
	<!-- About -->
	<section class="mb-12">
		<h2
			class="mb-4 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'About Jane' : 'Über Jane'}
		</h2>
		<div class="prose prose-stone" style="font-family: 'Source Serif 4', serif;">
			<p>
				{getLang() === 'en'
					? "Jane is our eldest daughter, turning 6 years old. She's a curious and enthusiastic learner who loves exploring the world around her. She's excited to start 1st grade and make new friends in Berlin!"
					: 'Jane ist unsere älteste Tochter und wird 6 Jahre alt. Sie ist eine neugierige und begeisterte Lernerin, die es liebt, die Welt um sie herum zu erkunden. Sie freut sich darauf, die 1. Klasse zu beginnen und neue Freunde in Berlin zu finden!'}
			</p>
		</div>
	</section>

	<!-- Photo Gallery -->
	<section class="mb-12">
		<h2
			class="mb-6 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? "Jane's World" : 'Janes Welt'}
		</h2>

		<div class="grid gap-6 sm:grid-cols-2">
			{#each photos as photo}
				<div class="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
					<div class="overflow-hidden">
						<img
							src={photo.src}
							alt={getLang() === 'en' ? photo.en : photo.de}
							class="w-full transition-transform duration-500 group-hover:scale-105"
						/>
					</div>
					<p class="p-4 text-sm text-stone-600" style="font-family: 'Source Serif 4', serif;">
						{getLang() === 'en' ? photo.en : photo.de}
					</p>
				</div>
			{/each}
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
				? ['Creative', 'Curious', 'Artistic', 'Enthusiastic', 'Friendly', 'Adventurous']
				: ['Kreativ', 'Neugierig', 'Künstlerisch', 'Begeistert', 'Freundlich', 'Abenteuerlustig'] as trait}
				<span
					class="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-700"
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
					{getLang() === 'en' ? 'Art & Crafts' : 'Kunst & Basteln'}
				</h3>
				<p class="text-sm text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Loves painting, drawing, and creating mixed-media artworks. Enjoys using glitter, pom-poms, and getting her hands messy with paint!'
						: 'Liebt Malen, Zeichnen und das Erstellen von Mixed-Media-Kunstwerken. Genießt es, mit Glitzer, Pompons zu arbeiten und die Hände mit Farbe schmutzig zu machen!'}
				</p>
			</div>

			<div class="rounded-lg border border-stone-200 bg-white p-5">
				<h3 class="mb-2 font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Learning English' : 'Englisch lernen'}
				</h3>
				<p class="text-sm text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Already learning English and received a reading achievement certificate. Eager to add German to her language skills!'
						: 'Lernt bereits Englisch und hat ein Lesezertifikat erhalten. Freut sich darauf, Deutsch zu ihren Sprachkenntnissen hinzuzufügen!'}
				</p>
			</div>

			<div class="rounded-lg border border-stone-200 bg-white p-5">
				<h3 class="mb-2 font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Ice Skating' : 'Eislaufen'}
				</h3>
				<p class="text-sm text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Brave and active - enjoys ice skating and trying new physical activities. Always ready for adventure!'
						: 'Mutig und aktiv - genießt Eislaufen und probiert gerne neue sportliche Aktivitäten aus. Immer bereit für Abenteuer!'}
				</p>
			</div>

			<div class="rounded-lg border border-stone-200 bg-white p-5">
				<h3 class="mb-2 font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Reading & Stories' : 'Lesen & Geschichten'}
				</h3>
				<p class="text-sm text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Enjoys bedtime stories and is developing her reading skills. Has a growing collection of favorite picture books.'
						: 'Genießt Gute-Nacht-Geschichten und entwickelt ihre Lesefähigkeiten. Hat eine wachsende Sammlung von Lieblings-Bilderbüchern.'}
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
				{getLang() === 'en' ? 'Kindergarten Graduate' : 'Kindergartenabschluss'}
			</h3>
			<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
				{getLang() === 'en' ? 'South Korea' : 'Südkorea'} · 2024
			</p>
			<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
				{getLang() === 'en'
					? 'Ready to start 1st grade in Berlin. Has completed English reading programs and is excited to learn German!'
					: 'Bereit, die 1. Klasse in Berlin zu beginnen. Hat Englisch-Leseprogramme abgeschlossen und freut sich darauf, Deutsch zu lernen!'}
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
				{getLang() === 'en' ? 'English — Learning (Certificate achieved)' : 'Englisch — Lernend (Zertifikat erhalten)'}
			</li>
			<li>
				{getLang() === 'en' ? 'German — Ready to learn!' : 'Deutsch — Bereit zu lernen!'}
			</li>
		</ul>
	</section>
</PersonPage>
