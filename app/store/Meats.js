Ext.define('StackMobDemo.store.Meats', {
    extend: 'Ext.data.Store',

    requires: ['StackMobDemo.data.proxy.StackMob'],

    config: {
        model: 'StackMobDemo.model.Meat',
        autoLoad: true,
        sorters: 'name',
        proxy: {
            type: 'stackmob',
            url: 'http://127.0.0.1:4567/meat'
        }
    }
});