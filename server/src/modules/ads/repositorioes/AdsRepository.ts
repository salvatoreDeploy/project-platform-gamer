import { PrismaClient } from "@prisma/client";
import { ICreateNewAds } from "../dtos/ICreateNewAds";
import { IGetDiscordFilterIdAds } from "../dtos/IGetDiscordFilterIdAds";

const prisma = new PrismaClient();

class AdsRepository {
  public async findOneAds({ adsId }: IGetDiscordFilterIdAds) {
    const ads = await prisma.ad.findFirstOrThrow({
      select: {
        discord: true,
      },
      where: {
        id: adsId,
      },
    });

    return ads;
  }

  public async create({
    gameId,
    name,
    yearsPlaying,
    discord,
    weekDays,
    hourStart,
    hourEnd,
    useVoiceChannel,
  }: ICreateNewAds) {
    const ad = await prisma.ad.create({
      data: {
        gameId,
        name,
        yearsPlaying,
        discord,
        weekDays,
        hourStart,
        hourEnd,
        useVoiceChannel,
      },
    });

    return ad;
  }
}

export { AdsRepository };
