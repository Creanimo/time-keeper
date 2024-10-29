import './view/css/style.scss';
import { UiTextField } from "./view/ui-components/strawberry-vanilla-js/input/textfield/ui-textfield.js";

const templateBaseUrl = process.env.SV_UI_COMPONENTS_PATH;

console.log(`Template Base URL: ${templateBaseUrl}`);

const exampleTextField = new UiTextField("3567", "frame", "");

document.addEventListener("DOMContentLoaded", () => {
    exampleTextField.render(document.body);
});

console.log("Hello world");
