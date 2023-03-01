import GamesRepository from "../../repositorioes/GamesRepository";

class ShowGamesCountAdsUseCase {
  async execute() {
    const gameRepository = new GamesRepository();

    const game = await gameRepository.findAllGames();

    return game;
  }
}

export default ShowGamesCountAdsUseCase;
