<script lang="ts">
	import PersonPage from '$lib/components/PersonPage.svelte';
	import { t, getLang } from '$lib/i18n.svelte';

	const personalPhotos = [
		{ src: '/photos/kyuree_01.jpeg' },
		{ src: '/photos/kyuree_03.JPG' },
		{ src: '/photos/kyuree_04.JPG' },
		{ src: '/photos/kyuree_05.JPG' },
		{ src: '/photos/kyuree_06.jpeg' }
	];

	const photos = [
		{
			src: '/photos/j_01.jpeg',
			en: 'Handcrafted contemporary jewelry pieces',
			de: 'Handgefertigte zeitgenössische Schmuckstücke'
		},
		{
			src: '/photos/j_02.jpeg',
			en: 'Elegant silver and gold designs',
			de: 'Elegante Silber- und Golddesigns'
		},
		{
			src: '/photos/j_03.jpg',
			en: 'Minimalist aesthetic with natural materials',
			de: 'Minimalistische Ästhetik mit natürlichen Materialien'
		},
		{
			src: '/photos/j_04.jpg',
			en: 'Timeless pieces crafted in Seoul',
			de: 'Zeitlose Stücke, gefertigt in Seoul'
		},
		{
			src: '/photos/j_05.jpg',
			en: 'Classical meets modern design',
			de: 'Klassik trifft modernes Design'
		},
		{
			src: '/photos/j_06.jpg',
			en: 'Refined simplicity with bold forms',
			de: 'Raffinierte Schlichtheit mit kräftigen Formen'
		},
		{
			src: '/photos/j_07.jpeg',
			en: 'Each piece tells a unique story',
			de: 'Jedes Stück erzählt eine einzigartige Geschichte'
		},
		{
			src: '/photos/j_08.jpg',
			en: 'Wearable art for everyday elegance',
			de: 'Tragbare Kunst für alltägliche Eleganz'
		}
	];
</script>

<PersonPage name={t.kyureeName} role={t.kyureeRole} accentColor="#B5838D" photo="/photos/kyuree_00.jpeg">
	<!-- Personal Gallery -->
	<section class="mb-12">
		<h2
			class="mb-6 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Gallery' : 'Galerie'}
		</h2>
		<div class="grid gap-4 grid-cols-2 sm:grid-cols-3">
			{#each personalPhotos as photo}
				<div class="overflow-hidden rounded-lg shadow-md">
					<img
						src={photo.src}
						alt="Kyuree Kawk"
						class="w-full"
					/>
				</div>
			{/each}
		</div>
	</section>

	<!-- About -->
	<section class="mb-12">
		<h2
			class="mb-4 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'About Me' : 'Über mich'}
		</h2>
		<div class="prose prose-stone" style="font-family: 'Source Serif 4', serif;">
			<p>
				{getLang() === 'en'
					? "I'm a dedicated mother of two wonderful daughters and a designer with a passion for fashion and jewelry. My days are filled with the joy of raising our children while pursuing my creative work."
					: 'Ich bin eine engagierte Mutter von zwei wunderbaren Töchtern und Designerin mit einer Leidenschaft für Mode und Schmuck. Meine Tage sind erfüllt von der Freude, unsere Kinder großzuziehen und gleichzeitig meiner kreativen Arbeit nachzugehen.'}
			</p>
			<p>
				{getLang() === 'en'
					? "With my fine arts background, I design clothing and jewelry that blend artistic sensibility with wearable elegance. I find inspiration in nature, architecture, and the beautiful moments of everyday life."
					: 'Mit meinem künstlerischen Hintergrund entwerfe ich Kleidung und Schmuck, die künstlerische Sensibilität mit tragbarer Eleganz verbinden. Ich finde Inspiration in der Natur, Architektur und den schönen Momenten des Alltags.'}
			</p>
		</div>
	</section>

	<!-- Creative Work -->
	<section class="mb-12">
		<h2
			class="mb-6 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Creative Work' : 'Kreative Arbeit'}
		</h2>

		<div class="space-y-8">
			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Fashion Designer & Founder' : 'Modedesignerin & Gründerin'}
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					Breha · 2019 - {getLang() === 'en' ? 'Present' : 'Heute'} (6 {getLang() === 'en' ? 'years' : 'Jahre'})
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Founded and run my own fashion brand, designing and selling clothing that combines artistic vision with everyday wearability. Each collection reflects my fine arts background and attention to detail.'
						: 'Gründung und Führung meiner eigenen Modemarke, Entwurf und Verkauf von Kleidung, die künstlerische Vision mit Alltagstauglichkeit verbindet. Jede Kollektion spiegelt meinen künstlerischen Hintergrund und meine Liebe zum Detail wider.'}
				</p>
			</div>

			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Jewelry Designer & Founder' : 'Schmuckdesignerin & Gründerin'}
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					September Nuvo · 2024 - {getLang() === 'en' ? 'Present' : 'Heute'} (2 {getLang() === 'en' ? 'years' : 'Jahre'})
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Contemporary jewelry brand handcrafted in Seoul using silver, gold, and natural materials. Pursuing timeless elegance through balanced classical-modern aesthetics and refined simplicity with bold forms.'
						: 'Zeitgenössische Schmuckmarke, handgefertigt in Seoul aus Silber, Gold und natürlichen Materialien. Streben nach zeitloser Eleganz durch ausgewogene klassisch-moderne Ästhetik und raffinierte Schlichtheit mit kräftigen Formen.'}
				</p>
				<a
					href="https://septembernuvo.shop"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-2 inline-block text-sm text-stone-500 underline hover:text-stone-800"
					style="font-family: 'Fraunces', serif;"
				>
					septembernuvo.shop
				</a>
			</div>
		</div>
	</section>

	<!-- Photo Gallery -->
	<section class="mb-12">
		<h2
			class="mb-6 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'September Nuvo Collection' : 'September Nuvo Kollektion'}
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

	<!-- Interests -->
	<section class="mb-12">
		<h2
			class="mb-4 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Interests' : 'Interessen'}
		</h2>
		<div class="flex flex-wrap gap-2">
			{#each getLang() === 'en'
				? ['Fashion Design', 'Jewelry Design', 'Parenting', 'Cooking', 'Art & Museums', 'Nature']
				: ['Modedesign', 'Schmuckdesign', 'Elternschaft', 'Kochen', 'Kunst & Museen', 'Natur'] as interest}
				<span
					class="rounded-full border border-stone-300 px-3 py-1 text-sm text-stone-600"
					style="font-family: 'Fraunces', serif;"
				>
					{interest}
				</span>
			{/each}
		</div>
	</section>

	<!-- Education -->
	<section class="mb-12">
		<h2
			class="mb-4 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Education' : 'Ausbildung'}
		</h2>
		<div class="space-y-6">
			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'B.A. Western Painting (Fine Arts)' : 'B.A. Westliche Malerei (Bildende Kunst)'}
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Kookmin University, Seoul' : 'Kookmin Universität, Seoul'}
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Studied traditional and contemporary painting techniques, art history, and visual composition. This fine arts background now inspires my fashion and jewelry design work.'
						: 'Studium traditioneller und zeitgenössischer Maltechniken, Kunstgeschichte und visueller Komposition. Dieser künstlerische Hintergrund inspiriert heute meine Mode- und Schmuckdesign-Arbeit.'}
				</p>
			</div>
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
				{getLang() === 'en' ? 'English — Conversational' : 'Englisch — Konversationsfähig'}
			</li>
			<li>
				{getLang() === 'en' ? 'German — Learning' : 'Deutsch — Lernend'}
			</li>
		</ul>
	</section>
</PersonPage>
