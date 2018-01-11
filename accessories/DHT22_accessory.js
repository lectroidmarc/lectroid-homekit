const HAP = require('hap-nodejs');

const Accessory = HAP.Accessory;
const Service = HAP.Service;
const Characteristic = HAP.Characteristic;
const uuid = HAP.uuid;

const sensor = require('node-dht-sensor');

const config = {
  type: 22,
  pin: 4
};

const temperatureSensorAccessory = exports.accessory = new Accessory('DHT22 Sensor', uuid.generate('hap-nodejs:accessories:dht22-sensor'));
temperatureSensorAccessory.username = 'C2:5D:3A:AE:5E:FA';
temperatureSensorAccessory.pincode = '031-45-154';

temperatureSensorAccessory
  .addService(Service.TemperatureSensor, 'Current Temperature')
  .getCharacteristic(Characteristic.CurrentTemperature)
  .on('get', callback => {
    sensor.read(config.type, config.pin, (err, temperature, humidity) => {
      if (!err) { callback(null, temperature); }
    });
  });

temperatureSensorAccessory
  .addService(Service.HumiditySensor, 'Current Humidity')
  .getCharacteristic(Characteristic.CurrentRelativeHumidity)
  .on('get', callback => {
    sensor.read(config.type, config.pin, (err, temperature, humidity) => {
      if (!err) { callback(null, humidity); }
    });
  });
