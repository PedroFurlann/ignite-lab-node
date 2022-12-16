import { Notification } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";
interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}
interface SendNotificationReponse {
    notification: Notification;
}
export declare class SendNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: SendNotificationRequest): Promise<SendNotificationReponse>;
}
export {};
