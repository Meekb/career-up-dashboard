import { beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
// @ts-ignore
import CountrySelector from "@/components/CountrySelector.vue";
// @ts-ignore
import { createTestingPinia } from "@pinia/testing";
import { useCountryStore } from "@/stores/useCountryStore";

vi.mock("@/composables/useCountryInfo", () => ({
  useCountryInfo: () => ({ flagUrl: "https://flagcdn.com/us.svg" }),
}));

describe("CountrySelector.vue", () => {
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => {
    wrapper = mount(CountrySelector, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            createSpy: vi.fn,
            initialState: {
              country: {
                countries: [
                  {
                    name: { common: "United States" },
                    latlng: [38, -97],
                    maps: { googleMaps: "https://goo.gl/maps/US" },
                  },
                ],
              },
            },
          }),
        ],
        stubs: {
          VImg: true,
          VSelect: {
            template: '<input data-testid="country-select" />',
            props: ["modelValue", "items", "label"],
          },
        },
      },
    });
  });

  it("renders the component", () => {
    expect(wrapper.find(".selector-content").exists()).toBe(true);
    expect(wrapper.text()).toContain("Country Selector");
  });

  it("displays the v-select with country options and allows selection", async () => {
    const countryStore = useCountryStore();
    const setSelectedCountry = vi.fn();
    countryStore.setSelectedCountry = setSelectedCountry;

    await nextTick();

    const select = wrapper.find('[data-testid="country-select"]');

    expect(select.exists()).toBe(true);
  });

  it("displays loading message if no countries", async () => {
    const countryStore = useCountryStore();
    countryStore.countries = [];
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain("Loading countries...");
  });

  it("updates selectedCountry when v-select changes", async () => {
    const countryStore = useCountryStore();
    countryStore.setSelectedCountry = vi.fn();
    // Directly update the model value
    // @ts-ignore
    wrapper.vm.selectedCountryName = "United States";
    await nextTick();
    expect(countryStore.setSelectedCountry).toHaveBeenCalledWith(
      expect.objectContaining({ name: { common: "United States" } })
    );
  });

  it("displays flag image if flagUrl is available", () => {
    const img = wrapper.findComponent({ name: "VImg" });
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("https://flagcdn.com/us.svg");
  });
});
