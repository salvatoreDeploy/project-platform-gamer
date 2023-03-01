interface ICreateNewAds {
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: string;
  useVoiceChannel: boolean;
  hourStart: number;
  hourEnd: number;
}

export { ICreateNewAds };
