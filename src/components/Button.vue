<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return ["primary", "transparent", "icon"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: "sm",
      validator: function (value) {
        return ["sm", "md"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<template>
  <button
    class="text-sm font-['Circular_Black'] cursor-pointer rounded-[500px] transition-all hover:scale-[1.06]"
    :class="{
      'px-[15px] py-[7px]': size === 'sm',
      'px-[22px] py-[12px]': size === 'md',
      'border-none bg-white text-dark': type === 'primary',
      'border-none bg-transparent text-dark-white hover:text-white':
        type === 'transparent',
      'flex items-center gap-x-2 justify-center border border-white bg-transparent text-white':
        type === 'icon',
    }"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>
