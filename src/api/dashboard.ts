import client from "./client.ts";
import type { Country } from "@/models/country.model";

export const fetchCountries = () =>
  client.get<Country[]>("/all");

