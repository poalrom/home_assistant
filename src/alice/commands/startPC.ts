import { IIntentContext, Reply } from "yandex-dialogs-sdk";
import { pcAdmin } from "../../modules/pc-admin";
import { config } from "../../config";

export interface StartPCIntent {
    which: {
        value: string;
    };
}

const humanPCNames = {
    main: "Алёши",
    secondary: "Светы",
    media: "с сериальчиками",
    mediaScreen: "с сериальчиками",
};

export async function startPC(ctx: IIntentContext) {
    const { which } = ctx.nlu!.intents!.startPC!.slots;
    let pcName = which ?
        which.value as keyof typeof config.pcMacAdresses :
        "main";
    if (!(pcName in config.pcMacAdresses)) {
        pcName = "main";
    }

    await pcAdmin.start(config.pcMacAdresses[pcName]);
    if (pcName === 'media') {
        await pcAdmin.start(config.pcMacAdresses.mediaScreen);
    }

    return Reply.text(
        "Включила компьютер " + humanPCNames[pcName],
        {
            end_session: true,
        }
    );
}