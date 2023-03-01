import { Router } from "express";
import { CreateNewAdsController } from "../../modules/ads/useCases/createNewAds/CreateNewAdsController";
import { GetDisrcordFilterAdsController } from "../../modules/ads/useCases/getDiscordFilterIdAds/GetDiscordFilterAdsController";

const getDiscordFilterAdsController = new GetDisrcordFilterAdsController();
const createNewAdsController = new CreateNewAdsController();

const adsRoutes = Router();

adsRoutes.post("/:id", createNewAdsController.handle);

adsRoutes.get("/:id/discord", getDiscordFilterAdsController.handle);

export { adsRoutes };
