Ext.define("StackMobDemo.view.Main", {
    extend: 'Ext.navigation.View',

    requires: ['StackMobDemo.view.List'],

    id: 'mainView',
    
    config: {
        
        items: [{
            xclass: 'StackMobDemo.view.List'
        }],

        navigationBar: {
            items: [{
                xtype: 'button',
                id: 'addButton',
                iconCls: 'add',
                iconMask: true,
                align: 'right'
            }]
        }
    }
});