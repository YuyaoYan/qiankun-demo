const microApps = [
  {
    name: "micro-app",
    entry: '//localhost:4001',
    // entry: process.env.VUE_APP_MICRO_APP,
    activeRule: "/microapp"
  },
  {
    name: "sub-app",
    entry: '//localhost:4002',
    activeRule: "/subapp"
  }
];

const apps = microApps.map(item => {
  return {
    ...item,
    container: "#subapp-viewport", // 子应用挂载的div
    props: {
      routerBase: item.activeRule // 下发基础路由
    }
  };
});

export default apps;
