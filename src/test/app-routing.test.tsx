import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { NAV_LINKS, PACKAGES, BUSINESS } from "@/lib/config";
import { SOLAR_PACKAGES } from "@/components/SolarPackageCards";

describe("App routing and configuration", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it("matches a page for / instead of falling back to not found", () => {
    const matches = router.matchRoutes("/");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches a page for /packages", () => {
    const matches = router.matchRoutes("/packages");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches a page for /contact", () => {
    const matches = router.matchRoutes("/contact");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("does not include /partnerships in NAV_LINKS", () => {
    const partnershipLink = NAV_LINKS.find((link) => link.to.includes("partner"));
    expect(partnershipLink).toBeUndefined();
  });

  it("contains exactly 3 solar packages with exact pricing and capacity", () => {
    expect(SOLAR_PACKAGES).toHaveLength(3);

    expect(SOLAR_PACKAGES[0].capacity).toBe("3.45 kW");
    expect(SOLAR_PACKAGES[0].price).toBe("₹2,15,000");

    expect(SOLAR_PACKAGES[1].capacity).toBe("4 kW");
    expect(SOLAR_PACKAGES[1].price).toBe("₹2,58,000");
    expect(SOLAR_PACKAGES[1].popular).toBe(true);

    expect(SOLAR_PACKAGES[2].capacity).toBe("5 kW");
    expect(SOLAR_PACKAGES[2].price).toBe("₹3,15,000");

    // config PACKAGES compatibility
    expect(PACKAGES).toHaveLength(3);
  });

  it("has the verified Surrya Gen Power contact details configured", () => {
    expect(BUSINESS.name).toBe("Surrya Gen Power");
    expect(BUSINESS.phone).toBe("+91 9391927443");
    expect(BUSINESS.secondaryPhone).toBe("+91 9391907443");
    expect(BUSINESS.website).toBe("www.surryagenpower.in");
    expect(BUSINESS.websiteUrl).toBe("https://www.surryagenpower.in");
  });
});
