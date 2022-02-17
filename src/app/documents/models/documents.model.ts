export interface FilterDTO {
  lCApplicationDate: string;
}
export interface DocumentDTO {
  DocumentType: number;
  SubjectMatter: string;
  Files: Array<any>;
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
