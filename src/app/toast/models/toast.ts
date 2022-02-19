import {ToastType} from './toast-type';

/**
 * Toasts provide feedback messages as notifications to the user.
 * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
 */
export interface Toast {

    /**
     * The header of the toast.
     */
    header?: string;
    /**
     * The message that has to be shown.
     */
    message: string;
    /**
     * The type of the toast. If not specified, ToastType.INFO is used.
     */
    type?: ToastType;

}
