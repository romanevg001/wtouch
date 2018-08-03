import { Inject, Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import * as config from '../assets/config.json';

@Injectable()
export class AppConfig {

    private config: Object = config;

    public get(key: any) {
        return this.config[key];
    }

    public load() {
        return this.config
    }

}