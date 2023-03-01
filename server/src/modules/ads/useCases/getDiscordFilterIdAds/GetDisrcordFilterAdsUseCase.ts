import { IGetDiscordFilterIdAds } from "../../dtos/IGetDiscordFilterIdAds";
import { AdsRepository } from "../../repositorioes/AdsRepository";

class GetDisrcordFilterAdsUseCase {
  async execute({ adsId }: IGetDiscordFilterIdAds) {
    const adsRepository = new AdsRepository();

    const ad = await adsRepository.findOneAds({ adsId });

    return ad;
  }
}

export { GetDisrcordFilterAdsUseCase };
