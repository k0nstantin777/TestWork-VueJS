const checkbox = {
    props: ['category', 'name', 'checked'], 
    template:  `<div class="filter-category category-list-item">
                    <label :for="'category'+category.id">
                        <input type="checkbox" 
                            :id="'category'+category.id" 
                            v-on:change="$emit('change', $event.target.checked)"
                            :checked="checked" 
                        >
                        <span class="checkbox-custom" :class="{checked: checked}"></span>
                        <span class="label ml5">{{category.name}} <span class="text-flow">({{name}})</span></span>
                    </label>
                </div>`,
    model: {
        prop: 'checked',
        event: 'change'
    },
}

const categories = { 
    props: ['categories', 'cards', 'selectedCategories'], 
    template:  `<div class="filters filters-item filter-category">
                    <span class="filters filter-head">Categories</span>
                    <div class="filter-category category-lists" v-for="(category, index, key) in categories" :key="category.id">
                        <checkbox
                            :category="category"
                            :name="getCountCardsByCategory(category.id)"
                            v-model="checked[category.id]"
                        ></checkbox>
                    </div>
                </div>`,
    components: {
        'checkbox': checkbox,
    },
    data:function(){
        return {
            checked: this.selectedCategories,
        }
    },
    methods: {
        getCountCardsByCategory: function(id){
            let cardsByCategory = this.cards.filter(card => card.category == id);
            return cardsByCategory.length;
        }
    },
}