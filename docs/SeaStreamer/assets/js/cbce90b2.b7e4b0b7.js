"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[6719],{436:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"0.3.x","label":"0.3.x","banner":null,"badge":true,"noIndex":false,"className":"docs-version-0.3.x","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u7d22\u5f15","href":"/SeaStreamer/docs/index","docId":"index"},{"type":"category","label":"Introduction","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"\u6d41\u5904\u7406\u7b80\u4ecb","href":"/SeaStreamer/docs/introduction/intro-to-streams","docId":"introduction/intro-to-streams"},{"type":"link","label":"Rust \u4e2d\u7684\u5f02\u6b65\u7f16\u7a0b","href":"/SeaStreamer/docs/introduction/async-programming","docId":"introduction/async-programming"},{"type":"link","label":"SeaStreamer \u6982\u5ff5","href":"/SeaStreamer/docs/introduction/sea-streamer","docId":"introduction/sea-streamer"}]},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"\u914d\u7f6e\u7279\u6027","href":"/SeaStreamer/docs/getting-started/configuration","docId":"getting-started/configuration"},{"type":"link","label":"SeaStreamer \u67b6\u6784","href":"/SeaStreamer/docs/getting-started/architecture","docId":"getting-started/architecture"},{"type":"link","label":"\u793a\u4f8b\u5904\u7406\u5668","href":"/SeaStreamer/docs/getting-started/examples","docId":"getting-started/examples"}]},{"type":"category","label":"SeaStreamer Semantics","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Streamer","href":"/SeaStreamer/docs/streamer/streamer","docId":"streamer/streamer"},{"type":"link","label":"Producer","href":"/SeaStreamer/docs/streamer/producer","docId":"streamer/producer"},{"type":"link","label":"Consumer","href":"/SeaStreamer/docs/streamer/consumer","docId":"streamer/consumer"}]},{"type":"category","label":"Connecting Stream Processors","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"\u8fdb\u7a0b\u95f4","href":"/SeaStreamer/docs/processors/inter-process","docId":"processors/inter-process"},{"type":"link","label":"\u8fdb\u7a0b\u5185","href":"/SeaStreamer/docs/processors/intra-process","docId":"processors/intra-process"}]},{"type":"category","label":"What\'s Next?","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"\u8def\u7ebf\u56fe","href":"/SeaStreamer/docs/whats-next/roadmap","docId":"whats-next/roadmap"},{"type":"link","label":"\u613f\u666f","href":"/SeaStreamer/docs/whats-next/vision","docId":"whats-next/vision"}]}]},"docs":{"getting-started/architecture":{"id":"getting-started/architecture","title":"SeaStreamer \u67b6\u6784","description":"sea-streamer \u7684\u67b6\u6784\u7531\u591a\u4e2a\u5b50 crate \u6784\u6210\uff1a","sidebar":"tutorialSidebar"},"getting-started/configuration":{"id":"getting-started/configuration","title":"\u914d\u7f6e\u7279\u6027","description":"Cargo","sidebar":"tutorialSidebar"},"getting-started/examples":{"id":"getting-started/examples","title":"\u793a\u4f8b\u5904\u7406\u5668","description":"\u6211\u4eec\u7ef4\u62a4\u4e86\u4e00\u5957\u793a\u4f8b\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u4f5c\u4e3a\u5f00\u53d1\u6d41\u5904\u7406\u5668\u7684\u8d77\u70b9\u3002","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"\u7d22\u5f15","description":"1. \u4ecb\u7ecd","sidebar":"tutorialSidebar"},"introduction/async-programming":{"id":"introduction/async-programming","title":"Rust \u4e2d\u7684\u5f02\u6b65\u7f16\u7a0b","description":"Rust \u4e2d\u7684\u5f02\u6b65\u7f16\u7a0b\u662f\u4e00\u4e2a\u6700\u8fd1\u53d1\u5c55\u7684\u7279\u6027\uff0c\u4ec5\u5728 Rust 1.39 \u4e2d\u5f97\u5230\u7a33\u5b9a\u3002\u5f02\u6b65\u751f\u6001\u7cfb\u7edf\u6b63\u5728\u8fc5\u901f\u53d1\u5c55\uff0c\u800c SeaStreamer \u662f\u4e00\u4e2a\u7eaf\u5f02\u6b65\u5e93\u3002","sidebar":"tutorialSidebar"},"introduction/intro-to-streams":{"id":"introduction/intro-to-streams","title":"\u6d41\u5904\u7406\u7b80\u4ecb","description":"\\" \u5c06\u6570\u636e\u5e93\u7ffb\u8f6c \\" \u662f\u6570\u636e\u5de5\u7a0b\u9886\u57df\u7684\u4e00\u7bc7\u5177\u6709\u5f71\u54cd\u529b\u7684\u6587\u7ae0\uff0c\u4fc3\u6210\u4e86 Kafka \u7684\u521b\u5efa\u3002\u6b64\u540e\uff0c\u50cf Redpanda \u548c Redis Streams \u8fd9\u6837\u7684\u5b9e\u73b0\u76f8\u7ee7\u51fa\u73b0\uff0c\u63a8\u52a8\u4e86\u5b9e\u65f6\u6570\u636e\u5904\u7406\u751f\u6001\u7cfb\u7edf\u7684\u53d1\u5c55\u3002","sidebar":"tutorialSidebar"},"introduction/sea-streamer":{"id":"introduction/sea-streamer","title":"SeaStreamer \u6982\u5ff5","description":"Streamer","sidebar":"tutorialSidebar"},"processors/inter-process":{"id":"processors/inter-process","title":"\u8fdb\u7a0b\u95f4","description":"SeaStreamer \u9f13\u52b1\u60a8\u7f16\u5199\u5c0f\u578b\u6d41\u5904\u7406\u5668\u5e76\u5c06\u5176\u8fde\u63a5\u5728\u4e00\u8d77\uff0c\u800c\u4e0d\u662f\u5236\u4f5c\u4e00\u4e2a\u529f\u80fd\u7e41\u591a\u7684\u5de8\u578b\u5904\u7406\u5668\u3002","sidebar":"tutorialSidebar"},"processors/intra-process":{"id":"processors/intra-process","title":"\u8fdb\u7a0b\u5185","description":"\u4ee5\u4e0b\u662f\u7ec4\u7ec7\u4e2d\u5230\u5927\u578b\u6d41\u5904\u7406\u9879\u76ee\u7684\u65b9\u5f0f\u3002\u60a8\u6709\u591a\u4e2a crate \u5b9e\u73b0\u4e0d\u540c\u7684\u5904\u7406\u5668\uff0c\u6bcf\u4e2a\u5904\u7406\u5668\u90fd\u4f9d\u8d56\u4e8e sea-streamer \u5de5\u4f5c\u533a\u3002\u73b0\u5728\uff0c\u60a8\u60f3\u6784\u5efa\u4e00\u4e2a\u4e0b\u6e38 crate\uff0c\u5c06\u591a\u4e2a\u5904\u7406\u5668\u8fde\u63a5\u5728\u4e00\u8d77\u8fdb\u884c\u6d4b\u8bd5\u3002","sidebar":"tutorialSidebar"},"streamer/consumer":{"id":"streamer/consumer","title":"Consumer","description":"Consumer \u7279\u6027\u5b9a\u4e49\u4e86\u6d41\u6d88\u8d39\u8005\u7684\u516c\u5171\u63a5\u53e3\u3002","sidebar":"tutorialSidebar"},"streamer/producer":{"id":"streamer/producer","title":"Producer","description":"Producer \u7279\u6027\u5b9a\u4e49\u4e86\u6d41\u751f\u4ea7\u8005\u7684\u516c\u5171\u63a5\u53e3\u3002 Producer \u5b9e\u73b0\u4e86 Clone\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u50cf\u4f7f\u7528 mpsc::Sender \u4e00\u6837\u4f7f\u7528\u5b83\u3002","sidebar":"tutorialSidebar"},"streamer/streamer":{"id":"streamer/streamer","title":"Streamer","description":"Streamer \u7279\u6027\u5b9a\u4e49\u4e86\u6d41\u5ba2\u6237\u7aef\u7684\u901a\u7528\u63a5\u53e3\u3002","sidebar":"tutorialSidebar"},"whats-next/roadmap":{"id":"whats-next/roadmap","title":"\u8def\u7ebf\u56fe","description":"\u611f\u8c22\u60a8\u9605\u8bfb\u5230\u672c\u7ae0\u8282\u7684\u6587\u6863\u3002\u5982\u679c\u60a8\u53d1\u73b0\u8be5\u9879\u76ee\u6709\u8da3\u548c/\u6216\u6709\u7528\uff0c\u8bf7\u7ed9\u6211\u4eec\u7684 GitHub \u4ed3\u5e93 \u70b9\u4e2a\u661f\u5427\uff01\u60a8\u7684\u652f\u6301\u5bf9\u4e8e SeaStreamer \u7684\u6301\u7eed\u5f00\u53d1\u81f3\u5173\u91cd\u8981\u3002","sidebar":"tutorialSidebar"},"whats-next/vision":{"id":"whats-next/vision","title":"\u613f\u666f","description":"\u6211\u4eec\u7684\u76ee\u6807\u662f\u5c06 Rust \u6253\u9020\u6210\u6700\u4f73\u6570\u636e\u5de5\u7a0b\u5e73\u53f0\uff0c\u63d0\u4f9b\u4ece\u5f00\u53d1\u5230\u751f\u4ea7\u7684\u5de5\u5177\u3002","sidebar":"tutorialSidebar"}}}')}}]);