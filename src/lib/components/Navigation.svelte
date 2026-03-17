<script lang="ts">
	import { t, toggleLang, getLang } from '$lib/i18n.svelte';
	import { page } from '$app/stores';

	let menuOpen = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const familyMembers = [
		{ name: 'Family', path: '/family' },
		{ name: 'Ilmo', path: '/ilmo' },
		{ name: 'Kyuree', path: '/kyuree' },
		{ name: 'Jane', path: '/jane' },
		{ name: 'Jennie', path: '/jennie' }
	];

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : ''}"
>
	<div class="mx-auto max-w-5xl px-4">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo/Home -->
			<a
				href="/"
				class="text-lg text-stone-800 transition-colors hover:text-stone-600"
				style="font-family: 'Fraunces', serif; font-weight: 500;"
			>
				Koo Family
			</a>

			<!-- Desktop Nav -->
			<div class="hidden items-center gap-6 md:flex">
				{#each familyMembers as member}
					<a
						href={member.path}
						class="text-sm text-stone-600 transition-colors hover:text-stone-900"
						class:text-stone-900={$page.url.pathname === member.path}
						class:font-medium={$page.url.pathname === member.path}
						style="font-family: 'Fraunces', serif;"
					>
						{member.name}
					</a>
				{/each}

				<!-- Language Toggle -->
				<button
					onclick={toggleLang}
					class="ml-4 rounded-full border border-stone-300 px-3 py-1 text-sm transition-all hover:border-stone-800 hover:bg-stone-800 hover:text-white"
					style="font-family: 'Fraunces', serif;"
				>
					{getLang() === 'en' ? 'DE' : 'EN'}
				</button>
			</div>

			<!-- Mobile Menu Button -->
			<div class="flex items-center gap-3 md:hidden">
				<button
					onclick={toggleLang}
					class="rounded-full border border-stone-300 px-3 py-1 text-sm"
					style="font-family: 'Fraunces', serif;"
				>
					{getLang() === 'en' ? 'DE' : 'EN'}
				</button>

				<button
					onclick={() => (menuOpen = !menuOpen)}
					class="flex h-10 w-10 items-center justify-center"
					aria-label="Toggle menu"
				>
					<div class="relative h-5 w-6">
						<span
							class="absolute left-0 h-0.5 w-6 bg-stone-800 transition-all duration-300"
							class:top-0={!menuOpen}
							class:top-2={menuOpen}
							class:rotate-45={menuOpen}
						></span>
						<span
							class="absolute top-2 left-0 h-0.5 w-6 bg-stone-800 transition-all duration-300"
							class:opacity-0={menuOpen}
						></span>
						<span
							class="absolute left-0 h-0.5 w-6 bg-stone-800 transition-all duration-300"
							class:top-4={!menuOpen}
							class:top-2={menuOpen}
							class:-rotate-45={menuOpen}
						></span>
					</div>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if menuOpen}
		<div class="border-t border-stone-200 bg-white/95 backdrop-blur-md md:hidden">
			<div class="flex flex-col px-4 py-4">
				<a
					href="/"
					onclick={closeMenu}
					class="py-3 text-stone-600 transition-colors hover:text-stone-900"
					class:text-stone-900={$page.url.pathname === '/'}
					class:font-medium={$page.url.pathname === '/'}
					style="font-family: 'Fraunces', serif;"
				>
					{t.navHome}
				</a>
				{#each familyMembers as member}
					<a
						href={member.path}
						onclick={closeMenu}
						class="py-3 text-stone-600 transition-colors hover:text-stone-900"
						class:text-stone-900={$page.url.pathname === member.path}
						class:font-medium={$page.url.pathname === member.path}
						style="font-family: 'Fraunces', serif;"
					>
						{member.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
