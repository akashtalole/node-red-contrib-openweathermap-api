'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function OpenweathermapApiNode(config) {
        RED.nodes.createNode(this, config);
        this.service = RED.nodes.getNode(config.service);
        this.method = config.method;
        this.CurrentWeatherData_q = config.CurrentWeatherData_q;
        this.CurrentWeatherData_qType = config.CurrentWeatherData_qType || 'str';
        this.CurrentWeatherData_id = config.CurrentWeatherData_id;
        this.CurrentWeatherData_idType = config.CurrentWeatherData_idType || 'str';
        this.CurrentWeatherData_lat = config.CurrentWeatherData_lat;
        this.CurrentWeatherData_latType = config.CurrentWeatherData_latType || 'str';
        this.CurrentWeatherData_lon = config.CurrentWeatherData_lon;
        this.CurrentWeatherData_lonType = config.CurrentWeatherData_lonType || 'str';
        this.CurrentWeatherData_zip = config.CurrentWeatherData_zip;
        this.CurrentWeatherData_zipType = config.CurrentWeatherData_zipType || 'str';
        this.CurrentWeatherData_units = config.CurrentWeatherData_units;
        this.CurrentWeatherData_unitsType = config.CurrentWeatherData_unitsType || 'str';
        this.CurrentWeatherData_lang = config.CurrentWeatherData_lang;
        this.CurrentWeatherData_langType = config.CurrentWeatherData_langType || 'str';
        this.CurrentWeatherData_mode = config.CurrentWeatherData_mode;
        this.CurrentWeatherData_modeType = config.CurrentWeatherData_modeType || 'str';
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client = new lib.OpenweathermapApi();
            if (!errorFlag && this.service && this.service.credentials && this.service.credentials.secureApiKeyValue) {
                if (this.service.secureApiKeyIsQuery) {
                    client.setApiKey(this.service.credentials.secureApiKeyValue,
                                     this.service.secureApiKeyHeaderOrQueryName, true);
                } else {
                    client.setApiKey(this.service.credentials.secureApiKeyValue,
                                     this.service.secureApiKeyHeaderOrQueryName, false);
                }
            }
            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'CurrentWeatherData') {
                var CurrentWeatherData_parameters = [];
                var CurrentWeatherData_nodeParam;
                var CurrentWeatherData_nodeParamType;

                CurrentWeatherData_nodeParam = node.CurrentWeatherData_q;
                CurrentWeatherData_nodeParamType = node.CurrentWeatherData_qType;
                if (CurrentWeatherData_nodeParamType === 'str') {
                    CurrentWeatherData_parameters.q = CurrentWeatherData_nodeParam || '';
                } else {
                    CurrentWeatherData_parameters.q = RED.util.getMessageProperty(msg, CurrentWeatherData_nodeParam);
                }
                CurrentWeatherData_parameters.q = !!CurrentWeatherData_parameters.q ? CurrentWeatherData_parameters.q : msg.payload;
                
                CurrentWeatherData_nodeParam = node.CurrentWeatherData_id;
                CurrentWeatherData_nodeParamType = node.CurrentWeatherData_idType;
                if (CurrentWeatherData_nodeParamType === 'str') {
                    CurrentWeatherData_parameters.id = CurrentWeatherData_nodeParam || '';
                } else {
                    CurrentWeatherData_parameters.id = RED.util.getMessageProperty(msg, CurrentWeatherData_nodeParam);
                }
                CurrentWeatherData_parameters.id = !!CurrentWeatherData_parameters.id ? CurrentWeatherData_parameters.id : msg.payload;
                
                CurrentWeatherData_nodeParam = node.CurrentWeatherData_lat;
                CurrentWeatherData_nodeParamType = node.CurrentWeatherData_latType;
                if (CurrentWeatherData_nodeParamType === 'str') {
                    CurrentWeatherData_parameters.lat = CurrentWeatherData_nodeParam || '';
                } else {
                    CurrentWeatherData_parameters.lat = RED.util.getMessageProperty(msg, CurrentWeatherData_nodeParam);
                }
                CurrentWeatherData_parameters.lat = !!CurrentWeatherData_parameters.lat ? CurrentWeatherData_parameters.lat : msg.payload;
                
                CurrentWeatherData_nodeParam = node.CurrentWeatherData_lon;
                CurrentWeatherData_nodeParamType = node.CurrentWeatherData_lonType;
                if (CurrentWeatherData_nodeParamType === 'str') {
                    CurrentWeatherData_parameters.lon = CurrentWeatherData_nodeParam || '';
                } else {
                    CurrentWeatherData_parameters.lon = RED.util.getMessageProperty(msg, CurrentWeatherData_nodeParam);
                }
                CurrentWeatherData_parameters.lon = !!CurrentWeatherData_parameters.lon ? CurrentWeatherData_parameters.lon : msg.payload;
                
                CurrentWeatherData_nodeParam = node.CurrentWeatherData_zip;
                CurrentWeatherData_nodeParamType = node.CurrentWeatherData_zipType;
                if (CurrentWeatherData_nodeParamType === 'str') {
                    CurrentWeatherData_parameters.zip = CurrentWeatherData_nodeParam || '';
                } else {
                    CurrentWeatherData_parameters.zip = RED.util.getMessageProperty(msg, CurrentWeatherData_nodeParam);
                }
                CurrentWeatherData_parameters.zip = !!CurrentWeatherData_parameters.zip ? CurrentWeatherData_parameters.zip : msg.payload;
                
                CurrentWeatherData_nodeParam = node.CurrentWeatherData_units;
                CurrentWeatherData_nodeParamType = node.CurrentWeatherData_unitsType;
                if (CurrentWeatherData_nodeParamType === 'str') {
                    CurrentWeatherData_parameters.units = CurrentWeatherData_nodeParam || '';
                } else {
                    CurrentWeatherData_parameters.units = RED.util.getMessageProperty(msg, CurrentWeatherData_nodeParam);
                }
                CurrentWeatherData_parameters.units = !!CurrentWeatherData_parameters.units ? CurrentWeatherData_parameters.units : msg.payload;
                
                CurrentWeatherData_nodeParam = node.CurrentWeatherData_lang;
                CurrentWeatherData_nodeParamType = node.CurrentWeatherData_langType;
                if (CurrentWeatherData_nodeParamType === 'str') {
                    CurrentWeatherData_parameters.lang = CurrentWeatherData_nodeParam || '';
                } else {
                    CurrentWeatherData_parameters.lang = RED.util.getMessageProperty(msg, CurrentWeatherData_nodeParam);
                }
                CurrentWeatherData_parameters.lang = !!CurrentWeatherData_parameters.lang ? CurrentWeatherData_parameters.lang : msg.payload;
                
                CurrentWeatherData_nodeParam = node.CurrentWeatherData_mode;
                CurrentWeatherData_nodeParamType = node.CurrentWeatherData_modeType;
                if (CurrentWeatherData_nodeParamType === 'str') {
                    CurrentWeatherData_parameters.mode = CurrentWeatherData_nodeParam || '';
                } else {
                    CurrentWeatherData_parameters.mode = RED.util.getMessageProperty(msg, CurrentWeatherData_nodeParam);
                }
                CurrentWeatherData_parameters.mode = !!CurrentWeatherData_parameters.mode ? CurrentWeatherData_parameters.mode : msg.payload;
                                result = client.CurrentWeatherData(CurrentWeatherData_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'OpenweathermapApi.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('openweathermap-api', OpenweathermapApiNode);
    function OpenweathermapApiServiceNode(n) {
        RED.nodes.createNode(this, n);

        this.secureApiKeyValue = n.secureApiKeyValue;
        this.secureApiKeyHeaderOrQueryName = n.secureApiKeyHeaderOrQueryName;
        this.secureApiKeyIsQuery = n.secureApiKeyIsQuery;
    }

    RED.nodes.registerType('openweathermap-api-service', OpenweathermapApiServiceNode, {
        credentials: {
            secureApiKeyValue: { type: 'password' },
            temp: { type: 'text' }
        }
    });
};
