export interface LCType {
  name: string;
  id: number;
}

export interface LCApplicationDTO {
  Id: string;
  LCApplicationId: number;
  LCApplicationDate: string;
  ApplicantName: string;
  ApplicantAddress: string;
  BeneficiaryName: string;
  BeneficiaryPhoneNumber: string;
  BeneficiaryAddress: string;
  Type: number;
  Ussance: number;
  CFR: string;
  Sight: boolean;
  Location: string;
  ItemsOfImport: string;
  ValueInFigures: string;
  ValueInWords: string;
  ProformaInvoiceNumber: string;
  ProformaInvoiceDate: string;
  MFNumber: string;
  BANumber: string;
  ValidUntil: string;
  LatestShipment: string;
  ExpiryDate: string;
  AirwayBillConsigned: string;
  OtherDetails: string;
  DispatchFrom: string;
  DispatchTo: string;
  PartialShipment: Array<any>;
  TransShipment: Array<any>;
  OverseesBankCharges: Array<any>;
  HasCCVO: boolean;
  HasCommercialInvoice: boolean;
  HasParkingList: boolean;
  HasManufacturerCertificateOfProduction: boolean;
  LaboratoryTestCertificate: boolean;
  BeneficiaryIssuedCertificate: boolean;
  OceanBillOfLanding: boolean;
  Files: Array<any>;
  CreatedAt: string;
  UpdatedAt: string;
  Deleted: boolean;
  CreatedByUserId: number;
  TreatmentStatusId: number;
  TreaterUserId: number;
  nullable: boolean;
}
