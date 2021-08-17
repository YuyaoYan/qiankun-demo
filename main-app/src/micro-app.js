export const microApps = [
  {
    name: "micro-app",
    entry: "//localhost:4001",
    activeRule: "/#/sub/micro-app",
    container: "#subapp-viewport"
  },
  {
    name: "sub-app",
    entry: "//localhost:4002",
    activeRule: "/#/sub/sub-app",
    container: "#subapp-viewport"
  }
];
export const inpageMicroApp = [
  {
    name: "micro-app-inpage",
    entry: "//localhost:4011",
    activeRule: "/#/main/inpage",
    container: "#microapp-inpage-viewport"
  },
  {
    name: "sub-app-inpage",
    entry: "//localhost:4012",
    activeRule: "/#/main/inpage",
    container: "#subapp-inpage-viewport"
  }
];
// const apps = microApps.map(item => {
//   return {
//     ...item,
//     container: "#subapp-viewport", // 子应用挂载的div
//     props: {
//       routerBase: item.activeRule // 下发基础路由
//     }
//   };
// });
export const apps = microApps.concat(inpageMicroApp);
export default microApps;
