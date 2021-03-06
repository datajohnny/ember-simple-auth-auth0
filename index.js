/* jshint node: true */
'use strict';
// var writeFile = require('broccoli-file-creator');
// var version = require('./package.json').version;
// var version = require('./bower.json').dependencies['auth0.js'];

module.exports = {
  name: 'ember-simple-auth-auth0',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/auth0-lock/build/lock.js');
    app.import(app.bowerDirectory + '/auth0-lock-passwordless/build/lock-passwordless.js');
    app.import(app.bowerDirectory + '/auth0.js/build/auth0.js');

    app.import('vendor/lock.js', {
      exports: {
        'auth0-lock': ['default']
      }
    });

    app.import('vendor/lock-passwordless.js', {
      exports: {
        'auth0-lock-passwordless': ['default']
      }
    });

    app.import('vendor/auth0.js', {
      exports: {
        'auth0': ['default']
      }
    });

    // this.import('vendor/ember-simple-auth/register-version.js');
  },

  // treeForVendor: function() {
  //   var emberSimpleAuthAuth0 = 'Ember.libraries.register(\'Ember Simple Auth Auth0\', \'' + version + '\');\n';
  //   var auth0 = 'Ember.libraries.register(\'Auth0.js\', \'' + version + '\');\n';
  //   var lock = 'Ember.libraries.register(\'Auth0 Lock\', \'' + version + '\');\n';
  //   var passwordlessLock = 'Ember.libraries.register(\'Auth0 Lock Passwordless\', \'' + version + '\');\n';
  //   return writeFile('ember-simple-auth/register-version.js', content);
  // },
};
