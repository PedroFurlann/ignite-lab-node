import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy { 
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['content-maggot-8151-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'Y29udGVudC1tYWdnb3QtODE1MSRh4dtL5C8nW7HaTgXnFdrt0Sv8FWEUnzXNg5c',
          password: '7wpg742xpDN3rFzYx29lBI5wKZJ_iXb4p28eYRyprudiiDstbsjsiXtppUB81V9cdeikfQ==',
        },
        ssl: true,
      }
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
  
}