const en = {
  home: {
    navigate: {
      fileTransfer: {
        title: "File Transfer",
        description: "Upload files to server quickly",
      },
      screenRecord: {
        title: "Screen Record",
        description: "Record screen and share",
      },
      screenShot: {
        title: "Screen Shot",
        description: "Take a screenshot and share",
      },
      ninjaChat: {
        title: "Ninja Chat",
        description: "Ninja Chat",
      },
    },
    infoBar: {
      title: "Transferring",
    },
  },
  fileTransfer: {
    record: {
      title: "File Transfer Record",
      columns: {
        name: "File Info",
        transfer_detail: "Transfer Detail",
        status: "Status",
        time: "Time",
        operation: "Operation",
      },
    },
    main: {
      title: "File Transfer",
      upload_title: "Click or drag file to this area to upload",
      upload_hint:
        "Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.",
      target_device_title: "Select Target Device",
      more_device_title: "More Devices",
    },
  },
  settings: {
    general: {
      language: "Language",
      chooseLanguage: "Choose Language",
      localNickName: "Local Nickname",
    },
  },
} as const;

export default en;
