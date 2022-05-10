import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import Config from "../config";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: Config.ACCENT_COLOR,
                secondary: Config.SECONDARY_COLOR,
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
        dark: true
    },
});
