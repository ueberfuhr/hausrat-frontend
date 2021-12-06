import {Toast, ToastType} from './toast.model';

describe('Toast', () => {
  it('should create an instance', () => {
    expect(new Toast('message', ToastType.SUCCESS)).toBeTruthy();
  });
});
