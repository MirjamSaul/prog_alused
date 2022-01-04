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
        logData: function(){
            return data
        }
    }
})();

//UI Controller
const UICtrl = (function() {
    console.log('UICtrl')

})();

// APP Controller
const App = (function(ItemCtrl, UICtrl){
    //console.log(ItemCtrl.logData())
    return {
        init: function(){
            console.log('Initializing App')
        }
    }
})(ItemCtrl, UICtrl);

//init app
App.init();