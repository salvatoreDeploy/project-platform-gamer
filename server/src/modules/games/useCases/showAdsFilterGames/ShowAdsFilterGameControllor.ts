import { Request, Response, response } from "express";
import { convertMinutesToHours } from "../../../../utils/convert-minutes-to-hours";
import { ShowAdsFilterGameUseCace } from "./ShowAdsFilterGameUseCase";

class ShowAdsFilterGameController {
  async handle(request: Request, response: Response) {
    const gameId = request.params.id;

    const showAdsFilterGameUseCase = new ShowAdsFilterGameUseCace();

    const allAds = await showAdsFilterGameUseCase.execute({ gameId });

    return response.json(
      allAds.map((ad) => {
        return {
          ...ad,
          weekDays: ad.weekDays.split(","),
          hourStart: convertMinutesToHours(ad.hourStart),
          hourEnd: convertMinutesToHours(ad.hourEnd),
        };
      })
    );
  }
}

export { ShowAdsFilterGameController };
