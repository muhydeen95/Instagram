export interface FilterDTO {
  lCApplicationDate: string;
}
export interface DocumentDTO {
  confidentialityLevel: number;
  createdAt: string;
  dateCreated: string;
  documentType: string;
  fileSubmissionId: number;
  files: Array<{
    name: string;
    path: string;
    uniqueName: string;
  }>;
  subject: string;
  treatmentStatusId: string;
}

export interface DocumentSearchDTO {
  CustomerFileSubmissionDate: string;
  Search: string;
  PageNumber: number;
  PageSize: number;
}
export const DefaultDocumentSearchDTO = {
  CustomerFileSubmissionDate: '',
  Search: '',
  PageNumber: 1,
  PageSize: 5,
};

export interface DocumentResponse {
  correspondenceNo: string;
  createdAt: string;
  dateCreated: string;
  documentType: string;
  fileSubmissionId: number;
  subject: string;
  treatmentStatusId: string;
}
export const CustomerTransactionStatus: any = {
  7: 'Untreated',
  10: 'Rejected',
  9: 'Treated',
  8: 'Pending',
  1: 'KeepInView',
  2: 'NeedsAdditionalInfo',
  3: 'PutAway',
};
