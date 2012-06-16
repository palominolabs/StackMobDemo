Ext.define('StackMobDemo.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            addButton: '#addButton',
            meatList: '#meatList'
        },
        control: {
            addButton: {
                tap: 'onAddButtonTap'
            }
        }
    },

    onAddButtonTap: function() {
        Ext.Msg.prompt('Add Meat', 'What kind of meat?', this.onSubmitMeat, this, false, null, {
            autoCapitalize: true,
            placeHolder: 'No vegetables, please...'
        })
    },

    onSubmitMeat: function(buttonId, value) {
        if (buttonId == 'cancel') {
            return false;
        }
        var newMeat = Ext.create('StackMobDemo.model.Meat', {
            name: value
        });
        var store = this.getMeatList().getStore();
        store.add(newMeat);
        store.sync();
    }
});