const cards = { 
    props:['cities', 'categories', 'cards', 'selectedCity'],
    template:  `<div class="cards">
                    <div class="cards card-item" v-for="card in cardsFiltered">
                        <div class="card-item-image" :style="{'background-image': 'url(\\'images/' + card.img + '.png\\')'}">
                            <span>{{getCityName(card.city)}}</span>
                        </div>
                        <div class="card-item-body">
                            <div class="card-item-text text-bold mb20">
                                {{card.name}}
                            </div>
                            <div class="card-item-footer">
                                <span class="card-item-footer-category text-flow">
                                    {{getCategoryName(card.category)}}
                                </span>
                                <span class="card-item-footer-price text-bold">
                                    {{'$'+card.price}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>`,
    data:function(){
        return {
            // cards: Data,
            // cities: City,
            // categories: Category,
        }
    },
    computed: {
        cardsFiltered: function(){
            let cards = this.cards.filter(card => {
                return this.selectedCity == card.city;
            });
            return cards;
        }
    },
    methods: {
        getCityName: function(cityID){
            let city = this.cities.find(city =>cityID == city.id);  
            return city.name;  
        },
        getCategoryName: function(categoryID){
            let category = this.categories.find(city => categoryID == city.id);
            return category.name;  
        }
    }
    
}