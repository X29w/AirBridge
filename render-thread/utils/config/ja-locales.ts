const ja = {
  home: {
    navigate: {
      fileTransfer: {
        title: "ファイル転送",
        description: "サーバーへのファイルのアップロードを高速化",
      },
      screenRecord: {
        title: "スクリーン録画",
        description: "画面を録画し、共有",
      },
      screenShot: {
        title: "スクリーンショット",
        description: "画面を撮影し、共有",
      },
      ninjaChat: {
        title: "Ninja Chat",
        description: "Ninja Chat",
      },
    },
    infoBar: {
      title: "転送中",
    },
  },
  fileTransfer: {
    record: {
      title: "ファイル転送記録",
      columns: {
        name: "ファイル情報",
        transfer_detail: "転送詳細",
        status: "状態",
        time: "時間",
        operation: "操作",
      },
    },
  },
} as const;

export default ja;
