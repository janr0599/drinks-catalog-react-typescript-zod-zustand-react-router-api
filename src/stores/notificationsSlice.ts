import { StateCreator } from "zustand";

type Notification = {
    text: string;
    error: boolean;
    show: boolean;
};

export type NotificationsSliceType = {
    notification: Notification;
};

export const createNotificationsSlice: StateCreator<NotificationsSliceType> = (
    set,
    get
) => ({
    notification: {
        text: "",
        error: false,
        show: false,
    },
});
