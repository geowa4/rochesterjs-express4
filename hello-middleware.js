module.exports = function (req, res, next) {
  console.log('foo')
  if (req.query.id === 'pete') {
    req.user = {
      id: 'pete',
      name: 'Pete',
      memberships: [
        'RochesterJS'
      ]
    }
  }
  else {
    req.user = {
      id: 'anon',
      name: 'Anonymous',
      memberships: []
    }
  }
  next()
}
