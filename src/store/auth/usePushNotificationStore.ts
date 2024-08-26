import { create } from "zustand";

interface PushNotification {
    pushNotificationToken:string|null;
    setPushNotificationToken: (state:string) => void;
}

export const usePushNotificationStore = create<PushNotification>((set) => ({
    pushNotificationToken : null,
    setPushNotificationToken: (state:string) => set({
        pushNotificationToken : state
    })
}));