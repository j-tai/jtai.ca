import { FluentI18n } from '@jtai/toolskit-i18n';
import en from '/src/i18n/en.ftl?raw';

export const i18n = FluentI18n('en', {
    en,
    tok: async () => (await import('/src/i18n/tok.ftl?raw')).default,
});
export const tl = i18n.translate;
