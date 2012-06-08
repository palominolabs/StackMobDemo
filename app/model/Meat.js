Ext.define('StackMobDemo.model.Meat', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'meat_id',
        fields: [
            {name: 'meat_id', type: 'auto', persist: false},
            'name'
        ]
    }
});