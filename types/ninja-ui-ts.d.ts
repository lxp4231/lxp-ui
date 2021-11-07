import Vue from "vue";

export declare class NjButton extends Vue {
  type: string | undefined;
  plain: boolean | undefined;
  tile: boolean | undefined;
  rounded: boolean | undefined;
  circle: boolean | undefined;
  size: string | undefined;
  icon: string | undefined;
  disabled: boolean | undefined;
  onClickBtn(): void;
}
export declare class NjSwitch extends Vue {
  value: boolean | undefined;
  activeColor: string | undefined;
  inactiveColor: string | undefined;
  name: string | undefined;
  changeActive(): void;
}
export declare class NjInput extends Vue {
  placeholder: string | undefined;
  type: string | undefined;
  name: string | undefined;
  disabled: boolean | undefined;
  value: string | undefined;
  clearable: boolean | undefined;
  showPwd: boolean | undefined;
  clear(): void;
  changeView(): any;
  changeValue(): void;
}
export declare class NjDialog extends Vue {
  title: string | undefined;
  width: string | undefined;
  top: string | undefined;
  visible: boolean | undefined;
  dialogColse(): void;
}

export declare class NjRadio extends Vue {
  label: string | boolean | number | undefined;
  value: any;
  name: string | undefined;
  isGroup(): any;
  RadioGroup: object;
}

export declare class NjRadioGroup extends Vue {
  value: any;
  RadioGroup: NjRadioGroup;
}

export declare class NjCheckbox extends Vue {
  value: boolean | undefined;
  label: string | undefined;
  name: string | undefined;
  CheckGroup: any[];
  isGroup(): any;
  isChecked(): any;
  model(): any;
}
export default class NjCheckboxGroup extends Vue {
  value: any[];
  CheckGroup: NjCheckboxGroup;
}
export declare class NjForm extends Vue {
  model: any;
  labelWidth: string | undefined;
  Form: NjForm;
}

export declare class NjFormItem extends Vue {
  label: string | undefined;
  Form: string;
}
