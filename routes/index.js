module.exports = (app, passport) => {
  require('./facultyRoutes')(app);
  require('./programStudyRoutes')(app);
  require('./studentRoutes')(app);
  require('./loginRoutes')(app, passport);
  require('./registerRoutes')(app);
}