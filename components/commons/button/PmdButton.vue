<template>
    <button v-if="!url" type="button" class="pmd-button" :class="className" @click="onClick()">
        <svg-icon v-if="svgName" :name="svgName" class="pmd-svg" />
        {{ buttonText }}
    </button>
    <nuxt-link v-else class="pmd-button" :class="className" :to="url">
        <svg-icon v-if="svgName" :name="svgName" class="pmd-svg" />
        {{ buttonText }}
    </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PmdButton extends Vue {
    /**
     * Le type de la class css du bouton
     * valeur par defaut : 'primary'
     * valeurs possibles :
     * - 'primary'
     * - 'secondary'
     * - 'primary--withIcon'
     * - 'secondary--withIcon'
     * - 'primary--noBorder'
     * - 'secondary--noBorder'
     * - 'tertiary--noBorder'
     */
    @Prop({ default: 'primary' })
    buttonClass?: string;

    /**
     * Le libelle du bouton
     */
    @Prop()
    buttonText?: string;

    /**
     * Le nom de l'icone svg
     */
    @Prop()
    svgName?: string;

    /**
     * Le path de l'url lorsque le bouton est un lien
     */
    @Prop()
    url?: string;

    /**
     * @returns Le nom de la class css
     */
    get className():string {
        return 'pmd-button_' + this.buttonClass;
    }

    /**
     * Au clic sur le bouton, emit de l'event 'clicked' au composant parent
     */
    onClick(): void {
        this.$emit('clicked');
    }
}
</script>

<style lang="scss" scoped>
.pmd-button {
    padding: 1rem;
    &_primary {
        @include primary-button;
    }
    &_secondary {
        @include secondary-button;
    }
    &_primary--withIcon {
        @include primary-button-with-icon;
    }
    &_secondary--withIcon {
        @include secondary-button-with-icon;
    }
    &_primary--noBorder {
        @include primary-button-no-border;
    }
    &_secondary--noBorder {
        @include secondary-button-no-border;
    }
    &_tertiary--noBorder {
        @include tertiary-button-no-border;
    }
}
</style>
