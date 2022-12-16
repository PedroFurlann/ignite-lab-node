import { NotificationsRepository } from "../repositories/notifications-repository";
interface CountRecipientNotificationsRequest {
    recipientId: string;
}
interface CountRecipientNotificationsReponse {
    count: number;
}
export declare class CountRecipientNotifications {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: CountRecipientNotificationsRequest): Promise<CountRecipientNotificationsReponse>;
}
export {};
