import getKioscos, { Kioscos } from './getKioscos';

export default async function kioscosSlise(userId: string) {
  const apiResponse: Kioscos | null = await getKioscos(userId);

  if (apiResponse !== null) {
    return apiResponse;
  }
}
