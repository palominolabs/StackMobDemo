Ext.define('StackMobDemo.data.proxy.StackMob', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.stackmob',

    config: {
        headers: {
            'Accept': 'application/vnd.stackmob+json; version=0',
            'X-StackMob-Proxy-Plain': 'stackmob-api',
            'X-StackMob-API-Key': '1bef6219-bfaf-48a8-8564-a7e0f73e7f38',
            'X-StackMob-User-Agent': 'StackMob (JS; 0.2.1)/stackmobdemo'
        },

        // Disable cache busting / paging for now, since StackMob rejects the GET params added by ServerProxy.
        // TODO: re-implement these in a StackMob-compliant manner (request headers)
        noCache: false,
        pageParam: false,
        startParam: false,
        limitParam: false
    }
});