<script lang="ts">
    import Question from './Question.vue';

    export default {
        props: ['values']
    }
</script>

<template>
    {{ values }}
    <div class="grid-container">
        <div v-for="valueList in values">
            <div v-for="value in valueList">
                <div class="grit-item">{{ value }}</div>
            </div>
        </div>
    </div>
</template>

<style>
.grid-container {
    display: grid;
}
</style>