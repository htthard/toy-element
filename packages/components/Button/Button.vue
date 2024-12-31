<script setup lang="ts">
import { computed, ref } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
import PpIcon from "../Icon/Icon.vue";

defineOptions({
  name: "PpButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
});

const emits = defineEmits<ButtonEmits>();

const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();

const handleBtnClick = (e: MouseEvent) => {
  emits("click", e);
};
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);

const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px",
}));

defineExpose<ButtonInstance>({
  ref: _ref,
});
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    class="pp-button"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`pp-button--${type}`]: type,
      [`pp-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-loading': loading,
      'is-disabled': disabled,
    }"
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <pp-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        ></pp-icon>
      </slot>
    </template>
    <pp-icon
      v-if="icon && !loading"
      :icon="icon"
      :style="iconStyle"
      size="1x"
    />
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
