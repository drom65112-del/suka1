import { describe, expect, it } from "vitest";

import { formatPrice } from "../../lib/format/price";

describe("formatPrice", () => {
  it("formats minor units as Ukrainian hryvnia", () => {
    const result = formatPrice(2499900);

    expect(result).toContain("24");
    expect(result).toContain("999");
    expect(result).toContain("₴");
  });
});
