<template>
	<div class="header">
	  <h1>Pickled</h1>
	  <h2><a href="#">Get Pickled</a></h2>
  
	  <div class="menu">
		<ul>
		  <li class="active"><RouterLink to="/">Home</RouterLink></li>
          <template v-if="isAuthenticated">
			<li><RouterLink :to="{ name: 'profile' }">{{ profile.name }}</RouterLink></li>
			<li @click="logout">Logout</li>
		  </template>
		  <template v-else>
			<li><RouterLink to="/login">Login</RouterLink></li>
		  </template>
          <li><RouterLink to="/game">Game</RouterLink></li>
		  <li><RouterLink to="/cast">Cast</RouterLink></li>
		  <li><RouterLink to="/recipe">Recipe</RouterLink></li>
		</ul>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { useUserStore } from '../store/userStore';
  import { RouterLink } from 'vue-router';
  
  const { isAuthenticated, profile, logout } = useUserStore();
  </script>


<style scoped>
 .header {
	width: 720px;
	height: 161px;
	margin: 0 auto;
	background: url(../styles/images/img2.jpg) no-repeat;
    text-decoration: none;
	text-align: center;
	color: rgb(145, 211, 64);
}

.header h1 {
	padding-top: 55px;
	font-size: 3em;
}

.header h2 {
	font-size: 1.2em;
}

.menu {
	width: 720px;
	height: 55px;
	margin: 0 auto;
}

.menu ul {
	margin: 0;
	padding: 0;
	list-style: none;
	line-height: normal;
}

.menu li {
	display: inline;
}

.menu a {
	display: block;
	float: left;
	width: 142px;
	height: 21px;
	padding: 7px 1px 0 1px;
	background: url(../styles/images/img3.gif) no-repeat center center;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: .2em;
	font-size: x-small;
	font-weight: bold;
	color: #CCCCCC;
}

.menu a:hover, menu .active a {
	background-image: url(../styles/images/img4.gif);
	color: #FFFFFF;
}

</style>