export interface lCApplicationDTO {
  //Step 1
  lCApplicationDate: string;
  applicantName: string;
  applicantAddress: string;
  beneficiaryName: string;
  beneficiaryPhoneNumber: string;
  beneficiaryAddress: string;
  type: number;
  ussance: number;
  cFR: string;
  sight: boolean;
  location: string;

  //Step 2
  itemsOfImport: string;
  valueInFigures: string;
  valueInWords: string;
  proformaInvoiceNumber: string;
  proformaInvoiceDate: string;
  mFNumber: string;
  bANumber: string;
  validUntil: string;
  latestShipment: string;
  expiryDate: string;

  //Step 3
  hasCCVO: boolean;
  hasCommercialInvoice: boolean;
  hasParkingList: boolean;
  hasManufacturerCertificateOfProduction: boolean;
  laboratoryTestCertificate: boolean;
  beneficiaryIssuedCertificate: boolean;
  oceanBillOfLanding: boolean;
  airwayBillConsigned: string;
  otherDetails: string;

  //Step 4
  dispatchFrom: string;
  dispatchTo: string;
  partialShipment: number;
  transShipment: number;
  overseesBankCharges: number;

  //Step 5
  signature: string;
  stamp: string;
  supportingDocument: string[];
}
