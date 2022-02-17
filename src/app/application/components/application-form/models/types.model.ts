export interface LCType {
  name: string;
  id: number;
}

export interface LCApplicationDTO {
  applicantName: string;
  beneficiaryName: string;
  dateSubmitted: string;
  expiryDate: string;
  lcApplicationId: number;
  files: Array<{
    stamp: {
      name: string;
      path: string;
      uniqueName: string;
    };
    signature: {
      name: string;
      path: string;
      uniqueName: string;
    };
    supportingDocuments: {
      name: string;
      path: string;
      uniqueName: string;
    };
  }>;
  valueInFigure: string;
}
