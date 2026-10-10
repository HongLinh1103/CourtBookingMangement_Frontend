export interface AnalyticsEventPayload {
  branchId?: string;
  branchName?: string;
  [key: string]: unknown;
}

/**
 * Universal analytics tracking helper for enterprise reporting and instrumentation.
 */
export const trackAnalyticsEvent = (
  eventName: string,
  payload: AnalyticsEventPayload,
): void => {
  if (typeof window !== 'undefined') {
    console.info(`[Analytics] ${eventName}:`, payload);

    window.dispatchEvent(
      new CustomEvent('app:analytics', {
        detail: {
          eventName,
          payload,
          timestamp: new Date().toISOString(),
        },
      }),
    );
  }
};
