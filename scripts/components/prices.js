const prices = { 
    props:['cards', 'selectedPrices'],
    template:   `<div class="filters filters-item filter-price">
                    <span class="filters filter-head">Price</span>
                    <div id="slider-range" class="mb20"></div>

                    <div class="filter-price-column">
                        <div class="filter-price-values text-bold">
                            <span class="prices-range mr10" v-html="'$'+this.min"></span> -
                            <span class="prices-range ml10" v-html="'$'+this.max"></span>
                        </div>
                        <button type="button" @click="$emit('update:selected-prices', [this.min, this.max])">Filter</button>
                    </div>
                </div>`,
    data:function(){
        return {
            min: 0,
            max: 0,
        }
    },
    methods: {
        initPrices: function(){
            this.min = this.selectedPrices[0];
            this.max = this.selectedPrices[1];
        },
        updatePrices: function(min, max){
            this.min = min;
            this.max = max;
        }
    },
    mounted: function(){
        this.initPrices();
        let self = this;
        let options = {
            range: true,
            min:  this.min,
            max: this.max,
            values: [ this.min, this.max],
            classes:{
                'ui-slider' : 'range-slider',
                'ui-widget-header' : 'range-widget-header',
                'ui-slider-handle': 'range-slider-handle',     
                'ui-slider-horizontal': 'range-horizontal',
            },
            slide: function(event, ui) {
                min = ui.values[0],
                max = ui.values[1];
    
                self.updatePrices(min, max);
            }
        };
    
        $("#slider-range").slider(options);
    }
    
}