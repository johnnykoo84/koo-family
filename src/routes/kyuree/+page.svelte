<script lang="ts">
	import PersonPage from '$lib/components/PersonPage.svelte';
	import { t, getLang } from '$lib/i18n.svelte';
</script>

<PersonPage name={t.kyureeName} role={t.kyureeRole} accentColor="#B5838D">
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
					? "I'm a dedicated mother of two wonderful daughters and a jewelry designer. My days are filled with the joy of raising our children and nurturing their curiosity and creativity."
					: 'Ich bin eine engagierte Mutter von zwei wunderbaren Töchtern und Schmuckdesignerin. Meine Tage sind erfüllt von der Freude, unsere Kinder großzuziehen und ihre Neugier und Kreativität zu fördern.'}
			</p>
			<p>
				{getLang() === 'en'
					? "In my creative time, I design and craft unique jewelry pieces. I find inspiration in nature, architecture, and the beautiful moments of everyday life."
					: 'In meiner kreativen Zeit entwerfe und fertige ich einzigartige Schmuckstücke. Ich finde Inspiration in der Natur, Architektur und den schönen Momenten des Alltags.'}
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
					{getLang() === 'en' ? 'Jewelry Designer' : 'Schmuckdesignerin'}
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Independent' : 'Selbstständig'} · 2018 - {getLang() === 'en' ? 'Present' : 'Heute'}
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Creating handcrafted jewelry pieces with a focus on minimalist, elegant designs. Each piece tells a story and is made with attention to detail.'
						: 'Herstellung von handgefertigten Schmuckstücken mit Fokus auf minimalistische, elegante Designs. Jedes Stück erzählt eine Geschichte und wird mit Liebe zum Detail gefertigt.'}
				</p>
			</div>
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
				? ['Jewelry Design', 'Parenting', 'Cooking', 'Art & Museums', 'Nature', 'Reading']
				: ['Schmuckdesign', 'Elternschaft', 'Kochen', 'Kunst & Museen', 'Natur', 'Lesen'] as interest}
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
		<div class="border-l-2 border-stone-200 pl-6">
			<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
				{getLang() === 'en' ? 'Jewelry Design Certification' : 'Zertifikat Schmuckdesign'}
			</h3>
			<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
				{getLang() === 'en' ? 'Design Academy, South Korea' : 'Design-Akademie, Südkorea'}
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
				{getLang() === 'en' ? 'English — Conversational' : 'Englisch — Konversationsfähig'}
			</li>
			<li>
				{getLang() === 'en' ? 'German — Learning' : 'Deutsch — Lernend'}
			</li>
		</ul>
	</section>
</PersonPage>
