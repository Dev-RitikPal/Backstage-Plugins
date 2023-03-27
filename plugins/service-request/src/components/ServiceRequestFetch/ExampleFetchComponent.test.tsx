import React from 'react';
import { render } from '@testing-library/react';
import { ServiceRequestFetch } from './ServiceRequestFetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { setupRequestMockHandlers } from '@backstage/test-utils';

describe('ServiceRequestFetch', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  setupRequestMockHandlers(server);

  // setup mock response
  beforeEach(() => {
    server.use(
      rest.get('https://randomuser.me/*', (_, res, ctx) =>
        res(ctx.status(200), ctx.delay(2000), ctx.json({})),
      ),
    );
  });
  it('should render', async () => {
    const rendered = render(<ServiceRequestFetch />);
    expect(await rendered.findByTestId('progress')).toBeInTheDocument();
  });
});
