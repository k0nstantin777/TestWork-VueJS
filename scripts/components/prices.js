const prices = { 
    template:   `<div class="filters filters-item filter-price">
                    <span class="filters filter-head">Price</span>
                    <div id="slider-range" class="mb20"></div>

                    <div class="filter-price-column">
                        <div class="filter-price-values text-bold">
                            <span class="prices-range mr10">$35</span> -
                            <span class="prices-range ml10">$250</span>
                        </div>
                        <button type="button">Filter</button>
                    </div>
                </div>`,
    data:function(){
        return {
            
        }
    },
    mounted: function(){
        $(function() {
            let options = {
                range: true,
                min: 0,
                max: 500,
                values: [50, 300],
                classes:{
                    'ui-slider' : 'range-slider',
                    'ui-widget-header' : 'range-widget-header',
                    'ui-slider-handle': 'range-slider-handle',     
                    'ui-slider-horizontal': 'range-horizontal',
                },
                slide: function(event, ui) {
                    // var min = ui.values[0],
                    //     max = ui.values[1];
        
                    // $("#amount").val("$" + min + " - $" + max);
                    // showProducts(min, max);
                }
            }, min, max;
        
            $("#slider-range").slider(options);
        
            min = $("#slider-range").slider("values", 0);
            max = $("#slider-range").slider("values", 1);
        });
    }
    
}