const secret = require("./secret");

module.exports = {
  base: "/Notes/",
  title: "啪啪啪的指针",
  dest: "docs",
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: timestamp => {
          const moment = require("moment");
          moment.locale("zh-CN");
          return moment(timestamp).fromNow();
        }
      }
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: secret.ga
      }
    ],
    ["@vuepress/nprogress"]
  ],
  themeConfig: {
    serviceWorker: {
      updatePopup: true
    },
    locales: {
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        sidebar: {
          "/java/": javaSider("New一个对象"),
          "/open/": openSider(),
          "/sharp/": sharpSider(),
          "/web/": webSider(),
          "/notes/": notesSider()
        },
        nav: [
          {
            text: "首页",
            link: "/"
          },
          {
            text: "Java",
            link: "/java/"
          },
          {
            text: "好工具",
            link: "/open/"
          },
          {
            text: "利器",
            link: "/sharp/"
          },
          {
            text: "前端 | APP",
            link: "/web/"
          },
          {
            text: "杂七杂八",
            items: [
              {
                text: "要多杂有多杂",
                items: [
                  { text: "常用配置", link: "/notes/setting.html" },
                  { text: "Shell", link: "/notes/shell.html" },
                  { text: "其它", link: "/notes/other.html" }
                ]
              },
              {
                text: "我的破烂~",
                items: [{ text: "好东西啊", link: "/notes/xianyu.html" }]
              }
            ]
          },
          { text: "GitHub", link: "https://github.com/boot-vue" }
        ]
      }
    }
  }
};

//侧边栏
function javaSider(title) {
  return [
    {
      title,
      collapsable: false,
      children: ["", "cloud", "security"]
    }
  ];
}

function notesSider() {
  return ["setting", "shell", "other", "xianyu"];
}

function webSider() {
  return ["", "vue", "socketio"];
}

function openSider() {
  return ["", "mycat", "redisson"];
}

function sharpSider() {
  return ["", "netty", "elk", "rocket", "zookeeper", "kafka"];
}
