<template>
    <div class="pmd-container">
        <div v-for="(value, className) in colors" :key="className" class="pmd-container_content">
            <div :class="'pmd-container_content--'+className" />
            {{ className }} <br>{{ value }}
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colorsVariables = require('./colorVariables.scss');

@Component
export default class Color extends Vue {
    colors: { [key: string]: string } = colorsVariables;
}
</script>

<style lang="scss" scoped>
.pmd-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    &_content {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        text-align: center;
        flex-basis: 10rem;
        @each $key, $color in $theme-colors {
            &--#{$key} {
                width: 2.5rem;
                height: 2.5rem;
                margin: 5px;
                background: $color;
                border-radius: 100%;
                text-align: center;
                transition: box-shadow 0.25s ease-in;
                &:hover {
                    box-shadow: 0 0 5px 2px rgba(#000, 0.2);
                }
            }
        }
    }
}
</style>
