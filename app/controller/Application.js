Ext.define('StackMobDemo.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            fetchMeatsButton: 'button[action=fetchMeats]',
            mainView: '#mainView'
        },
        control: {
            fetchMeatsButton: {
                tap: 'onFetchMeatsButtonTap'
            }
        }
    },

    onFetchMeatsButtonTap: function() {
        this.getMainView().push({
            xclass: 'StackMobDemo.view.List'
        })
    }
});