let app = new Vue({
    el: '#app',
    data: {
        cities: City,
        categories: Category,  
        cards: Data,  
        selectedCity: City[0].id,
    }, 
    components: {
        'filters': filters,
        'cards': cards,
    }
})