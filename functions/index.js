'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const axios = require('axios');

const BASE_URL = 'http://MY-RASPBERRY-PI.ngrok.io/';

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });

  function ledOn(agent) {
      return axios
        .post(`${BASE_URL}/led/on`)
        .then((result) => {
            agent.add(`Ok, ho acceso il LED.`);
        })
        .catch((error) => {
            agent.add('Mi dispiace, non è stato possibile accendere il LED.');
        });
  }

  function ledOff(agent) {
      return axios
        .post(`${BASE_URL}/led/off`)
        .then((result) => {
            agent.add(`Ok, ho spento il LED.`);
        })
        .catch((error) => {
            agent.add('Mi dispiace, non è stato possibile spegnere il LED.');
        });
  }

  function engineOn(agent) {
      return axios
        .post(`${BASE_URL}/engine/on`)
        .then((result) => {
            agent.add(`Ok, ho acceso il motore.`);
        })
        .catch((error) => {
            agent.add('Mi dispiace, non è stato possibile accendere il motore.');
        });
  }

  function engineOff(agent) {
      return axios
        .post(`${BASE_URL}/engine/off`)
        .then((result) => {
            agent.add(`Ok, ho spento il motore.`);
        })
        .catch((error) => {
            agent.add('Mi dispiace, non è stato possibile spegnere il motore.');
        });
  }

  let intentMap = new Map();
  intentMap.set('Accendi LED', ledOn);
  intentMap.set('Spegni LED', ledOff);
  intentMap.set('Accendi Motore', ledOn);
  intentMap.set('Spegni Motore', ledOff);
  agent.handleRequest(intentMap);
});
