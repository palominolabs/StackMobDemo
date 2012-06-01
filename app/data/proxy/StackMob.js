Ext.define('StackMobDemo.data.proxy.StackMob', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.stackmob',

    config: {
        headers: {
            'Accept': 'application/vnd.stackmob+json; version=0',
            'X-StackMob-Proxy': 'stackmob-api',
            'X-StackMob-User-Agent': 'StackMob (JS; 0.2.1)/stackmobdemo'
        }
    }
});