import { serviceRequestPlugin } from './plugin';

describe('service-request', () => {
  it('should export plugin', () => {
    expect(serviceRequestPlugin).toBeDefined();
  });
});
