import { IContext } from 'yandex-dialogs-sdk';
import { StartPCIntent } from '../commands/startPC';

declare module 'yandex-dialogs-sdk' {
    export interface IIntentContext extends IContext {
        readonly nlu?: IContext['nlu'] & {
            intents?: {
                startPC?: {
                    slots: StartPCIntent;
                }
            }   
        };
    }
}