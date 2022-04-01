/**
 * The event type.
 */
export enum ChangeEventType {
    /**
     * The given model object was created.
     */
    Created,
    /**
     * The given model object was deleted.
     */
    Deleted,
    /**
     * The given model object was updated.
     */
    Updated
}

/**
 * An event that is sent by an observable service to indicate model changes.
 * @param T the model type
 */
export interface ChangeEvent<T> {

    /**
     * The model value that is changed.
     */
    value: T;

    /**
     * The event type.
     */
    type: ChangeEventType;
}
