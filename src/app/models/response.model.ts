export interface ResponseModel<T> {
  errors: any;
  response: T;
  message: string;
}

export class PaginationResponse<T> {
  pageNumber!: number;
  pageSize!: number;
  previousPage!: number;
  result!: T;
  totalItems!: number;
  totalPages!: number;
}

export interface SearchDTO {
  Search: string;
  PageNumber: number;
  PageSize: number;
  LCApplicationDate?: string;
}

export const InitialSearchDTO = {
  Search: '',
  PageNumber: 1,
  PageSize: 5,
  LCApplicationDate: new Date().toISOString(),
};

export const pageSizeOptionsDTO = [5, 10, 25, 100];
