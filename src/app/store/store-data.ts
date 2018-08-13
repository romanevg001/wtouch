import { Participant } from "../share/models/participant.model";
import { Thread } from "../share/models/thread.model";
import { Message } from "../share/models/message.model";

export interface StoreData {
    participants: {[key:number]:Participant};
    threads: {[key:number]: Thread};
    messages: {[key:number]:Message};
}


export const INITIAL_STORE_DATE:StoreData = {
    participants: {},
    threads: {},
    messages: {}
}