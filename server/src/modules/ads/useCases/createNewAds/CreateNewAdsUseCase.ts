import { ICreateNewAds } from "../../dtos/ICreateNewAds";
import { AdsRepository } from "../../repositorioes/AdsRepository";

class CreateNewAdsUseCase {
  async execute({
    gameId,
    name,
    yearsPlaying,
    discord,
    weekDays,
    hourStart,
    hourEnd,
    useVoiceChannel,
  }: ICreateNewAds) {
    const adRepository = new AdsRepository();

    const ad = await adRepository.create({
      gameId,
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel,
    });

    return ad;
  }
}

export { CreateNewAdsUseCase };
