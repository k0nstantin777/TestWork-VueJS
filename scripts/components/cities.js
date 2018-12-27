const cities = {
    props: ['cities', 'selected'], 
    template: ` <div class="filters filters-item filter-city">
                    <span class="filters filter-head">City</span>
                    <select v-on:change="$emit('input', $event.target.value)" :value="selected">
                        <option v-for="city in cities" :value="city.id">{{city.name}}</option>
                    </select>
                </div>`,
    data:function(){
        return {
            // selected: this.cities[0].id,
        }
    },
    // computed:{
    //     // selected:{
    //     //   get() {return this.value},
    //     //   set(v) {this.$emit('input', v)}
    //     // }
    //   },
    mounted: function(){
        console.log(this.selected);
    }
    
}