import { replaceMongoIdInArray } from "@/utils/data-utils";

const { eventModel } = require("@/models/event-models");

async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    console.log(allEvents);
    return replaceMongoIdInArray(allEvents);
}

export {
    getAllEvents
}