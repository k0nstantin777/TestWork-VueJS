const prices = { 
    props:['cards', 'selectedPrices'],
    template:   `<div class="filters filters-item filter-price">
                    <span class="filters filter-head">Price</span>
                    <div id="slider-range" class="mb20"></div>

                    <div class="filter-price-column">
                        <div class="filter-price-values text-bold">
                            <span class="prices-range mr10" v-html="'$'+values[0]"></span> -
                            <span class="prices-range ml10" v-html="'$'+values[1]"></span>
                        </div>
                        <button type="button" @click="$emit('update:selected-prices', [values[0], values[1]])">Filter</button>
                    </div>
                </div>`,
    data:function(){
        return {
            min: 0,
            max: 0,
            values: [],
        }
    },
    methods: {
        initPrices: function(){
            let prices = [];
            if(!prices.length){
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
                let values = JSON.parse(localStorage.getItem('selectedPrices'));
                prices[2] = values ? values  : [prices[0], prices[1]];
            }
            return prices;
        },
        initSlider: function(){
            let self = this;
            let options = {
                range: true,
                min:  this.min,
                max: this.max,
                values:  this.values,
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
        },
        initValues: function(){
            this.values = this.selectedPrices.length ? this.selectedPrices : [this.min, this.max];
        },
        init: function(){
            this.initValues();
            this.initSlider();
        },
        updatePrices: function(min, max){
            this.values = [min, max];
        },
    },
    created: function(){
        let selectedPrices = this.initPrices();
        this.min = selectedPrices[0];
        this.max = selectedPrices[1];
        this.$emit('update:selected-prices', selectedPrices[2]); 
    }, 
    mounted: function(){
        this.init();
    },   
}