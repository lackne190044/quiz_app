<script lang="ts">
    import Question from './Question.vue';

    export default {
        props: ['values']
    }
</script>

<template>
    <div class="grid-container">
        <tr v-for="valueList in values">
            <th v-for="value in valueList">
                {{ value }}
            </th>
        </tr>
    </div>
</template>

<style>
.grid-container {
    display: grid;
}
</style>