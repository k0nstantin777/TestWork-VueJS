const app = new Vue({
    el: '#app',
    data: {
        cities: City,
        categories: Category,  
        cards: Data,  
        selectedCity: 0,
        selectedCategories: [],
        selectedPrices: [],
    }, 
    components: {
        'filters': filters,
        'cards': cards,
    },
    methods: {
        filteredByCity: function(cards){
            if(this.selectedCity){
                cards = cards.filter(card => this.selectedCity == card.city);
            }
            return cards;
        },
        filteredByCategories: function(cards){
            if(this.selectedCategories.length && this.selectedCategories.find(item => item == true)){
                cards = cards.filter(card => {
                    return this.selectedCategories[card.category];
                });
            }
            return cards;
        },
        filteredByPrices: function(cards){
            if(this.selectedPrices && this.selectedPrices.find(item => item != undefined )){
                cards = cards.filter(card => {
                    return this.selectedPrices[1] >= card.price && this.selectedPrices[0] <= card.price;
                });
            }
            return cards;
        },
        initFilters: function(){
            this.selectedCity = JSON.parse(localStorage.getItem('selectedCity')) || 0;
            this.selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];
            this.selectedPrices = JSON.parse(localStorage.getItem('selectedPrices')) || [];
        }
    },
    computed: {
        cardsFiltered: function(){
            let cards = this.cards;
            cards = this.filteredByCity(cards);
            cards = this.filteredByCategories(cards);
            cards = this.filteredByPrices(cards);    
            return cards;
        },
    },
    watch:{
        selectedCity: function(newValue){
            localStorage.setItem('selectedCity', JSON.stringify(newValue));
        }, 
        selectedCategories: function(newValue){
            localStorage.setItem('selectedCategories', JSON.stringify(newValue));
        },
        selectedPrices: function(newValue){
            localStorage.setItem('selectedPrices', JSON.stringify(newValue));
        }   
    },
    created: function(){
        this.initFilters();
    }, 
});