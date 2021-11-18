export interface Dashboard {
  id: number;
  name: string;
}

export interface UploadDocDTO {
  type: number;
  subject: string;
  file: string;
}

export interface DashboardResponseDTO {
  branchesCount: number;
  departmentCount: number;
  positionCount: number;
  regionCount: number;
  unitCount: number;
  usersCount: number;
}
