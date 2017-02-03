import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react-break': '1.1.x'
}, 'wesleyfsmith:bootstrap3-react-break');

import { layoutGenerator } from 'react-break';


const layout = layoutGenerator({
  xs: 0,
  sm: 768,
  md: 992,
  lg: 1200
});

export const XS = layout.is('xs');
export const SM = layout.is('sm');
export const MD = layout.is('md');
export const LG = layout.is('lg');

// export const XSAndLarger = layout.isAtLeast('xs');
export const SMAndLarger = layout.isAtLeast('sm');
export const MDAndLarger = layout.isAtLeast('md');

export const SMAndSmaller = layout.isAtMost('sm');
export const MDAndSmaller = layout.isAtLeast('md');
// export const LGAndSmaller = layout.isAtLeast('lg');
