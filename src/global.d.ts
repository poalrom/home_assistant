import * as Telegraf from 'telegraf';
import { BotUserMode } from './types/BotUserMode';

declare module 'telegraf' {
    // @ts-ignore
    interface ContextMessageUpdate extends Telegraf.ContextMessageUpdate {
        session: {
            mode?: BotUserMode;
        }
    }
}