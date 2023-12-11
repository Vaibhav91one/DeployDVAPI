<script>
import { RouterLink, RouterView } from 'vue-router'
import {computed, ref} from 'vue'
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router';

export default { 
    components:{
        Button
    },
};
</script>


<template>
  <div class="Home">
    <div class="Intro">
      <h2>Welcome to DVAPI 🚀</h2>
      <p>"Unlock the full potential of your APIs with peace of mind - Welcome to DVAPI, where security is our top priority."</p>
      <br>
      <p>DVAPI is a valuable platform for developers and security professionals who are interested in exploring and addressing API vulnerabilities.</p>
      <br>
      <p>By leveraging these resources, users can stay up-to-date with the latest API security trends and take proactive steps to secure their APIs against potential threats.
        Through regular testing and analysis, users can ensure that their APIs remain secure and protected against evolving threats.
      </p>
      <br>
    </div>
    <RouterLink class="link" to="/Challenges">
      <Button p="15px" value="Get Started" />
    </RouterLink>

  </div>
</template>

<style>
.Home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  flex-wrap: wrap;
}

.Intro {
  display: flex;
  padding: 10px;
  margin: 10px;
  max-width: 100%;
  width: 60%;
  min-height: 60vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.Intro h2 {
  border-bottom: 1px solid;
  margin-bottom: 50px;
  font-size: 50px;
}

.Intro p {
  font-size: 20px;
  display: flex;
  justify-content: center;
}
</style>

