import Vue from 'vue'

import { AppApi } from './app-api'

export class AppVuePlugin {
    public static install(vue: typeof Vue, options: any) {
        Object.defineProperties(vue.prototype, {
            $api: {
                get() { return new AppApi() },
            },
        })
    }
}