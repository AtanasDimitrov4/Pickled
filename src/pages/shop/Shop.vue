<script>
import { mapActions } from 'pinia';
import { products } from '../../constants/products';
import { useCartStore } from '../../store/cartStore';
import Loader from '../../components/Loader.vue';
import Filters from '../shop/components/Filters.vue'
import ProductCard from '../shop/components/ProductCart.vue';

export default {
  components: { Filters, ProductCard, Loader, products },
  data() {
    return {
      selectedFilter: '',
      products: [],
      categories: [],
      isLoading: true,
    };
  },
  computed: {
    displayProducts() {
      if (this.selectedFilter === '')
        return this.products;

      return this.products.filter(product => product.category === this.selectedFilter);
    },
  },
  
  methods: {
    onFilterSelect(selected) {
      this.selectedFilter = selected;
    },
    ...mapActions(useCartStore, ['addToCart']),
  },
};
</script>

<template>
  <Filters :categories="categories" :active-item="selectedFilter" @on-select="onFilterSelect" />

  <Loader v-if="isLoading" />

  <div v-else class="products">
    <ProductCard
      v-for="product in displayProducts"
      :key="`products-${product.id}`"
      :product="product"
      @on-add-to-cart="addToCart"
    >
      <template #title>
        <h2 class="title">
          {{ product.name }}
        </h2>
      </template>
    </ProductCard>
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(var(--product-cols, 1), 1fr);
  gap: 1rem;
}

.products .title{
  font-size: 1.25rem;
}

@media screen and (min-width: 560px) {
  .products {
    --product-cols: 2;
  }
}

@media screen and (min-width: 768px) {
  .products {
    --product-cols: 3;
  }
}

@media screen and (min-width: 1024px) {
  .products {
    --product-cols: 4;
  }
}
</style>