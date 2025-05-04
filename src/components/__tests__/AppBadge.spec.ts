import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AppBadge from "@/components/AppBadge.vue";

describe("AppBadge.vue", () => {
  it("renders the badge text", () => {
    const wrapper = mount(AppBadge, {
      props: { text: "Remote" },
    });
    expect(wrapper.text()).toBe("Remote");
  });

  it("applies the correct color class", () => {
    const wrapper = mount(AppBadge, {
      props: {
        text: "Online",
        color: "green",
      },
    });
    expect(wrapper.html()).toContain("green");
  });
});
