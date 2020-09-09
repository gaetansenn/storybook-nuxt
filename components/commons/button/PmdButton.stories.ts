import PmdButton from './PmdButton.vue';

export default {
    title: 'Components/Button',
    component: PmdButton,
};

export const WithText = () => '<PmdButton buttonText="Mon label" />';
export const WithSvg = () => '<PmdButton svgName="header/cart" buttonText="panier" />';
export const WithLink = () => '<PmdButton url="http://google.fr" svgName="header/cart" buttonText="google.fr" />';
