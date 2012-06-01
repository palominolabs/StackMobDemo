Ext.define('StackMobDemo.store.Meats', {
    extend: 'Ext.data.Store',

    config: {
        model: 'StackMobDemo.model.Meat',
        autoLoad: true,
        sorters: 'name',
        proxy: {
            type: 'ajax',
            url: 'meats.json'
        }
    }
});