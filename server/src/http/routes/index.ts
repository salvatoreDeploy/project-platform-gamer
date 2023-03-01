import Router from "express";
import { adsRoutes } from "./ads.Routes";
import { gamesRoutes } from "./games.Routes";

const routes = Router();

routes.use("/games", gamesRoutes);
routes.use("/ads", adsRoutes);

export { routes };
