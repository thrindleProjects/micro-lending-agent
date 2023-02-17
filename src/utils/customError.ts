export default class AmaliError extends Error {
  constructor(message: string, error?: string) {
    super(message);
    this.name = 'Amali Error';
    this.message = message;
    this.cause = error;
  }
}
