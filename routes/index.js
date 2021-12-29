module.exports = app => {
  require('./facultyRoutes')(app);
  require('./programStudyRoutes')(app);
}