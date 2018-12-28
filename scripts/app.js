Vue.config.devtools = true

let app = new Vue({
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
        initPrices: function(){
            let prices = [];
            this.cards.forEach(card => {
                if(!prices.length){ 
                    prices = [card.price, card.price];  
                    return;
                }
                if(card.price < prices[0]){
                    prices[0] = card.price;     
                }
                if(card.price > prices[1]){
                    prices[1] = card.price;     
                }
            });
            return prices;
        },
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
    beforeMount: function(){
        this.selectedPrices = this.initPrices();
    }
})