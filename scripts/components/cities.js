const cities = {
    props: ['cities', 'selected'], 
    template: ` <div class="filters filters-item filter-city">
                    <span class="filters filter-head">City</span>
                    <select v-on:change="$emit('change', $event.target.value)" :value="selected">
                        <option value="0">All</option>
                        <option v-for="city in cities" :value="city.id">{{city.name}}</option>
                    </select>
                </div>`,
    model: {
        prop: 'selected',
        event: 'change'
    },    
}