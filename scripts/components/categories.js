const categories = { 
    props: ['categories', 'cards'], 
    template:  `<div class="filters filters-item filter-category">
                    <span class="filters filter-head">Categories</span>
                    <div class="filter-category category-lists" v-for="category in categories">
                        <div class="filter-category category-list-item">
                            <label :for="'category'+category.id">
                                <input type="checkbox" :id="'category'+category.id" :value="category.id">
                                <span class="checkbox-custom"></span>
                                <span class="label ml5">{{category.name}} <span class="text-flow">({{getCountCardsByCategory(category.id)}})</span></span>
                            </label>
                        </div>
                    </div>
                </div>`,
    // data:function(){
    //     return {
    //         categories: Category,
    //     }
    // },
    methods: {
        getCountCardsByCategory: function(id){
            let cardsByCategory = this.cards.filter(card => card.category == id);
            return cardsByCategory.length;
        }
    }
}