import { useState, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  PauseCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Div } from "@render/components/common/basic-tag";
import GoBack from "@render/components/common/go-back";

interface TransferZoneProps {}

type TransferStatus = "processing" | "success" | "failed" | "paused";

interface TransferFile {
  id: string;
  name: string;
  status: TransferStatus;
  progress?: number; // 0-100
}

const initialFiles: TransferFile[] = [
  { id: "1", name: "document.pdf", status: "processing", progress: 60 },
  { id: "2", name: "image.jpg", status: "paused" },
  { id: "3", name: "report.docx", status: "failed" },
];

// 状态样式映射
const statusColorMap: Record<TransferStatus, string> = {
  processing: "bg-blue-50 text-blue-700",
  success: "bg-green-50 text-green-700",
  failed: "bg-red-50 text-red-700",
  paused: "bg-yellow-50 text-yellow-700",
};

const statusIconMap: Record<TransferStatus, React.ReactNode> = {
  processing: <LoadingOutlined className="animate-spin" />,
  success: <CheckCircleOutlined />,
  failed: <CloseCircleOutlined />,
  paused: <PauseCircleOutlined />,
};

const TransferZone: FC<TransferZoneProps> = () => {
  const [files, setFiles] = useState<TransferFile[]>(initialFiles);

  const updateFileStatus = (id: string, newStatus: TransferStatus) => {
    setFiles((prev) =>
      prev.map((file) =>
        file.id === id ? { ...file, status: newStatus } : file
      )
    );
  };

  const moveToEnd = (id: string) => {
    setFiles((prev) => {
      const file = prev.find((f) => f.id === id);
      if (!file) return prev;

      const others = prev.filter((f) => f.id !== id);
      return [...others, file];
    });
  };

  const moveToTop = (id: string) => {
    setFiles((prev) => {
      const file = prev.find((f) => f.id === id);
      if (!file) return prev;

      const others = prev.filter((f) => f.id !== id);
      return [file, ...others];
    });
  };

  const handleStatusChange = (
    file: TransferFile,
    newStatus: TransferStatus
  ) => {
    if (file.status === "processing" && newStatus === "success") {
      moveToEnd(file.id);
    } else if (
      (file.status === "failed" || file.status === "paused") &&
      newStatus === "processing"
    ) {
      moveToTop(file.id);
    }

    updateFileStatus(file.id, newStatus);
  };

  return (
    <Div className="w-full h-full p-8 bg-[#f9fafb]">
      <GoBack to={"/home"} title="Transfer Zone" />
      <motion.div
        layout
        className="w-full mt-8 p-4 bg-white rounded-2xl shadow-md"
      >
        <Div className="space-y-2">
          <AnimatePresence mode="popLayout">
            {files.map((file) => (
              <motion.div
                key={file.id}
                layout
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: file.status === "success" ? 100 : -100,
                  transition: { duration: 0.3 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`flex items-center justify-between p-4 rounded-lg mb-2 ${
                  statusColorMap[file.status]
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span>{statusIconMap[file.status]}</span>
                  <span className="font-medium">{file.name}</span>
                </div>

                <div className="flex items-center space-x-2">
                  {file.status === "processing" && (
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${file.progress}%` }}
                      ></div>
                    </div>
                  )}
                  <div className="space-x-1">
                    <button
                      className="text-xs px-2 py-1 bg-blue-100 hover:bg-blue-200 rounded"
                      onClick={() => handleStatusChange(file, "processing")}
                    >
                      Resume
                    </button>
                    <button
                      className="text-xs px-2 py-1 bg-green-100 hover:bg-green-200 rounded"
                      onClick={() => handleStatusChange(file, "success")}
                    >
                      Success
                    </button>
                    <button
                      className="text-xs px-2 py-1 bg-red-100 hover:bg-red-200 rounded"
                      onClick={() => handleStatusChange(file, "failed")}
                    >
                      Fail
                    </button>
                    <button
                      className="text-xs px-2 py-1 bg-yellow-100 hover:bg-yellow-200 rounded"
                      onClick={() => handleStatusChange(file, "paused")}
                    >
                      Pause
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </Div>
      </motion.div>
    </Div>
  );
};

export default TransferZone;
