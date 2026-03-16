<script lang="ts">
	import PersonPage from '$lib/components/PersonPage.svelte';
	import { t, getLang } from '$lib/i18n.svelte';
</script>

<PersonPage name={t.ilmoName} role={t.ilmoRole} accentColor="#C4785A">
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
					? "I'm a software developer and entrepreneur with over 10 years of experience in building digital products. I specialize in automation and digital transformation solutions for small and medium-sized businesses."
					: 'Ich bin Softwareentwickler und Unternehmer mit über 10 Jahren Erfahrung in der Entwicklung digitaler Produkte. Ich spezialisiere mich auf Automatisierungs- und Digitalisierungslösungen für kleine und mittlere Unternehmen.'}
			</p>
			<p>
				{getLang() === 'en'
					? "After successfully running my business in South Korea, I'm expanding to Berlin to tap into Europe's vibrant tech ecosystem and serve international clients."
					: 'Nach dem erfolgreichen Aufbau meines Unternehmens in Südkorea expandiere ich nach Berlin, um das lebendige Tech-Ökosystem Europas zu nutzen und internationale Kunden zu bedienen.'}
			</p>
		</div>
	</section>

	<!-- Work Experience -->
	<section class="mb-12">
		<h2
			class="mb-6 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Experience' : 'Berufserfahrung'}
		</h2>

		<div class="space-y-8">
			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Founder & CEO' : 'Gründer & Geschäftsführer'}
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					Koostory · 2020 - {getLang() === 'en' ? 'Present' : 'Heute'}
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Building automation and digital transformation solutions for SMEs. Helping businesses streamline their operations through custom software solutions.'
						: 'Entwicklung von Automatisierungs- und Digitalisierungslösungen für KMUs. Unterstützung von Unternehmen bei der Optimierung ihrer Abläufe durch maßgeschneiderte Softwarelösungen.'}
				</p>
				<a
					href="https://koostory.net"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-2 inline-block text-sm text-stone-500 underline hover:text-stone-800"
					style="font-family: 'Fraunces', serif;"
				>
					koostory.net
				</a>
			</div>

			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Senior Software Developer' : 'Senior Softwareentwickler'}
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Previous Company' : 'Vorheriges Unternehmen'} · 2015 - 2020
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Led development teams and built enterprise software solutions. Focused on process automation and system integration.'
						: 'Leitung von Entwicklungsteams und Aufbau von Unternehmenssoftwarelösungen. Fokus auf Prozessautomatisierung und Systemintegration.'}
				</p>
			</div>
		</div>
	</section>

	<!-- Skills -->
	<section class="mb-12">
		<h2
			class="mb-4 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Skills' : 'Fähigkeiten'}
		</h2>
		<div class="flex flex-wrap gap-2">
			{#each ['TypeScript', 'Python', 'React', 'Node.js', 'Cloud Architecture', 'Process Automation', 'Team Leadership'] as skill}
				<span
					class="rounded-full border border-stone-300 px-3 py-1 text-sm text-stone-600"
					style="font-family: 'Fraunces', serif;"
				>
					{skill}
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
				{getLang() === 'en' ? "Bachelor's in Computer Science" : 'Bachelor in Informatik'}
			</h3>
			<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
				{getLang() === 'en' ? 'University in South Korea' : 'Universität in Südkorea'}
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
				{getLang() === 'en' ? 'English — Fluent' : 'Englisch — Fließend'}
			</li>
			<li>
				{getLang() === 'en' ? 'German — Learning' : 'Deutsch — Lernend'}
			</li>
		</ul>
	</section>
</PersonPage>
