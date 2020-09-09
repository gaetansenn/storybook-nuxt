<!--
Layout pour la page de demonstration
-->

<template>
    <div>
        <Nuxt />
    </div>
</template>

<style lang="scss">
.pmd {
    &-button--green {
        display: inline-block;
        padding: 10px 30px;
        text-decoration: none;
        color: #3b8070;
        border: 1px solid #3b8070;
        border-radius: 4px;
        &:hover {
            color: #fff;
            background-color: #3b8070;
        }
    }
    &-button--grey {
        display: inline-block;
        padding: 10px 30px;
        margin-left: 15px;
        text-decoration: none;
        color: #35495e;
        border-radius: 4px;
        border: 1px solid #35495e;
        &:hover {
            color: #fff;
            background-color: #35495e;
        }
    }
}
</style>
