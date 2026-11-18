/* ============================================================
   catalog.js — 實驗互動講義清單
   由 deploy_lab_pages.command 或 admin.html 維護。
   window.CATALOG 之後必須是嚴格 JSON（鍵加引號、無註解）。
   ============================================================ */
window.CATALOG = {
  "meta": {
    "title": "實驗操作互動講義",
    "subtitle": "各實驗的原理、虛擬操作流程與數據分析練習。點按表頭可排序。",
    "updated": "2026-11-18"
  },
  "columns": [
    {
      "key": "cell",
      "label": "細胞株",
      "sortable": true,
      "visible": true,
      "group": true
    },
    {
      "key": "topic",
      "label": "實驗主題 / 量測指標",
      "sortable": true,
      "visible": true
    },
    {
      "key": "stimulus",
      "label": "刺激方式",
      "sortable": true,
      "visible": true
    },
    {
      "key": "version",
      "label": "版號",
      "sortable": true,
      "visible": true,
      "align": "right"
    },
    {
      "key": "updated",
      "label": "更新日期",
      "sortable": true,
      "visible": true,
      "align": "right"
    }
  ],
  "entries": [
    {
      "id": "L001",
      "status": "active",
      "file": "RAW 264.7 LPS 誘導 NO (Griess 法) 實驗互動講義 v1.html",
      "title": "LPS 誘導 NO 生成（Griess 法）",
      "cell": "RAW 264.7",
      "topic": "NO（Griess 法）",
      "stimulus": "LPS",
      "version": "v1",
      "updated": "2026-11-11",
      "superseded": []
    },
    {
      "id": "L002",
      "status": "active",
      "file": "RAW 264.7 LPS 誘導 ROS 實驗互動講義 v2.html",
      "title": "LPS 誘導 ROS 生成",
      "cell": "RAW 264.7",
      "topic": "ROS",
      "stimulus": "LPS",
      "version": "v2",
      "updated": "2026-11-11",
      "superseded": [
        {
          "file": "RAW 264.7 LPS 誘導 ROS 實驗互動講義 v1.html",
          "version": "v1",
          "updated": "2026-11-11"
        }
      ]
    },
    {
      "id": "L003",
      "status": "active",
      "file": "β-Hexosaminidase 脫顆粒實驗模擬 (肥大細胞 RBL-2H3) v3.html",
      "title": "β-Hexosaminidase 脫顆粒實驗模擬",
      "cell": "RBL-2H3",
      "topic": "β-hexosaminidase 脫顆粒",
      "stimulus": "IgE / DNP-BSA",
      "version": "v3",
      "updated": "2026-11-17",
      "superseded": [
        {
          "file": "β-Hexosaminidase 脫顆粒實驗模擬 (肥大細胞RBL-2H3) v2.html",
          "version": "v2",
          "updated": "2026-11-11"
        },
        {
          "file": "β-Hexosaminidase 脫顆粒實驗模擬 (肥大細胞RBL-2H3) v1.html",
          "version": "v1",
          "updated": "2026-11-10"
        }
      ]
    },
    {
      "id": "L004",
      "status": "active",
      "file": "β-Hexosaminidase 脫顆粒實驗模擬 (A23187 + PMA 誘導, RBL-2H3) v1.html",
      "title": "β-Hexosaminidase 脫顆粒實驗模擬（A23187 + PMA）",
      "cell": "RBL-2H3",
      "topic": "β-hexosaminidase 脫顆粒",
      "stimulus": "A23187 + PMA",
      "version": "v1",
      "updated": "2026-11-17",
      "superseded": []
    },
    {
      "id": "L005",
      "status": "active",
      "file": "DCFDA 量測前處理抑制 ROS (RAW 264.7 與 RBL-2H3) v1.html",
      "title": "",
      "cell": [
        "RAW 264.7",
        "RBL-2H3"
      ],
      "topic": "ROS 抑制（DCFDA；螢光顯微鏡＋流式）",
      "stimulus": "LPS／IgE＋抗原",
      "version": "v1",
      "updated": "2026-11-17",
      "superseded": []
    }
  ]
};
