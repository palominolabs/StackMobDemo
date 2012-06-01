Ext.define('StackMobDemo.view.List', {
    extend: 'Ext.List',

    id: 'meatsView',

    config: {
        title: 'Meats',

        store: 'Meats',
        itemTpl: '{name}'
    }
});