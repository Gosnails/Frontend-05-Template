import Vue from 'vue';
import Hello from './hello.vue';

new Vue({
    el: "#app",
    render: (h) => h(Hello)
})