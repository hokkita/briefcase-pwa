import Blank from "./Blank.vue";
import Building from "./Building.vue";

function registerComponents(app) {
    app.component("layout-blank", Blank);
    app.component("layout-building", Building);
}

export default {
    registerComponents
};