import { AuthProviderProps } from "react-oidc-context";
import { config } from ".";

export const oidcConfig: AuthProviderProps = {
  authority: config.auth.authority,
  client_id: config.auth.clientId,
  redirect_uri: config.auth.redirectUri,

  response_type: "code",
  scope: "openid profile email",

  automaticSilentRenew: true,

  onSigninCallback: () => {
    // Remove the query parameters (code, state) left by Keycloak
    window.history.replaceState({}, document.title, window.location.pathname);
  }
};