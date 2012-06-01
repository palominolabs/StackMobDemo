Ext.define('StackMobDemo.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            fetchMeatsButton: 'button[action=fetchMeats]',
            mainView: '#mainView',
            addButton: '#addButton',
            meatList: '#meatList'
        },
        control: {
            fetchMeatsButton: {
                tap: 'onFetchMeatsButtonTap'
            },
            mainView: {
                push: 'onMainViewPush',
                pop: 'onMainViewPop'
            },
            addButton: {
                tap: 'onAddButtonTap'
            }
        }
    },

    onFetchMeatsButtonTap: function() {
        this.getMainView().push({
            xclass: 'StackMobDemo.view.List'
        })
    },

    onMainViewPush: function(view, item) {
        this.getAddButton().show();
    },

    onMainViewPop: function(view, item) {
        this.getAddButton().hide();
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