Ext.define('StackMobDemo.view.List', {
    extend: 'Ext.List',

    id: 'meatList',

    config: {
        title: 'Meats',

        store: 'Meats',
        itemTpl: '{name}'
    }
});