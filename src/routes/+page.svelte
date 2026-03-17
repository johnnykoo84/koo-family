<script lang="ts">
	import { t } from '$lib/i18n.svelte';

	let mounted = $state(false);
	$effect(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>{t.title}</title>
	<meta name="description" content={t.subtitle} />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div
	class="min-h-screen"
	style="background: linear-gradient(180deg, #FDF8F3 0%, #F9F1E8 50%, #FDF8F3 100%);"
>

	<!-- Hero Section -->
	<header class="relative px-6 pt-24 pb-16 md:pt-32">
		<div class="mx-auto max-w-4xl">
			<!-- Small decorative line -->
			<div
				class="mx-auto mb-8 h-px w-16 bg-stone-400 transition-all duration-1000"
				class:w-16={!mounted}
				class:w-32={mounted}
			></div>

			<h1
				class="mb-6 text-center text-5xl leading-tight tracking-tight text-stone-800 md:text-7xl"
				style="font-family: 'Fraunces', serif; font-weight: 500;"
			>
				{t.title}
			</h1>

			<p
				class="mx-auto max-w-xl text-center text-lg text-stone-600"
				style="font-family: 'Source Serif 4', serif;"
			>
				{t.subtitle}
			</p>

			<!-- Family Photo - Polaroid Style -->
			<div class="relative mx-auto mt-16 max-w-sm">
				<div
					class="rotate-[-2deg] transform rounded-sm bg-white p-3 pb-14 shadow-xl transition-transform duration-500 hover:rotate-0"
					style="box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05);"
				>
					<img
						src="/photos/family.jpg"
						alt="The Koo Family"
						class="aspect-[4/3] w-full object-cover"
					/>
					<p
						class="absolute bottom-4 left-0 w-full text-center text-sm text-stone-500"
						style="font-family: 'Fraunces', serif; font-style: italic;"
					>
						The Koo Family, 2025
					</p>
				</div>
			</div>
		</div>
	</header>

	<!-- Hello Section -->
	<section class="relative px-6 py-20">
		<div class="mx-auto max-w-2xl">
			<h2
				class="mb-8 text-center text-4xl text-stone-800"
				style="font-family: 'Fraunces', serif; font-weight: 400;"
			>
				{t.introHeading}
			</h2>
			<p
				class="text-xl leading-relaxed text-stone-600"
				style="font-family: 'Source Serif 4', serif;"
			>
				{t.introText}
			</p>
		</div>
	</section>

	<!-- Family Members Section -->
	<section class="px-6 py-16">
		<div class="mx-auto max-w-5xl">
			<h2
				class="mb-16 text-center text-3xl text-stone-800"
				style="font-family: 'Fraunces', serif; font-weight: 400;"
			>
				{t.meetUs}
			</h2>

			<!-- Parents - Offset Layout -->
			<div class="mb-12 grid gap-8 md:grid-cols-2 md:gap-12">
				<!-- Ilmo -->
				<a href="/ilmo" class="group md:mt-8">
					<div
						class="overflow-hidden rounded-sm bg-white transition-all duration-500 group-hover:shadow-2xl"
						style="box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1);"
					>
						<div class="overflow-hidden">
							<img
								src="/photos/ilmo_10.JPG"
								alt={t.ilmoName}
								class="w-full transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<div class="p-6">
							<h3
								class="mb-1 text-2xl text-stone-800"
								style="font-family: 'Fraunces', serif; font-weight: 500;"
							>
								{t.ilmoName}
							</h3>
							<p
								class="mb-4 text-sm tracking-wide"
								style="font-family: 'Fraunces', serif; color: #C4785A;"
							>
								{t.ilmoRole}
							</p>
							<p class="mb-4 line-clamp-3 text-stone-600" style="font-family: 'Source Serif 4', serif;">
								{t.ilmoDesc}
							</p>
							<span
								class="inline-block border-b border-stone-400 text-sm text-stone-600 transition-colors group-hover:border-stone-800 group-hover:text-stone-800"
								style="font-family: 'Fraunces', serif;"
							>
								{t.seeMore} &rarr;
							</span>
						</div>
					</div>
				</a>

				<!-- Kyuree -->
				<a href="/kyuree" class="group">
					<div
						class="overflow-hidden rounded-sm bg-white transition-all duration-500 group-hover:shadow-2xl"
						style="box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1);"
					>
						<div class="overflow-hidden">
							<img
								src="/photos/kyuree_01.jpeg"
								alt={t.kyureeName}
								class="w-full transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<div class="p-6">
							<h3
								class="mb-1 text-2xl text-stone-800"
								style="font-family: 'Fraunces', serif; font-weight: 500;"
							>
								{t.kyureeName}
							</h3>
							<p
								class="mb-4 text-sm tracking-wide"
								style="font-family: 'Fraunces', serif; color: #B5838D;"
							>
								{t.kyureeRole}
							</p>
							<p class="mb-4 line-clamp-3 text-stone-600" style="font-family: 'Source Serif 4', serif;">
								{t.kyureeDesc}
							</p>
							<span
								class="inline-block border-b border-stone-400 text-sm text-stone-600 transition-colors group-hover:border-stone-800 group-hover:text-stone-800"
								style="font-family: 'Fraunces', serif;"
							>
								{t.seeMore} &rarr;
							</span>
						</div>
					</div>
				</a>
			</div>

			<!-- Kids - Smaller Cards -->
			<div class="grid gap-6 md:grid-cols-2 md:gap-8">
				<!-- Jane -->
				<a
					href="/jane"
					class="group flex overflow-hidden rounded-sm bg-white transition-all duration-500 hover:shadow-xl"
					style="box-shadow: 0 4px 20px -4px rgba(0,0,0,0.08);"
				>
					<div class="w-32 flex-shrink-0 overflow-hidden">
						<img
							src="/photos/jane.jpg"
							alt="Jane Koo"
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</div>
					<div class="flex flex-col justify-between p-5">
						<div>
							<h3 class="mb-1 text-xl text-stone-800" style="font-family: 'Fraunces', serif; font-weight: 500;">
								{t.janeName}
							</h3>
							<p class="mb-2 text-xs tracking-wide" style="font-family: 'Fraunces', serif; color: #5B8A9A;">
								{t.janeRole}
							</p>
							<p class="line-clamp-2 text-sm text-stone-600" style="font-family: 'Source Serif 4', serif;">
								{t.janeDesc}
							</p>
						</div>
						<span
							class="mt-3 inline-block self-start border-b border-stone-400 text-sm text-stone-600 transition-colors group-hover:border-stone-800 group-hover:text-stone-800"
							style="font-family: 'Fraunces', serif;"
						>
							{t.seeMore} &rarr;
						</span>
					</div>
				</a>

				<!-- Jennie -->
				<a
					href="/jennie"
					class="group flex overflow-hidden rounded-sm bg-white transition-all duration-500 hover:shadow-xl"
					style="box-shadow: 0 4px 20px -4px rgba(0,0,0,0.08);"
				>
					<div class="w-32 flex-shrink-0 overflow-hidden">
						<img
							src="/photos/jennie.jpg"
							alt="Jennie Koo"
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</div>
					<div class="flex flex-col justify-between p-5">
						<div>
							<h3 class="mb-1 text-xl text-stone-800" style="font-family: 'Fraunces', serif; font-weight: 500;">
								{t.jennieName}
							</h3>
							<p class="mb-2 text-xs tracking-wide" style="font-family: 'Fraunces', serif; color: #8B7BA8;">
								{t.jennieRole}
							</p>
							<p class="line-clamp-2 text-sm text-stone-600" style="font-family: 'Source Serif 4', serif;">
								{t.jennieDesc}
							</p>
						</div>
						<span
							class="mt-3 inline-block self-start border-b border-stone-400 text-sm text-stone-600 transition-colors group-hover:border-stone-800 group-hover:text-stone-800"
							style="font-family: 'Fraunces', serif;"
						>
							{t.seeMore} &rarr;
						</span>
					</div>
				</a>
			</div>
		</div>
	</section>

	<!-- Why Berlin Section -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-3xl">
			<div class="relative rounded-sm border border-stone-200 bg-white/60 p-10 backdrop-blur-sm md:p-16">
				<!-- Decorative corner -->
				<div
					class="absolute top-4 left-4 h-8 w-8 border-l-2 border-t-2 border-stone-300"
				></div>
				<div
					class="absolute right-4 bottom-4 h-8 w-8 border-r-2 border-b-2 border-stone-300"
				></div>

				<h2
					class="mb-6 text-center text-3xl text-stone-800"
					style="font-family: 'Fraunces', serif; font-weight: 400;"
				>
					{t.whyBerlinTitle}
				</h2>
				<p
					class="text-lg leading-relaxed text-stone-600"
					style="font-family: 'Source Serif 4', serif;"
				>
					{t.whyBerlinText}
				</p>
			</div>
		</div>
	</section>

	<!-- Cleanliness Section -->
	<section class="px-6 py-16">
		<div class="mx-auto max-w-3xl">
			<div class="relative rounded-sm border border-stone-200 bg-white/60 p-10 backdrop-blur-sm md:p-12">
				<h2
					class="mb-6 text-center text-2xl text-stone-800"
					style="font-family: 'Fraunces', serif; font-weight: 400;"
				>
					{t.cleanlinessTitle}
				</h2>
				<p
					class="text-lg leading-relaxed text-stone-600"
					style="font-family: 'Source Serif 4', serif;"
				>
					{t.cleanlinessText}
				</p>
			</div>
		</div>
	</section>

	<!-- Promise Section -->
	<section class="px-6 py-16">
		<div class="mx-auto max-w-2xl">
			<h2
				class="mb-6 text-center text-3xl text-stone-800"
				style="font-family: 'Fraunces', serif; font-weight: 400;"
			>
				{t.promiseTitle}
			</h2>
			<p
				class="text-lg leading-relaxed text-stone-600"
				style="font-family: 'Source Serif 4', serif;"
			>
				{t.promiseText}
			</p>
		</div>
	</section>

	<!-- Documents Section -->
	<section class="px-6 py-12">
		<div class="mx-auto max-w-2xl">
			<div class="border-y border-stone-200 py-8">
				<p class="text-sm tracking-wide text-stone-500" style="font-family: 'Fraunces', serif;">
					{t.docsTitle}
				</p>
				<p class="mt-2 text-stone-600" style="font-family: 'Source Serif 4', serif;">
					{t.docsText}
				</p>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="px-6 pt-12 pb-20">
		<div class="mx-auto max-w-2xl">
			<h2
				class="mb-4 text-center text-2xl text-stone-800"
				style="font-family: 'Fraunces', serif; font-weight: 400;"
			>
				{t.contactTitle}
			</h2>
			<p class="mb-8 text-stone-600" style="font-family: 'Source Serif 4', serif;">
				{t.contactText}
			</p>

			<!-- Contact Info -->
			<div class="mb-8 flex flex-col gap-3">
				<a
					href="mailto:{t.contactEmail}"
					class="text-stone-700 transition-colors hover:text-stone-900"
					style="font-family: 'Fraunces', serif;"
				>
					{t.contactEmail}
				</a>
				<a
					href="tel:+4915734010352"
					class="text-stone-700 transition-colors hover:text-stone-900"
					style="font-family: 'Fraunces', serif;"
				>
					{t.contactPhone}
				</a>
			</div>

			<!-- Decorative line -->
			<div class="mb-8 h-px w-24 bg-stone-300"></div>

			<p class="text-xs tracking-widest text-stone-400" style="font-family: 'Fraunces', serif;">
				THE KOO FAMILY &bull; 2025
			</p>
		</div>
	</footer>
</div>
