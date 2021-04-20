import { Router } from 'express';

//Controllers
import { SettingsController } from './controllers/SettingsController';

const routes = Router();


//Settings
const settingsController = new SettingsController();
routes.post("/settings", settingsController.create);

//

export { routes };