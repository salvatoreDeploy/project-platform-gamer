import { Request, Response } from "express";
import { convertHoursStringToMinutes } from "../../../../utils/convert-hours-string-to-minutes";
import { CreateNewAdsUseCase } from "./CreateNewAdsUseCase";

class CreateNewAdsController {
  async handle(request: Request, response: Response) {
    const gameId = request.params.id;
    const {
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel,
    } = request.body;

    const createNewAdsUseCase = new CreateNewAdsUseCase();

    const ad = await createNewAdsUseCase.execute({
      gameId,
      name,
      yearsPlaying,
      discord,
      weekDays: weekDays.join(","),
      hourStart: convertHoursStringToMinutes(hourStart),
      hourEnd: convertHoursStringToMinutes(hourEnd),
      useVoiceChannel,
    });

    return response.json(ad);
  }
}

export { CreateNewAdsController };
