import React from "react";
import DocumentList from "../../components/dashboard/documents/DocumentList";
import ProfitMargin from "../../components/dashboard/profitMargin/ProfitMargin";
import DocumentsManagement from "../../components/dashboard/documentsManagement/DocumentsManagement";

export default function Dashboard() {
  return (
    <div className="px-[12px] md:px-[40px] pb-20 overflow-x-hidden">
      <DocumentList />
      <ProfitMargin />
      <DocumentsManagement />
    </div>
  );
}
