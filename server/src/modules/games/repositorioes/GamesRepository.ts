import { Game, PrismaClient } from "@prisma/client";
import { IListAdsForGame } from "../dtos/IListAdsForGame";

const prisma = new PrismaClient();

class GamesRepository {
  public async findAllGames(): Promise<Game[]> {
    const games = prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
      },
    });

    return games;
  }

  public async findAllAdsForGame({ gameId }: IListAdsForGame) {
    const ads = prisma.ad.findMany({
      select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
      },
      where: {
        gameId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return ads;
  }
}

export default GamesRepository;
