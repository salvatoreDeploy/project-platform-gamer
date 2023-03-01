/* 
    função split: "18:00" -> ['18', '00'] "Função split retorna uma string"
    função map: ['18', '00'] -> [18, 00] "Função map para cada posição vai efetuar a converção"
*/

export function convertHoursStringToMinutes(hoursString: string) {
  const [hours, minutes] = hoursString.split(":").map(Number);

  const minutesAmount = hours * 60 + minutes;

  return minutesAmount;
}
