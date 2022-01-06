//storage Controller - later

//item Controller
const ItemCtrl = (function() {
    //item constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    //Data Structure
    const data = {
        items: [
            {id: 0, name: 'Steak', calories: 1200},
            {id: 1, name: 'Macrons', calories: 700},
            {id: 2, name: 'Soup', calories: 300}
        ],
        total: 0
    }
    return {
        getItems: function(){
            return data.items
        },
        logData: function(){
            return data;

        }
    }
})();

//UI Controller
const UICtrl = (function() {
    //UI selectors
    const UISelectors = {
        itemList: '#item-list'
    }
    return {
        populateItemList: function(items){
            //create html content
            let html = '';

            //parse data and create list items in html
            items.forEach(function(item){
                html += `<li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}: </strong> <em>${item.calories}Calories</em>
                    <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                    </a>
                </li>`
            });
            //insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        }
    }
})();

// APP Controller
const App = (function(ItemCtrl, UICtrl){
    //console.log(ItemCtrl.logData())
    return {
        init: function(){
            console.log('Initializing App')
            //fetch items from data structure
            const items = ItemCtrl.getItems()
            //populate items list
            UICtrl.populateItemList(items)
        }
    }
})(ItemCtrl, UICtrl);

//init app
App.init();