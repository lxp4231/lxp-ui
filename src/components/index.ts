import NjButton from "./Button.vue";
import NjDialog from "./Dialog.vue";
import NjInput from "./Input.vue";
import NjSwitch from "./Switch.vue";
import NjRadio from "./Radio.vue";
import NjRadioGroup from "./RadioGroup.vue";
import NjCheckbox from "./Checkbox.vue";
import NjCheckboxGroup from "./CheckboxGroup.vue";
import NjForm from "./Form.vue";
import NjFormItem from "./FormItem.vue";
import { Component, Vue } from "vue-property-decorator";
import ninjauits from "../../types/ninja-ui-ts";
import './font/font.scss'

const install = (vue: typeof Vue, options?: ninjauits) => {
  vue.component("NjButton", NjButton);
  vue.component("NjDialog", NjDialog);
  vue.component("NjInput", NjInput);
  vue.component("NjSwitch", NjSwitch);
  vue.component("NjRadio", NjRadio);
  vue.component("NjRadioGroup", NjRadioGroup);
  vue.component("NjCheckbox", NjCheckbox);
  vue.component("NjCheckboxGroup", NjCheckboxGroup);
  vue.component("NjForm", NjForm);
  vue.component("NjFormItem", NjFormItem);
};

export default { install };

