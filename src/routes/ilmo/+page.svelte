<script lang="ts">
	import PersonPage from '$lib/components/PersonPage.svelte';
	import { t, getLang } from '$lib/i18n.svelte';

	const photos = [
		{ src: '/photos/ilmo_01.JPG' },
		{ src: '/photos/ilmo_02.jpeg' },
		{ src: '/photos/ilmo_03.jpeg' },
		{ src: '/photos/ilmo_04.jpeg' },
		{ src: '/photos/ilmo_05.jpeg' },
		{ src: '/photos/ilmo_06.JPG' },
		{ src: '/photos/ilmo_07.JPG' },
		{ src: '/photos/ilmo_08.jpeg' },
		{ src: '/photos/ilmo_09.jpeg' },
		{ src: '/photos/ilmo_10.JPG' }
	];
</script>

<PersonPage name={t.ilmoName} role={t.ilmoRole} accentColor="#C4785A" photo="/photos/ilmo_10.JPG">
	<!-- Photo Gallery -->
	<section class="mb-12">
		<h2
			class="mb-6 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Gallery' : 'Galerie'}
		</h2>
		<div class="grid gap-4 grid-cols-2 sm:grid-cols-3">
			{#each photos.slice(0, 6) as photo}
				<div class="overflow-hidden rounded-lg shadow-md">
					<img
						src={photo.src}
						alt="Ilmo Koo"
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
					? "With a passion for bridging business needs with technology, I specialize in software development and requirements consulting. As the founder of Kooslab, I help businesses turn ideas into clear, actionable software requirements, ensuring efficient development and successful digital transformation."
					: 'Mit einer Leidenschaft für die Verbindung von Geschäftsanforderungen und Technologie spezialisiere ich mich auf Softwareentwicklung und Anforderungsberatung. Als Gründer von Kooslab helfe ich Unternehmen, Ideen in klare, umsetzbare Softwareanforderungen zu verwandeln und eine effiziente Entwicklung sowie erfolgreiche digitale Transformation zu gewährleisten.'}
			</p>
			<p>
				{getLang() === 'en'
					? "With extensive experience in software architecture, product strategy, and technical consulting, I work with startups and enterprises to minimize risks, optimize workflows, and accelerate execution. Berlin's vibrant tech ecosystem is the perfect place to expand my consulting practice and serve international clients."
					: 'Mit umfangreicher Erfahrung in Softwarearchitektur, Produktstrategie und technischer Beratung arbeite ich mit Startups und Unternehmen zusammen, um Risiken zu minimieren, Arbeitsabläufe zu optimieren und die Umsetzung zu beschleunigen. Berlins lebendiges Tech-Ökosystem ist der perfekte Ort, um meine Beratungspraxis zu erweitern und internationale Kunden zu bedienen.'}
			</p>
		</div>
	</section>

	<!-- Kooslab Highlights -->
	<section class="mb-12">
		<h2
			class="mb-4 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Kooslab: Custom Digital Solutions' : 'Kooslab: Maßgeschneiderte Digitallösungen'}
		</h2>
		<div class="rounded-lg border border-stone-200 bg-white p-6">
			<p class="mb-4 text-stone-600" style="font-family: 'Source Serif 4', serif;">
				{getLang() === 'en'
					? 'Empowering small teams to make big leaps through precision-built software solutions and automation.'
					: 'Befähigung kleiner Teams zu großen Sprüngen durch präzise entwickelte Softwarelösungen und Automatisierung.'}
			</p>

			<div class="mb-4">
				<h4 class="mb-2 text-sm font-medium text-stone-700" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'SaaS Products' : 'SaaS-Produkte'}
				</h4>
				<div class="flex flex-wrap gap-2">
					{#each ['eQuest', getLang() === 'en' ? 'Requirements Management (AI-assisted)' : 'Anforderungsmanagement (KI-gestützt)', getLang() === 'en' ? 'Quotation Tool' : 'Angebots-Tool'] as product}
						<span class="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600" style="font-family: 'Fraunces', serif;">
							{product}
						</span>
					{/each}
				</div>
			</div>

			<div>
				<h4 class="mb-2 text-sm font-medium text-stone-700" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Proven Results' : 'Nachgewiesene Ergebnisse'}
				</h4>
				<ul class="space-y-1 text-sm text-stone-600" style="font-family: 'Source Serif 4', serif;">
					<li>{getLang() === 'en' ? '• 80% reduction in documentation time' : '• 80% Reduzierung der Dokumentationszeit'}</li>
					<li>{getLang() === 'en' ? '• 40% revenue increase for clients' : '• 40% Umsatzsteigerung für Kunden'}</li>
					<li>{getLang() === 'en' ? '• 9+ custom solutions delivered' : '• 9+ maßgeschneiderte Lösungen geliefert'}</li>
				</ul>
			</div>

			<a
				href="https://koostory.net"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-4 inline-block text-sm text-stone-500 underline hover:text-stone-800"
				style="font-family: 'Fraunces', serif;"
			>
				koostory.net
			</a>
		</div>
	</section>

	<!-- Specialties -->
	<section class="mb-12">
		<h2
			class="mb-4 text-2xl text-stone-800"
			style="font-family: 'Fraunces', serif; font-weight: 500;"
		>
			{getLang() === 'en' ? 'Specialties' : 'Spezialisierungen'}
		</h2>
		<div class="flex flex-wrap gap-2">
			{#each getLang() === 'en'
				? ['Software Requirements Engineering', 'Product Strategy', 'Digital Transformation', 'System Architecture', 'Process Optimization', 'Business-Tech Alignment']
				: ['Software-Anforderungsanalyse', 'Produktstrategie', 'Digitale Transformation', 'Systemarchitektur', 'Prozessoptimierung', 'Business-Tech-Abstimmung'] as skill}
				<span
					class="rounded-full border border-stone-300 px-3 py-1 text-sm text-stone-600"
					style="font-family: 'Fraunces', serif;"
				>
					{skill}
				</span>
			{/each}
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
			<!-- Kooslab -->
			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Founder & CEO / Requirements Expert' : 'Gründer & CEO / Anforderungsexperte'}
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					Kooslab · 2023 - {getLang() === 'en' ? 'Present' : 'Heute'}
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Software requirements consulting for SMEs. Helping businesses build the right software by defining clear requirements, bridging the gap between business needs and development teams, and delivering streamlined, scalable solutions.'
						: 'Software-Anforderungsberatung für KMUs. Unterstützung von Unternehmen beim Aufbau der richtigen Software durch klare Anforderungsdefinition, Überbrückung der Lücke zwischen Geschäftsanforderungen und Entwicklungsteams.'}
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

			<!-- Code States -->
			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Chief Product Officer → R&D Group Lead' : 'Chief Product Officer → F&E-Gruppenleiter'}
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					Code States · 2018 - 2023 (5+ {getLang() === 'en' ? 'years' : 'Jahre'})
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Led B2C and B2B educational business growth, scaling revenue to $27M+ with $7M+ in operating profit (2022). Hired and managed a team of 200+, driving product innovation, curriculum development, and business optimization. Strengthened the company\'s position as a leader in tech education.'
						: 'Führte B2C- und B2B-Bildungsgeschäftswachstum und skalierte den Umsatz auf über 27 Mio. USD mit über 7 Mio. USD Betriebsgewinn (2022). Einstellung und Führung eines Teams von über 200 Mitarbeitern, Förderung von Produktinnovation und Geschäftsoptimierung.'}
				</p>
			</div>

			<!-- Jober -->
			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					Backend Software Developer
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					Jober · 2017 - 2018
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Developed HR SaaS platform and recurring payment management system.'
						: 'Entwicklung einer HR-SaaS-Plattform und eines wiederkehrenden Zahlungsmanagementsystems.'}
				</p>
			</div>

			<!-- Vector Korea -->
			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Technical Sales Engineer & Business Development' : 'Technischer Vertriebsingenieur & Geschäftsentwicklung'}
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					Vector Korea IT Inc. · 2014 - 2017 (3 {getLang() === 'en' ? 'years' : 'Jahre'})
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Automotive embedded software sales and business development.'
						: 'Vertrieb und Geschäftsentwicklung für Automotive Embedded Software.'}
				</p>
			</div>

			<!-- moduTable -->
			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					CEO & Founder
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					moduTable · 2015 - 2016
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Founded a meal-sharing service for travelers — a food Airbnb experience. Bootstrapped and led 0-to-1 product-market fit, hosting guests from 20+ countries and connecting travelers with locals over shared dinners.'
						: 'Gründung eines Meal-Sharing-Service für Reisende – ein Food-Airbnb-Erlebnis. Bootstrapped und führte 0-zu-1 Product-Market-Fit, bewirtete Gäste aus über 20 Ländern.'}
				</p>
			</div>

			<!-- Korean Air -->
			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Flight Control System Engineer' : 'Flugsteuerungssystem-Ingenieur'}
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					Korean Air · 2013 - 2014
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Designed interface control signals for Flight Control Computer (RS-422, RS-232, CAN, MIL-1553B).'
						: 'Entwurf von Schnittstellensteuersignalen für Flugsteuerungscomputer (RS-422, RS-232, CAN, MIL-1553B).'}
				</p>
			</div>

			<!-- Rotork Korea -->
			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'Hardware Engineer' : 'Hardware-Ingenieur'}
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					Rotork Korea · 2010 - 2013 (3 {getLang() === 'en' ? 'years' : 'Jahre'})
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Control engineer — H/W design, electronic parts development, Foundation Fieldbus implementation, and ATEX EU explosive-proof certification PM.'
						: 'Steuerungsingenieur — H/W-Design, Elektronikteileentwicklung, Foundation Fieldbus-Implementierung und ATEX EU Explosionsschutz-Zertifizierung PM.'}
				</p>
			</div>

			<!-- UMD Research -->
			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					Research Assistant
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					University of Maryland, Smart Materials Research Center · 2008 - 2010
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Research on MAV flow sensors and actuators using FeGa. Designed test environments and conducted material testing.'
						: 'Forschung an MAV-Strömungssensoren und Aktoren mit FeGa. Entwurf von Testumgebungen und Durchführung von Materialtests.'}
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
			{getLang() === 'en' ? 'Education' : 'Ausbildung'}
		</h2>
		<div class="space-y-6">
			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					{getLang() === 'en' ? 'M.S. Aerospace Engineering (Discontinued)' : 'M.S. Luft- und Raumfahrttechnik (Abgebrochen)'}
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					University of Maryland, Smart Structure & Material Lab · 2008 - 2010
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{getLang() === 'en'
						? 'Awarded full stipend scholarship for graduate research on MAV (Micro Air Vehicle) sensors and actuators. Unfortunately had to discontinue to fulfill mandatory military service in South Korea.'
						: 'Vollstipendium für Forschung an MAV-Sensoren (Micro Air Vehicle) und Aktoren erhalten. Musste leider abbrechen, um den Wehrdienst in Südkorea zu absolvieren.'}
				</p>
			</div>

			<div class="border-l-2 border-stone-200 pl-6">
				<h3 class="text-lg font-medium text-stone-800" style="font-family: 'Fraunces', serif;">
					B.S. Aerospace Engineering
				</h3>
				<p class="text-sm text-stone-500" style="font-family: 'Fraunces', serif;">
					University of Maryland, College Park · 2005 - 2008
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
				{getLang() === 'en' ? 'English — Full Professional' : 'Englisch — Verhandlungssicher'}
			</li>
			<li>
				{getLang() === 'en' ? 'German — Learning' : 'Deutsch — Lernend'}
			</li>
		</ul>
	</section>
</PersonPage>
