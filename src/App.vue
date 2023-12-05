<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/appfooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    RouterView,
  },
  data() {
    return {

    };
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
main {
  width: 720px;
	margin: 0 auto;
}

main h2 {
	height: 21px;
	margin-bottom: 20px;
	padding: 9px 0 0 10px;
	background: url(../src/styles/images/img6.gif);
	letter-spacing: normal;
	font-size: .9em;
}

main h3 {
	text-transform: uppercase;
	letter-spacing: normal;
	font-size: x-small;
	color: #FFFFFF;
}

main ul {
	margin-left: 0;
	padding-left: 0;
	list-style: square inside;
}
</style>
