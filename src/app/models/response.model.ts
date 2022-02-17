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
  search: string;
  pageNumber: number;
  pageSize: number;
  lCApplicationDate?: string;
}

export const InitialSearchDTO = {
  search: '',
  pageNumber: 1,
  pageSize: 5,
  lCApplicationDate: '',
};

export const pageSizeOptionsDTO = [5, 10, 25, 100];
