import { Request, Response } from "express";
import ShowGamesCountAdsUseCase from "./ShowGamesCountAdsUseCase";

class ShowGamesCountAdsController {
  async handle(request: Request, response: Response) {
    const showGameCountAdsUseCase = new ShowGamesCountAdsUseCase();

    const allGames = await showGameCountAdsUseCase.execute();

    return response.json(allGames);
  }
}

export default ShowGamesCountAdsController;
