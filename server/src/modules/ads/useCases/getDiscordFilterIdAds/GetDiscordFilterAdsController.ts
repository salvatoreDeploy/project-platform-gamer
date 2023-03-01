import { Request, Response } from "express";
import { GetDisrcordFilterAdsUseCase } from "./GetDisrcordFilterAdsUseCase";

class GetDisrcordFilterAdsController {
  async handle(request: Request, response: Response) {
    const adsId = request.params.id;

    const getDiscordFilterAdsUseCase = new GetDisrcordFilterAdsUseCase();

    const ad = await getDiscordFilterAdsUseCase.execute({ adsId });

    return response.json({ ad });
  }
}

export { GetDisrcordFilterAdsController };
