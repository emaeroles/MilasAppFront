import { fetchGet } from '../../app/api/apiClient';

export type Kioscos = {
  IsSuccess: boolean;
  Message: string;
  Data: [
    {
      Id: string;
      Name: string;
      Manager: string;
      Phone: string;
      Address: string;
      IsEnableChanges: boolean;
      Notes: string;
      Dubt: number;
      Order: string;
    }
  ];
};

export default async function getKioscos(
  userId: string
): Promise<Kioscos | null> {
  const response: Response | null = await fetchGet(
    '/kiosco/' + userId + '/get-actives'
  );

  if (response?.status == 200) {
    return await response.json();
  }

  return null;
}
