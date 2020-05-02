import * as Telegraf from 'telegraf';
import { BotUserMode } from './types/BotUserMode';

declare module 'telegraf' {
    interface TelegrafContext extends Telegraf.Context {
        session: {
            mode?: BotUserMode;
        }
    }
}