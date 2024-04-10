import {
    BackstageIdentityResponse,
    SignInPageProps,
    useApi,
  } from '@backstage/core-plugin-api';
  import { UserIdentity } from './UserIdentity';
  import Button from '@material-ui/core/Button';
  import Grid from '@material-ui/core/Grid';
  import Typography from '@material-ui/core/Typography';
  import React, { useState } from 'react';
  import { Page } from '../CustomPage/Page';
  import { useMountEffect } from '@react-hookz/web';
  import { getSignInProviders, useSignInProviders } from './providers';
  import { GridItem, useStyles } from './styles';
  import { IdentityProviders, SignInProviderConfig } from './types';
  import { Content, ContentHeader, InfoCard, Progress } from '@backstage/core-components';
  import WelcomeHeader from './WelcomeHeader';

  type MultiSignInPageProps = SignInPageProps & {
    providers: IdentityProviders;
    title?: string;
    align?: 'center' | 'left';
  };

  type SingleSignInPageProps = SignInPageProps & {
    provider: SignInProviderConfig;
    auto?: boolean;
  };

  export type Props = MultiSignInPageProps | SingleSignInPageProps;

  export const MultiSignInPage = ({
    onSignInSuccess,
    providers = [],
    //title,
    align = 'center',
  }: MultiSignInPageProps) => {
    const classes = useStyles();

    const signInProviders = getSignInProviders(providers);
    const [loading, providerElements] = useSignInProviders(
      signInProviders,
      onSignInSuccess,
    );

    if (loading) {
      return <Progress />;
    }


    return (
      <Page themeId="home">
        <Content >
          {<ContentHeader textAlign={align}
          titleComponent={<WelcomeHeader />} />}
          <Grid
            container
            justifyContent={align === 'center' ? align : 'flex-start'}
            spacing={2}
            component="ul"
            classes={classes}
          >
            {providerElements}
          </Grid>
        </Content>
      </Page>
    );
  };

  export const SingleSignInPage = ({
    provider,
    auto,
    onSignInSuccess,
  }: SingleSignInPageProps) => {
    const classes = useStyles();
    const authApi = useApi(provider.apiRef);
    // const configApi = useApi(configApiRef);
    const [error, setError] = useState<Error>();

    // The SignIn component takes some time to decide whether the user is logged-in or not.
    // showLoginPage is used to prevent a glitch-like experience where the sign-in page is
    // displayed for a split second when the user is already logged-in.
    const [showLoginPage, setShowLoginPage] = useState<boolean>(false);

    type LoginOpts = { checkExisting?: boolean; showPopup?: boolean };
    const login = async ({ checkExisting, showPopup }: LoginOpts) => {
      try {
        let identityResponse: BackstageIdentityResponse | undefined;
        if (checkExisting) {
          // Do an initial check if any logged-in session exists
          identityResponse = await authApi.getBackstageIdentity({
            optional: true,
          });
        }

        // If no session exists, show the sign-in page
        if (!identityResponse && (showPopup || auto)) {
          // Unless auto is set to true, this step should not happen.
          // When user intentionally clicks the Sign In button, autoShowPopup is set to true
          setShowLoginPage(true);
          identityResponse = await authApi.getBackstageIdentity({
            instantPopup: true,
          });
          if (!identityResponse) {
            throw new Error(
              `The ${provider.title} provider is not configured to support sign-in`,
            );
          }
        }

        if (!identityResponse) {
          setShowLoginPage(true);
          return;
        }

        const profile = await authApi.getProfile();
        onSignInSuccess(
          UserIdentity.create({
            identity: identityResponse.identity,
            authApi,
            profile,
          }),
        );
      } catch (err: any) {
        // User closed the sign-in modal
        setError(err);
        setShowLoginPage(true);
      }
    };

    useMountEffect(() => login({ checkExisting: true }));

    return showLoginPage ? (
      <Page themeId="home">
        <Content >
          <Grid
            container
            justifyContent="center"
            spacing={2}
            component="ul"
            classes={classes}
          >
            <GridItem>
              <InfoCard
                variant="fullHeight"
                title={provider.title}
                actions={
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={() => {
                      login({ showPopup: true });
                    }}
                  >
                    Sign In
                  </Button>
                }
              >
                <Typography variant="body1">{provider.message}</Typography>
                {error && error.name !== 'PopupRejectedError' && (
                  <Typography variant="body1" color="error">
                    {error.message}
                  </Typography>
                )}
              </InfoCard>
            </GridItem>
          </Grid>
        </Content>
      </Page>
    ) : (
      <Progress />
    );
  };

  export function SignInPage(props: Props) {
    if ('provider' in props) {
      return <SingleSignInPage {...props} />;
    }

    return <MultiSignInPage {...props} />;
  }
