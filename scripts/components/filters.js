const filters = { 
    props:['cities', 'categories', 'cards', 'selectedCity'],
    template:  `<div class="filters">
                    <cities :cities="cities" v-model="selected"></cities>
                    <categories :categories="categories" :cards="cards"></categories>
                    <prices></prices>
                </div>`,
    components: {
        'cities': cities,
        'categories': categories,
        'prices': prices,
    },
    data: function() {
        return {
            selected: this.selectedCity    
        } 
    }
}