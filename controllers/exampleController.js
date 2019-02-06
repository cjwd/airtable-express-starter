const Airtable = require('airtable');
const data = require('./dataController.js');

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

/**
 * THE FOLLWING IS JUST AN EXAMPLE
 */
const TABLE = base('users'),
      VIEW = 'Grid view',
      LIMIT = 24;

const getUsers = async (page) => {
  records = [];
  const users = await data.getAirtableRecords(TABLE, VIEW, LIMIT);

  const COUNT = users.length,
        PAGES = Math.ceil(COUNT / LIMIT),
        OFFSET = (page * LIMIT) - LIMIT;

  return users.map( user => {
    return {
      id: user.getId(),
      name: user.get('name'),
      qty: user.get('qty_in_stock'),
      pages: PAGES
    }
  }).slice(OFFSET, LIMIT*page);
}

exports.getIndex = (req, res) => {
  res.render('index', { title: 'Home' });
}

exports.displayUsers = async (req, res) => {
  let page = req.params.page || req.query.page || 1;
  getUsers(page).then( users => {
    res.render('index', { users, page, count: users.length });
  });
}