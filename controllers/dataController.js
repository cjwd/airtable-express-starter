exports.getAirtableRecords = (table, view, limit = 15) => {
  let records = [];
  return new Promise((resolve, reject) => {
    // Cache results if called already
    if (records.length > 0) {
      resolve(records);
    }

    const processPage = (partialRecords, fetchNextPage) => {
      records = [...records, ...partialRecords];
      fetchNextPage();
    };

    const processRecords = (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(records);
    };

    table.select({
      view,
      pageSize: limit
    }).eachPage(processPage, processRecords);
  });
};
