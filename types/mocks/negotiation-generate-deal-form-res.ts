import {commonRes} from "./common-res";
import {IB2BQuestionFieldsRes} from "../api_iarena/responses";
import {DisplayTypes, InputTypes} from "../api_iarena/dtos/input-fields";

export const negotiationGenerateDealForm: IB2BQuestionFieldsRes = {
  data: [
    {
      sections: [
        {
          description: null,
          sectionItems: [
            {
              isRequired: true,
              typology: InputTypes.String,
              displayType: DisplayTypes.Default,
              id: 6,
              label: "Età",
            },
            {
              isRequired: false,
              typology: InputTypes.Int,
              displayType: DisplayTypes.Default,
              id: 7,
              label: "Genere",
            },
            {
              isRequired: false,
              typology: InputTypes.Boolean,
              displayType: DisplayTypes.Default,
              id: 8,
              label: "Fumatore",
            },
            {
              isRequired: true,
              typology: InputTypes.String,
              displayType: DisplayTypes.TextArea,
              id: 9,
              label: "Copertura",
            },
            {
              isRequired: true,
              typology: InputTypes.Date,
              displayType: DisplayTypes.ExpireDate,
              id: 210,
              label: "Data di scandenza",
            },
          ],
        },
      ],
    },
  ],
  ...commonRes,
};
