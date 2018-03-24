'use strict';

const express = require('express');
const app = express();
const Gpio = require('onoff').Gpio;

app.get('/', (req, res) => res.send('Hello World!'));

const led = () => {
  return new Gpio(20, 'out');
}

app.post('/led/on', (req, res) => {
  const led = led();
  led.writeSync(1);

  res.send('Il LED è acceso');
});

app.post('/led/off', (req, res) => {
  const led = led();
  led.writeSync(0);
  led.unexport();

  res.send('Il LED è spento');
});

app.listen(3000, () => console.log('Il server è attivo!'));
