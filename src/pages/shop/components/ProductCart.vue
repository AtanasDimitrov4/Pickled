<script>
import { mapState } from 'pinia';
import { useCartStore } from '../../../store/cartStore';
import { useUserStore } from '../../../store/userStore';

export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        id: -1,
        name: 'DEFAULT ITEM',
        price: 0,
        stock: 0,
        quantity: 'default',
        category: 'vegetables',
        thumbnail: 'https://www.bolay.com/app/data/blog/057004d9c36b2e71abd584208ee7dbb3.webp',
        images: [
          'https://images.squarespace-cdn.com/content/v1/5a3ed64f4c326d77c53e744a/1534289427746-XB3J5LRVU3O9RBIUUZAI/veggies.jpeg',
        ],
      }),
    },
  },
  emits: ['onAddToCart'],
  computed: {
    ...mapState(useCartStore, ['getProduct']),
    ...mapState(useUserStore, ['isAuthenticated']),
    isDisabled() {
      const current = this.getProduct(this.product.id);
      if (!current)
        return false;

      return current.quantity >= this.product.stock;
    },
    isInFavourites() {
      return this.favouritesIds.includes(this.product.id);
    },
  },
  
};
</script>

<template>
  <article>
    <img :src="product.thumbnail" alt="img">
    <slot name="title">
      <h2>{{ product.name }}</h2>
    </slot>
    <p><b>Price</b>: {{ product.price }}€</p>
    <footer>
      <button class="secondary outline" :disabled="isDisabled" @click="$emit('onAddToCart', product.id)">
        Add to cart 🛒
      </button>
      <button
        v-if="isAuthenticated"
        class="secondary outline"
        :disabled="isDisabled"
        @click="onFavouriteClick"
      >
      </button>
    </footer>
  </article>
</template>

<style scoped>
article{
  position: relative;
}

.icon{
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
}
</style>