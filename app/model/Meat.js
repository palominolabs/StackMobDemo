Ext.define('StackMobDemo.model.Meat', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'meat_id',
        fields: [
            'meat_id',
            'name'
        ]
    }
});