<script lang="ts">
	import type { PageData } from './$types';
	import Stripe from 'stripe';

	export let data: PageData;

	function getDefaultPrice(product: Stripe.Product): Stripe.Price | undefined {
		if (typeof product.default_price === 'string') {
			return undefined;
		}
		return product.default_price as Stripe.Price;
	}

	function formatPrice(price: Stripe.Price | undefined): string {
		if (!price || typeof price.unit_amount === 'undefined') {
			return 'N/A';
		}
		return ((price.unit_amount || 0) / 100).toLocaleString('en-US', {
			style: 'currency',
			currency: 'usd'
		});
	}
</script>

<h1>Pricing</h1>

{#each data.products as product}
	<section>
		<h2>{product.name}</h2>
		<p>Price: {formatPrice(getDefaultPrice(product))}</p>
		<a href="/billing/checkout?id={getDefaultPrice(product)?.id || ''}">
			{#if getDefaultPrice(product)?.type === 'recurring'}
				Subscribe
			{:else}
				Buy now
			{/if}
		</a>
	</section>
{/each}

<h2>Debug</h2>

<pre>products = {JSON.stringify(data.products, null, 2)}</pre>
