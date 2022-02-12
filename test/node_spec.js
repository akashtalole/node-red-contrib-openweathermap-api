var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('openweathermap-api node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'openweathermap-api', name: 'openweathermap-api' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'openweathermap-api');
            done();
        });
    });

    it('should handle CurrentWeatherData()', function (done) {
        var flow = [
            { id: 'n1', type: 'openweathermap-api', name: 'openweathermap-api',
                method: 'CurrentWeatherData',
                CurrentWeatherData_q: '<node property>', // (1) define node properties
                CurrentWeatherData_id: '<node property>', // (1) define node properties
                CurrentWeatherData_lat: '<node property>', // (1) define node properties
                CurrentWeatherData_lon: '<node property>', // (1) define node properties
                CurrentWeatherData_zip: '<node property>', // (1) define node properties
                CurrentWeatherData_units: '<node property>', // (1) define node properties
                CurrentWeatherData_lang: '<node property>', // (1) define node properties
                CurrentWeatherData_mode: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'openweathermap-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
