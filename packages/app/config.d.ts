export interface Config {
  /** @visibility frontend */
  app: {
    /** @visibility frontend */
    newsConfluenceContentID?: string;
    /** @visibility frontend */
    newRelicBrowserTracking?: {
      /** @visibility frontend */
      accountID?: string;
      /** @visibility frontend */
      licenseKey?: string;
      /** @visibility frontend */
      agentID?: string;
      /** @visibility frontend */
      trustKey?: string;
      /** @visibility frontend */
      applicationID?: string;
    };
  };
  /** @visibility frontend */
  featureFlags?: {
    /** @visibility frontend */
    beta?: boolean;
    /** @visibility frontend */
    on?: boolean;
    /** @visibility frontend */
    kafka?: boolean;
    /** @visibility frontend */
    kubernetes?: boolean;
    /** @visibility frontend */
    newRelicDashboards?: boolean;
    /** @visibility frontend */
    gitLabLogin?: boolean
    /** @visibility frontend */
    glossary?: boolean


  };
}
