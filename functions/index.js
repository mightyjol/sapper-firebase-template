const functions = require('firebase-functions');
const express = require('express');

// We have to import the built version of the server middleware.
const { server } = require('./__sapper__/build/server/server');
exports.ssr = functions
	.region('us-central1')
	.https.onRequest(server);