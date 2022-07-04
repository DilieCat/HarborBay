const outboundReplay = require('../models/replaymodels/outbound.replay');
const inboundReplay = require('../models/replaymodels/inbound.replay');

const mongoose = require('mongoose');

let inbounds = [];
let outbounds = [];

//Inbounds replay actions
const InboundGetAll = (req, res, next) => {
    return res.status(200).json(inbounds).end();
};

const InboundRead = (req, res, next) => {
    const found = inbounds.find(element => element._id = req.params.id);

    return res.status(200).json(found).end();
};

const InboundCreate = (inbound) => {
    const inboundsNew = new inboundReplay(inbound);
    inbounds.push(inboundsNew);
};
  
const InboundUpdate = (inbound) => {
    const found = inbounds.find(element => element._id = inbound._id);
    const index = inbounds.indexOf(found);
    inbounds[index] = inbound;
};

const InboundDelete = async (inbound) => {
    const found = inbounds.find(element => element._id = inbound._id);
    const index = inbounds.indexOf(found);
    if (index > -1) {
        inbounds.splice(index, 1);
    }
};

//Outbound replay actions
const OutboundGetAll = (req, res, next) => {
    return res.status(200).json(outbounds).end();
};

const OutboundRead = (req, res, next) => {
    const found = outbounds.find(element => element._id = req.params.id);

    return res.status(200).json(found).end();
};

const OutboundCreate = (outbound) => {
    const outboundsNew = new outboundReplay(outbound);
    outbounds.push(outboundsNew);
};
  
const OutboundUpdate = (outbound) => {
    const found = outbounds.find(element => element._id = outbound._id);
    const index = outbounds.indexOf(found);
    outbounds[index] = outbound;
};

const OutboundDelete = async (outbound) => {
    const found = outbounds.find(element => element._id = outbound._id);
    const index = outbounds.indexOf(found);
    if (index > -1) {
        outbounds.splice(index, 1);
    }
};


function emptyRebuiltStore() {
    fueltanks = [];
    runways = [];
    taxiways = [];
    airplanes = [];
};

module.exports = {
    InboundGetAll,
    InboundCreate,
    InboundUpdate,
    InboundRead,
    OutboundGetAll,
    OutboundRead,
    OutboundUpdate,
    OutboundCreate,
    InboundDelete,
    OutboundDelete,
    emptyRebuiltStore,
};
  