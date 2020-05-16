interface DefaultResponse {
  body: {
    message: string;
    value: any;
    error?: Error;
  };
  status: number;
}

export { DefaultResponse };
