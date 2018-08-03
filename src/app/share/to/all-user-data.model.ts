import {Participant} from '../models/participant.model';
import {Thread} from '../models/thread.model';
import {Message} from '../models/message.model';

export interface AllUserData {
    participants: Participant[];
    threads: Thread[];
    messages: Message[];

}