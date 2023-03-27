import { BackstageOverrides } from '@backstage/core-components';
import { BackstageOverrides as CatalogReactOverrides } from '@backstage/plugin-catalog-react';
import { BackstageTheme, createTheme, genPageTheme, lightTheme, shapes} from '@backstage/theme';

import { AutocompleteClassKey } from '@material-ui/lab/Autocomplete';
import { AlertClassKey } from '@material-ui/lab/Alert';

// Labs types not included in overrides; https://github.com/mui/material-ui/issues/19427
declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey {
    MuiAlert: AlertClassKey;
    MuiAutocomplete: AutocompleteClassKey;
  }
}

const baseTheme = createTheme({
  palette: {
    ...lightTheme.palette,
    primary: {
      main: '#1F40E6',
      light: '#000000',
      dark: '#172B4D',
    },
    secondary: {
      main: '#1F40E6',
      light: '#000000',
      dark: '#6554C0',
    },
    grey: {
      50: '#C1C7D0',
      100: '#7A869A',
      200: '#6B778C',
      300: '#5E6C84',
      400: '#505F79',
      500: '#42526E',
      600: '#344563',
      700: '#253858',
      800: '#172B4D',
      900: '#091E42',
    },
    error: {
      main: '#FF5630',
      light: '#FF8F73',
      dark: '#DE350B',
    },
    warning: {
      main: '#FFAB00',
      light: '#FFE380',
      dark: '#FF8B00',
    },
    success: {
      main: '#36B37E',
      light: '#79F2C0',
      dark: '#006644',
    },
    info: {
      main: '#0065FF',
      light: '#4C9AFF',
      dark: '#0747A6',
    },
    navigation: {
      ...lightTheme.palette.navigation,
      background: '#FFFFFF',
      color: '#000000',
      indicator: '#1F40E6',
      selectedColor: '#1F40E6',
      navItem: {
        hoverBackground: 'rgba(230,230,230,0.6)',
      },
    },
    text: {
      primary: '#000000',
    },
    background: {
      default: '#F8F8F8',
      paper: '#F0F0F0',
    },
  },

  fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
  defaultPageTheme: 'home',

  pageTheme: {
    home: genPageTheme({colors: ['#FFFFFF', '#FFFFFF'], shape: shapes.round}),
    documentation: genPageTheme({colors: ['#FFFFFF', '#FFFFFF'], shape: shapes.round}),
    tool: genPageTheme({colors: ['#FFFFFF', '#FFFFFF'], shape: shapes.round}),
    service: genPageTheme({colors: ['#FFFFFF', '#FFFFFF'], shape: shapes.round}),
    website: genPageTheme({colors: ['#FFFFFF', '#FFFFFF'], shape: shapes.round}),
    library: genPageTheme({colors: ['#FFFFFF', '#FFFFFF'], shape: shapes.round}),
    other: genPageTheme({colors: ['#FFFFFF', '#FFFFFF'], shape: shapes.round}),
    app: genPageTheme({colors: ['#FFFFFF', '#FFFFFF'], shape: shapes.round}),
    apis: genPageTheme({colors: ['#FFFFFF', '#FFFFFF'], shape: shapes.round}),
    card: genPageTheme({colors: ['#FFFFFF','#FFFFFF'], shape: shapes.round}),
  },
});

type CustomValues = {
  SignInPageBackground: string
}

const createCustomThemeOverrides = (
  theme: BackstageTheme,
): BackstageOverrides & CatalogReactOverrides & {
  CustomValues?: CustomValues
}  => {
  return {
    BackstageHeader: {
      header: {
        boxShadow: theme.shadows[4],
        paddingBottom: theme.spacing(3),
      },
      title: {
        color: '#000000',
        fontWeight: 800,
      },
      subtitle: {
        color: '#000000',
      },
      type: {
        color: '#000000',
      },
    },
    BackstageHeaderTabs: {
      defaultTab: {
        fontSize: 'inherit',
        textTransform: 'none',
      },
    },
    BackstageHeaderLabel: {
      label: {
        color: '#000000',
      },
      value: {
        color: '#000000',
      }
    },
    BackstageItemCardHeader: {
      root: {
        color: '#000000',
      }
    },
    BackstageOpenedDropdown: {
      icon: {
        '& path': {
          fill: '#F0F0F0',
        },
      },
    },
    BackstageTable: {
      root: {
        '&> :first-child': {
          borderBottom: '1px solid #D5D5D5',
          boxShadow: 'none',
        },
        '& th': {
          borderTop: 'none',
          textTransform: 'none !important',
        },
      },
    },
    BackstageTableHeader: {
      header: {
        color: '#000000',
      }
    },
    CatalogReactUserListPicker: {
      title: {
        textTransform: 'none',
      },
      root: {
        backgroundColor: '#F0F0F0',
        boxShadow: 'none',
        margin: theme.spacing(1, 0, 1, 0),
      },
    },
    MuiAlert: {
      root: {
        borderRadius: 0,
      },
      standardError: {
        color: '#FFFFFF',
        backgroundColor: theme.palette.error.dark,
        '& $icon': {
          color: '#FFFFFF',
        },
      },
      standardInfo: {
        color: '#FFFFFF',
        backgroundColor: theme.palette.primary.dark,
        '& $icon': {
          color: '#FFFFFF',
        },
      },
      standardSuccess: {
        color: '#FFFFFF',
        backgroundColor: theme.palette.success.dark,
        '& $icon': {
          color: '#FFFFFF',
        },
      },
      standardWarning: {
        color: theme.palette.grey[700],
        backgroundColor: theme.palette.secondary.light,
        '& $icon': {
          color: theme.palette.grey[700],
        },
      },
    },
    MuiAutocomplete: {
      root: {
        '&[aria-expanded=true]': {
          backgroundColor: '#F0F0F0',
          color: '#000000',
        },
        '&[aria-expanded=true] path': {
          fill: '#F0F0F0',
        },
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(9,30,69,0.54)',
      },
    },
    MuiIconButton: {
      label: {
        color: '#000000',
      }
    },
    MuiButton: {
      root: {
        borderRadius: 3,
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
      },
    },
    MuiChip: {
      root: {
        borderRadius: 3,
        backgroundColor: theme.palette.grey[50],
        color: theme.palette.primary.dark,
        margin: 4,
      },
    },
    MuiSelect: {
      root: {
        '&[aria-expanded]': {
          backgroundColor: '#F0F0F0',
          color: '#000000',
        },
      },
    },
    MuiSwitch: {
      root: {
        padding: 10,
      },
      switchBase: {
        padding: 12,
      },
      thumb: {
        backgroundColor: '#FFFFFF',
        height: 14,
        width: 14,
      },
      track: {
        borderRadius: 9,
      },
    },
    MuiTabs: {
      indicator: {
        transition: 'none',
      },
    },
    MuiTypography: {
      button: {
        textTransform: 'none',
      },
    },
  };
};

export const mckinseyTheme: BackstageTheme = {
  ...baseTheme,
  overrides: {
    ...baseTheme.overrides,
    ...createCustomThemeOverrides(baseTheme),
  },
};
