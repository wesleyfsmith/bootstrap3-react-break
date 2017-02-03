Package.describe({
  name: 'wesleyfsmith:bootstrap3-react-break',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'React components for more intuitive responsive breakpoints.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/wesleyfsmith/bootstrap3-react-break',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('tmeasday:check-npm-versions@0.3.1');
  api.mainModule('bootstrap3-breakpoints.js');
});
