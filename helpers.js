/*
  This is a file of data and helper functions that we can expose and use in our templates
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');


// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);


// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);

// Some details about the site
exports.siteName = `Airtable Express`;

exports.menu = [
  { slug: '/', title: 'Home', icon: 'home', },
  { slug: '/add', title: 'Add', icon: 'add', },
  { slug: '/login', title: 'Sign In', icon: 'signin', },
  { slug: '/join', title: 'Sign Up', icon: 'signup', },
];
