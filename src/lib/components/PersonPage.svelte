<script lang="ts">
	import { t } from '$lib/i18n.svelte';

	interface Props {
		name: string;
		role: string;
		accentColor: string;
		photo?: string;
		children: any;
	}

	let { name, role, accentColor, photo, children }: Props = $props();
</script>

<svelte:head>
	<title>{name} | {t.title}</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div
	class="min-h-screen"
	style="background: linear-gradient(180deg, #FDF8F3 0%, #F9F1E8 50%, #FDF8F3 100%);"
>

	<!-- Header -->
	<header class="relative px-6 pt-24 pb-12 md:pt-28">
		<div class="mx-auto max-w-3xl">
			<!-- Back link -->
			<a
				href="/"
				class="mb-8 inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-stone-800"
				style="font-family: 'Fraunces', serif;"
			>
				&larr; {t.backToHome}
			</a>

			<div class="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
				<!-- Photo -->
				<div class="w-48 flex-shrink-0 md:w-56">
					{#if photo}
						<img
							src={photo}
							alt={name}
							class="w-full rounded-sm shadow-lg"
						/>
					{:else}
						<div
							class="flex aspect-square w-full items-center justify-center rounded-sm border-2 border-dashed border-stone-300 bg-stone-100"
						>
							<span class="text-xs tracking-[0.3em] text-stone-400">PHOTO</span>
						</div>
					{/if}
				</div>

				<!-- Name & Role -->
				<div class="text-center md:text-left">
					<h1
						class="mb-2 text-4xl text-stone-800 md:text-5xl"
						style="font-family: 'Fraunces', serif; font-weight: 500;"
					>
						{name}
					</h1>
					<p
						class="text-lg tracking-wide"
						style="font-family: 'Fraunces', serif; color: {accentColor};"
					>
						{role}
					</p>
				</div>
			</div>
		</div>
	</header>

	<!-- Content -->
	<main class="px-6 py-12">
		<div class="mx-auto max-w-3xl">
			{@render children()}
		</div>
	</main>

	<!-- Footer -->
	<footer class="px-6 py-12">
		<div class="mx-auto max-w-3xl">
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
