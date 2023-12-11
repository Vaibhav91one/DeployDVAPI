<template>
    <header class="container">
        <RouterLink to="/" style="text-decoration: none;">
        <h2 class="title">
            DVAPI 🗝️
        </h2>
    </RouterLink>
        <nav class="navbar">
            <RouterLink class="link" to="/">Home</RouterLink>
            <RouterLink class="link" to="/Challenges">Challenges</RouterLink>
        </nav>
    </header>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import {computed, ref} from 'vue'
import Button from './Button.vue';
import { useRouter } from 'vue-router';

export default {
    components:{
        Button
    },
};
</script>

<style >
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
}

.title {
    color: black;
    display: block;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
}

.navbar{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.navbar .link {
    text-decoration: none;
    padding: 10px;
    color: black;
    font-weight: 600;
    transition: all .2s ease-in-out;
}


</style>