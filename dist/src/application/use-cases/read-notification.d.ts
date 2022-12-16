import { NotificationsRepository } from "../repositories/notifications-repository";
interface ReadNotificationRequest {
    notificationId: string;
}
type ReadNotificationReponse = void;
export declare class ReadNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: ReadNotificationRequest): Promise<ReadNotificationReponse>;
}
export {};
