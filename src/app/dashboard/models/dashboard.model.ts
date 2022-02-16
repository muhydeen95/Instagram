export interface Dashboard {
  id: number;
  name: string;
}

export interface UploadDocDTO {
  DocumentType: number;
  SubjectMatter: string;
  Files: Array<any>;
}

export interface DocTypeDTO {
  createdDate: string;
  documentTypeDepartments: Array<{
    departmentId: number;
    departmentName: string;
  }>;
  documentTypeId: number;
  isActive: boolean;
  name: string;
}

export interface DashboardResponseDTO {
  branchesCount: number;
  departmentCount: number;
  positionCount: number;
  regionCount: number;
  unitCount: number;
  usersCount: number;
}
