const routes = [{
    path: '/',
    component: 0,
  }, {
    path: '/Teachers',
    component: 1,
  }, {
    path: '/Teachers/:teacherId',
    component: 2,
  }, {
    path: '/Teachers/:teacherId/Classes',
    component: 3,
  }, /* And so on. */];


  const mapRoutes = routes.map(({path, component}) => path.length - component)
  const mapRoutes1 = routes.map(({path}) => path.length)
  const mapRoutes2 = routes.map(({component}) => component)
  console.log(routes)
  console.log(mapRoutes1)
  console.log(mapRoutes2)
  console.log(mapRoutes)