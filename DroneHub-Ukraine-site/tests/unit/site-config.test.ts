import { describe, expect, it } from "vitest";

import { siteConfig } from "../../lib/site-config";

describe("siteConfig", () => {
  it("uses the Ukrainian locale and brand name", () => {
    expect(siteConfig.locale).toBe("uk_UA");
    expect(siteConfig.name).toBe("DroneHub Ukraine");
  });
});
