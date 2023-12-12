<script>
import { RouterLink, RouterView } from 'vue-router'
import {computed, ref} from 'vue'
import Button from '../components/Button.vue';
import ChallengeCard from '@/components/ChallengeCard.vue';
import { useRouter } from 'vue-router';
import { challengesDescription } from '@/constants';

export default { 
    data(){
      return{
        items: challengesDescription,
      }
    },
    components:{
        Button,
        ChallengeCard
    },
};
</script>

<template>
    <v-container
    class="container"
    >
    
      <v-row
        align="start"
        no-gutters
        style="display: flex; justify-content: center; align-items: center;"
        
      >
        <v-col v-for="challenge in items" :key="challenge">
          <v-sheet class="pa-2 ma-2">
            <ChallengeCard style="max-width:350px;" class="card" :title="challenge.title" :description="challenge.description" :Level="challenge.Level" :imageURL="challenge.imageURL" :number="challenge.number" :hint="challenge.hint" :writeUp="challenge.writeUp"/>
          </v-sheet>
        </v-col>
      </v-row>

    </v-container>
</template>

<style>

.card{
  transition: .2s ease-in-out;
  box-shadow: 3px 3px 19px 2px rgba(0,0,0,0.33);
}

.card:hover{
  box-shadow: 3px 3px 19px 2px rgba(0,0,0,.5);
}

</style>