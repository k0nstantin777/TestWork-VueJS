const filters = { 
    props:['cities', 'categories', 'cards', 'selectedCity', 'selectedCategories', 'selectedPrices'],
    template:  `<div class="filters">
                    <cities :cities="cities" v-model.number="selected"></cities>
                    <categories 
                        :categories="categories"
                        :cards="cards"
                        :selected-categories="selectedCategories"
                    ></categories>
                    <prices 
                        :cards="cards" 
                        :selected-prices="selectedPrices"
                        @update:selected-prices="$emit('update:selected-prices', $event)"
                    ></prices>
                </div>`,
    components: {
        'cities': cities,
        'categories': categories,
        'prices': prices,
    },
    data: function() {
        return {
            selected: this.selectedCity,
        } 
    },
    watch:{
        selected: function(){
            this.$emit('update:selected-city', this.selected);    
        },
    },

}