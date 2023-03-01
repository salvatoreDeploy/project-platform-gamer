import { Router } from "express";
import { ShowAdsFilterGameController } from "../../modules/games/useCases/showAdsFilterGames/ShowAdsFilterGameControllor";
import ShowGamesCountAdsController from "../../modules/games/useCases/showGamesCountAds/ShowGamesCountAdsController";

const showGamesCountAdsController = new ShowGamesCountAdsController();
const showAdsFilterGameController = new ShowAdsFilterGameController();

const gamesRoutes = Router();

gamesRoutes.get("/", showGamesCountAdsController.handle);

gamesRoutes.get("/:id/ads", showAdsFilterGameController.handle);

export { gamesRoutes };
