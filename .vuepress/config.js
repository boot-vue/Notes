const secret = require("./secret");

module.exports = {
  base: "/Notes/",
  title: "啪啪啪的指针",
  dest: "docs",
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp) => {
          const moment = require("moment");
          moment.locale("zh-CN");
          return moment(timestamp).fromNow();
        },
      },
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: secret.ga,
      },
    ],
    ["@vuepress/nprogress"],
  ],
  themeConfig: {
    serviceWorker: {
      updatePopup: true,
    },
    locales: {
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        sidebar: {
          "/java/": javaSider("New一个对象"),
          "/go/": goSider("好大一只土拨鼠"),
          "/python/": pythonSider("好大一条蛇"),
          "/hadoop/": hadoopSider(),
          "/open/": openSider(),
          "/sharp/": sharpSider(),
          "/web/": webSider(),
          "/notes/": notesSider(),
        },
        nav: [
          {
            text: "首页",
            link: "/",
          },
          {
            text: "Java",
            link: "/java/",
          },
          {
            text: "Hadoop",
            link: "/hadoop/",
          },
          {
            text: "Go",
            link: "/go/",
          },
          {
            text: "Python",
            link: "/python/",
          },
          {
            text: "好工具",
            link: "/open/",
          },
          {
            text: "利器",
            link: "/sharp/",
          },
          {
            text: "前端 | APP",
            link: "/web/",
          },
          {
            text: "杂七杂八",
            items: [
              {
                text: "要多杂有多杂",
                items: [
                  { text: "常用配置", link: "/notes/setting.html" },
                  { text: "Shell", link: "/notes/shell.html" },
                  { text: "Linux", link: "/notes/linux.html" },
                  { text: "其它", link: "/notes/other.html" },
                ],
              },
              {
                text: "我的破烂~",
                items: [{ text: "好东西啊", link: "/notes/xianyu.html" }],
              },
            ],
          },
          { text: "GitHub", link: "https://github.com/boot-vue" },
        ],
      },
    },
  },
};

//侧边栏
function javaSider(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        "",
        "guava",
        "kotlin",
        "gradle",
        "flowable",
        "dubbo",
        "cloud",
        "security",
      ],
    },
  ];
}

function goSider(title) {
  return [
    {
      title,
      collapsable: false,
      children: [""],
    },
  ];
}

function pythonSider(title) {
  return [
    {
      title,
      collapsable: false,
      children: [""],
    },
  ];
}

function notesSider() {
  return ["setting", "shell", "linux", "nginx", "pass", "other", "xianyu"];
}

function webSider() {
  return ["", "typescript", "webpack", "vue", "socketio", "flutter"];
}

function openSider() {
  return ["", "mysql", "redis", "kong"];
}

function hadoopSider() {
  return ["", "hadoop", "hdfs", "mapreduce"];
}

function sharpSider() {
  return ["", "netty", "elk", "proxy", "rocket", "zookeeper", "kafka"];
}
