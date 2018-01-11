const path = require('path');
const storage = require('node-persist');
const HAP = require('hap-nodejs');

const uuid = HAP.uuid;
const Bridge = HAP.Bridge;
const Accessory = HAP.Accessory;
const AccessoryLoader = HAP.AccessoryLoader;
const Service = HAP.Service;
const Characteristic = HAP.Characteristic;

// Initialize our storage system
HAP.init();

// Start by creating our Bridge which will host all loaded Accessories
const bridge = new Bridge('Lectroid Bridge', uuid.generate('Lectroid Bridge'));

// Load up all accessories in the /accessories folder
const dir = path.join(__dirname, 'accessories');
const accessories = AccessoryLoader.loadDirectory(dir);

// Add them all to the bridge
accessories.forEach(accessory => {
  bridge.addBridgedAccessory(accessory);
});

// Publish the Bridge on the local network.
bridge.publish({
  username: 'CC:22:3D:E3:CE:F6',
  port: 51826,
  pincode: '031-45-154',
  category: Accessory.Categories.BRIDGE
});
