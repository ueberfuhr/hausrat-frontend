export enum ToastType {
  SUCCESS, DANGER, WARNING, INFO
}

export class Toast {

  constructor(
    public message: string,
    public type: ToastType = ToastType.INFO,
    public header?: string
  ) {
  }

}
