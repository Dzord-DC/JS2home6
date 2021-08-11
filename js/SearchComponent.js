Vue.component('filters', {

    template: `
    <form action="#" class="search-form" @submit.prevent="$root.filter">
        <input type="text" class="search-field" v-model="$root.userSearch" @input=$root.filter>
        <button type="submit" class="btn-search">
        <i class="fas fa-search"></i>
        </button>
    </form>
    `
});