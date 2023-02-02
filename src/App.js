import React from 'react';
import { StytchLogin } from '@stytch/react';
import { useStytch } from '@stytch/react';

export const Login = () => {
  const stytchClient = useStytch();

              
  const config = {
  "products": [
    "emailMagicLinks",
    "otp"
  ],
  "emailMagicLinksOptions": {
    "loginRedirectURL": "http://localhost:3000",
    "loginExpirationMinutes": 30,
    "signupRedirectURL": "http://localhost:3000",
    "signupExpirationMinutes": 30
  },

  "otpOptions": {
    "methods": [
      "sms"
    ],
    "expirationMinutes": 5
  }
};
  const styles = {
  "container": {
    "backgroundColor": "#FFFFFF",
    "borderColor": "#ADBCC5",
    "borderRadius": "8px",
    "width": "400px"
  },
  "colors": {
    "primary": "#19303D",
    "secondary": "#5C727D",
    "success": "#0C5A56",
    "error": "#8B1214"
  },
  "buttons": {
    "primary": {
      "backgroundColor": "#19303D",
      "textColor": "#FFFFFF",
      "borderColor": "#19303D",
      "borderRadius": "4px"
    },
    "secondary": {
      "backgroundColor": "#FFFFFF",
      "textColor": "#19303D",
      "borderColor": "#19303D",
      "borderRadius": "4px"
    }
  },
  "fontFamily": "Arial",
  "hideHeaderText": false,
  "logo": {
    "logoImageUrl": ""
  }
}
                            
  return <StytchLogin config={config} styles={styles} />;
}
              
export default Login;
