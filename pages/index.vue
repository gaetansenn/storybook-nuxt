<template>
    <div>
        <Logo />
        <h1 class="pmd-container_title">
            test storybook
        </h1>
        <div class="pmd-container_links">
            <a
                href="https://nuxtjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                class=".pmd-button--green"
            >
                Documentation
            </a>
            <a
                href="https://github.com/nuxt/nuxt.js"
                target="_blank"
                rel="noopener noreferrer"
                class="pmd-button--grey"
            >
                GitHub
            </a>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    layout: 'init',
};
</script>

<style lang="scss">
.pmd {
    &-container {
        &_title {
            display: block;
            color: #35495e;
        }
        &_links {
            padding-top: 15px;
        }
    }
}
</style>
