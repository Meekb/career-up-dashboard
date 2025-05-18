// CountrySummary.spec.ts
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
// @ts-ignore
import CountrySummary from "../CountrySummary.vue";
import { useCountryInfo } from "@/composables/useCountryInfo.js";

vi.mock("@/composables/useCountryInfo.js", () => {
  return {
    useCountryInfo: vi.fn(),
  };
});

describe("CountrySummary.vue", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders summary data when a country is selected", () => {
    (useCountryInfo as any).mockReturnValue({
      countryName: "Poland",
      officialName: "Republic of Poland",
      capital: "Warsaw",
      population: { value: 38000000 },
      area: { value: 312696 },
      languages: "Polish",
      currencyName: "Polish złoty",
      currencySymbol: "zł",
      selectedCountry: { value: { name: { common: "Poland" } } },
    });

    const wrapper = mount(CountrySummary);
    const text = wrapper.text();

    expect(text).toContain("Poland");
    expect(text).toContain("Republic of Poland");
    expect(text).toContain("Warsaw");
    expect(text).toContain("38,000,000");
    expect(text).toContain("312,696");
    expect(text).toContain("Polish");
    expect(text).toContain("Polish złoty");
    expect(text).toContain("zł");
  });

  it("renders fallback text when no country is selected", () => {
    (useCountryInfo as any).mockReturnValue({
      countryName: "",
      officialName: null,
      capital: null,
      population: { value: null },
      area: { value: null },
      languages: null,
      currencyName: null,
      currencySymbol: null,
      selectedCountry: { value: null },
    });

    const wrapper = mount(CountrySummary);
    const text = wrapper.text();

    expect(text).toContain("No country selected");
    expect(text).toContain("Select one from the dropdown to begin.");
  });
});
