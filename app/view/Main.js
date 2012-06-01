Ext.define("StackMobDemo.view.Main", {
    extend: 'Ext.navigation.View',

    id: 'mainView',
    
    config: {
        
        items: [{
            title: 'Welcome',
            items: [{
                xtype: 'button',
                text: 'Fetch Some Meats',
                action: 'fetchMeats',
                centered: true
            }]
        }],

        navigationBar: {
            items: [{
                xtype: 'button',
                id: 'addButton',
                action: 'addMeat',
                iconCls: 'add',
                iconMask: true,
                align: 'right',
                hidden: true
            }]
        }
    }
});