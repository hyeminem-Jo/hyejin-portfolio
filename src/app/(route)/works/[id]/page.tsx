import { Metadata } from "next";
import WorkContainer from "@/app/_modules/work/work-container/WorkContainer";

export const metadata: Metadata = {
  title: "Hyejin's Portfolio | Works",
  description: "Works 상세 페이지입니다",
};

const WorksPage = () => {
  return (
    <div>
      <WorkContainer />
    </div>
  );
};

export default WorksPage;