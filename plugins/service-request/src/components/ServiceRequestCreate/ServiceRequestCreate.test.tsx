
import React from 'react';
import { ServiceRequestCreate } from './ServiceRequestCreate';
import { ThemeProvider } from '@material-ui/core';
import { lightTheme } from '@backstage/theme';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  setupRequestMockHandlers,
  renderInTestApp,
} from "@backstage/test-utils";

describe('ServiceRequestCreate', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  setupRequestMockHandlers(server);

  // setup mock response
  beforeEach(() => {
    server.use(
      rest.get('/*', (_, res, ctx) => res(ctx.status(200), ctx.json({}))),
    );
  });

  it('should render', async () => {
    const rendered = await renderInTestApp(
      <ThemeProvider theme={lightTheme}>
        <ServiceRequestCreate show={true} onClose={()=>{}} />
      </ThemeProvider>,
    );
    expect(rendered.getByText('Create Service Request')).toBeInTheDocument();
  });
});
