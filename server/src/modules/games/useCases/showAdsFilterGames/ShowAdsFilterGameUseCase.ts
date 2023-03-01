import { IListAdsForGame } from "../../dtos/IListAdsForGame";
import GamesRepository from "../../repositorioes/GamesRepository";

class ShowAdsFilterGameUseCace {
  async execute({ gameId }: IListAdsForGame) {
    const gameRepository = new GamesRepository();

    const ads = await gameRepository.findAllAdsForGame({ gameId });

    return ads;
  }
}

export { ShowAdsFilterGameUseCace };
