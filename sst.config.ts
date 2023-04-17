import { SSTConfig } from "sst";
import { StaticSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "freenextjsforjimbiz",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new StaticSite(stack, "site", {
        path: "static",
        customDomain:
          stack.stage === "prod"
            ? {
                domainName: "freenextjsforjim.biz",
                domainAlias: "www.freenextjsforjim.biz",
              }
            : undefined,
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
