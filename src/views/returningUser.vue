<template>
    <form class="form" @submit.prevent="createpost">
      <h4 class="">Continue registration</h4>
      <p>What is your favorite book?</p>
      <my-input
        v-model="this.book"
        type="text"
        class="input"
        placeholder="Name of the Book"
      />
      <p>what is your favorite show?</p>
      <my-input
        v-model="this.show"
        type="text"
        class="input"
        placeholder="Name of the Show"
      />
      <myButton> Continue </myButton>
    </form>
</template>

<script>
import myInput from '@/components/UI/myInput.vue';
import myButton from '@/components/UI/myButton.vue';
export default {
    name:'returningUser',
    components:{
        myInput,
        myButton
    },
    data (){
        return{
            show: '',
            book: '',
        }
    }
}
</script>

<style>

</style>