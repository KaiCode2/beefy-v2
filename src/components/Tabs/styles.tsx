import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  container: {},
  tabs: {
    backgroundColor: theme.palette.background.v2.button,
    borderRadius: 8,
    border: `2px solid ${theme.palette.background.v2.contentLight}`,
    '& .MuiTabs-indicator': {
      display: 'none' as const,
      color: 'transparent',
    },
    '& .MuiTab-root': {
      minWidth: 70,
    },
    '& .MuiTab-textColorPrimary': {
      color: theme.palette.text.disabled,
    },
    '& .Mui-selected': {
      backgroundColor: theme.palette.background.v2.contentLight,
      borderRadius: 4,
      color: theme.palette.text.primary,
      padding: '5px',
    },
  },
  basicTabs: {
    '& .MuiTabs-indicator': {
      display: 'none',
      color: 'transparent',
    },
    '& .MuiTab-root': {
      minWidth: 'fit-content',
      padding: '0 12',
    },
    '& .MuiTab-textColorPrimary': {
      color: theme.palette.text.disabled,
    },
    '& .Mui-selected': {
      color: theme.palette.text.primary,
    },
  },
});
