import type { FC } from "react";
import { Outlet } from "react-router";

interface FileTransferLayoutProps {}

const FileTransferLayout: FC<FileTransferLayoutProps> = () => <Outlet />;

export default FileTransferLayout;
