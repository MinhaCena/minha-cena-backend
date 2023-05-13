export class EmailSendErrorEvent {
  constructor(public readonly to: string, public readonly error: Error) {}
}
