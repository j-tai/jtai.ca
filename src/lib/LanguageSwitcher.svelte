<script lang="ts">
    import type { I18n } from '@jtai/toolskit-i18n';
    import { i18n, tl } from './i18n';

    type Language = typeof i18n extends I18n<infer L, unknown> ? L : never;

    const languages: Record<Language, string> = {
        en: 'English',
        tok: 'toki pona',
    };

    function onchange(event: Event & { currentTarget: HTMLSelectElement }) {
        const value = event.currentTarget.value;
        if (value !== i18n.language) {
            i18n.setLanguage(value as Language);
        }
    }
</script>

<div class="flex flex-row items-center gap-3">
    <i class="fi fi-rr-globe flex-none text-lg" aria-label={tl('language')} id="lang-lbl"></i>
    <select
        class="select w-auto flex-none"
        value={i18n.language}
        {onchange}
        aria-labelledby="lang-lbl"
    >
        {#each Object.entries(languages) as [lang, name] (lang)}
            <option value={lang}>{name}</option>
        {/each}
    </select>
</div>
