const cards = { 
    props:['cities', 'categories', 'cards'],
    template:  `<div class="cards">
                    <transition-group name="list" tag="div">
                        <div class="cards card-item" v-for="card in cards" :key="card.id">
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
                    </transition-group>
                </div>`,
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