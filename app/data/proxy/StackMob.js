Ext.define('StackMobDemo.data.proxy.StackMob', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.stackmob',

    requires: ['StackMobDemo.data.writer.StackMob'],

    config: {
        headers: {
            'Accept': 'application/vnd.stackmob+json; version=0',
            'X-StackMob-Proxy': 'stackmob-api',
            'X-StackMob-User-Agent': 'StackMob (JS; 0.2.1)/stackmobdemo'
        },

        writer: {
            type: 'stackmob'
        },

        // Disable cache busting / paging for now, since StackMob rejects the GET params added by ServerProxy.
        // TODO: re-implement these in a StackMob-compliant manner (request headers)
        noCache: false,
        pageParam: false,
        startParam: false,
        limitParam: false
    }
});