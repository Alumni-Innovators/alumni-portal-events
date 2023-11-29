import { NestFactory } from '@nestjs/core';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { EventsModule } from './events/events.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EventsModule,
    {
      // Explore
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
