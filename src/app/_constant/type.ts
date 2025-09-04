export interface Company {
  name: string;
  companyLogo: string;
  companyPeriod: string;
  projectList: Project[];
}

export interface Project {
  id: number;
  projectName: string;
  projectDesc: string;
  projectDescDetail?: string;
  projectPeriod: string;
  skillList: string[];
  projectWorkList?: string[];
  projectLink?: string;
  projectThumbnail: string;
  projectContribution?: string;
  projectRole?: string;
  projectDevice?: string;
  projectProcess?: string;
  projectImgList?: string[];
  projectProblemSolving?: ProblemSolving[];
  projectMainFunction?: MainFunction[];
  projectReview?: string;
}

export interface ProblemSolving {
  title: string;
  problem: string;
  solving: string;
  blogLink?: string;
}

export interface MainFunction {
  page: string;
  desc?: FunctionDesc[];
}

export interface FunctionDesc {
  mainDesc: string;
  subDesc?: string[];
  pageLink?: string;
}

export type CompanyList = Company[];
