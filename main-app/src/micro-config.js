const config = {
  beforeLoad: [
    app => {
      console.log(
        "%c before load ",
        "background:#A0522D ; padding: 1px; border-radius: 3px;  color: #fff",
        app.name
      );
    }
  ], // 挂载前回调
  beforeMount: [
    app => {
      console.log(
        "%c before mount ",
        "background:#32CD32 ; padding: 1px; border-radius: 3px;  color: #fff",
        app.name
      );
    }
  ], // 挂载后回调
  afterMount: [
    app => {
      console.log(
        "%c after mount ",
        "background:#006400 ; padding: 1px; border-radius: 3px;  color: #fff",
        app.name
      );
    }
  ],
  beforeUnmount: [
    app => {
      console.log(
        "%c before unmount ",
        "background:#C71585 ; padding: 1px; border-radius: 3px;  color: #fff",
        app.name
      );
    }
  ],
  afterUnmount: [
    app => {
      console.log(
        "%c after unload ",
        "background:#800080 ; padding: 1px; border-radius: 3px;  color: #fff",
        app.name
      );
    }
  ] // 卸载后回调
};

export default config;
