import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

// Controllers are responsible for handling incoming requests and returning responses to the client.
// The routing mechanism controls which controller receives which requests.
@Controller()
export class authController {
  // Inject the AuthService into the constructor, nestjs will create by itself
  constructor(private authService: AuthService) {
    this.authService.test();
  }
}
