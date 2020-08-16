Vue.component("kkb-dialog", {
  props: {
    title: "标题",
    visible: false,
  },

  template: `
        <div class="dialog" v-show="visible">
            <div class="dialog-header">
                <span class="dialog-title">提示</span>
                <i class="dialog-close" @click="close">x</i>
            </div>
            <div class="dialog-body">
                <slot></slot>
            </div>
        </div>
    `,

  methods: {
    open() {
      this.$emit("update:visible", true);
    },
    close() {
      this.$emit("update:visible", false);
    },
  },
});
