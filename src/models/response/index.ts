export type ISuccessResponse<T> = {
  success: true;
  code: number;
  result: T;
};
export type IErrorResponse = {
  success: false;
  error: string;
  code: number;
  ailaliaErrorCode: string;
};

export type IAilaliaResponse<T> = ISuccessResponse<T> | IErrorResponse;
