import {commonRes} from "./common-res";
import {Ib2bPartnersRes} from "../api_iarena/responses";
import {COVER_HOLDER_ID} from "../enums/b2b-partners";

export const b2bPartnersRes: Ib2bPartnersRes = {
  data: [
    {
      id: COVER_HOLDER_ID,
      questionsCount: 10,
      logo: "https://cdnarena.blob.core.windows.net/images/2546.png",
      name: "ChoverHolder",
    },
    {
      id: 4,
      questionsCount: 20,
      logo: "https://cdnarena.blob.core.windows.net/images/2546.png",
      name: "A",
    },
  ],
  ...commonRes,
};
