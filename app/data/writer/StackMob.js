Ext.define('StackMobDemo.data.writer.StackMob', {
    extend: 'Ext.data.writer.Json',
    alias: 'writer.stackmob',

    getRecordData: function(record) {
        var data = this.callParent(arguments);

        // If we are creating the record, do not send the Sencha Touch-generated ID, let StackMob generate it.
        if (record.phantom) {
            delete(data[record.getIdProperty()]);
        }

        return data;
    }
})