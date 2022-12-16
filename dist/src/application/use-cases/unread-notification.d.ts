import { NotificationsRepository } from "../repositories/notifications-repository";
interface UnreadNotificationRequest {
    notificationId: string;
}
type UnreadNotificationReponse = void;
export declare class UnreadNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: UnreadNotificationRequest): Promise<UnreadNotificationReponse>;
}
export {};
