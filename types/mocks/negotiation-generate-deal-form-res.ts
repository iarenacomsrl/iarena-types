import {commonRes} from "./common-res";
import {IB2BQuestionFieldsRes} from "../api_iarena/responses";
import {DisplayTypes, InputTypes} from "../api_iarena/dtos/input-fields";

export const negotiationGenerateDealForm: IB2BQuestionFieldsRes = {
  data: [
    {
      sections: [

        /** {
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
              typology: InputTypes.Boolean,
              displayType: DisplayTypes.Default,
              id: 8,
              label: "Fumatore",
            },
            {
              isRequired: true,
              typology: InputTypes.File,
              displayType: DisplayTypes.Default,
              id: 9,
              label: "Allegato",
            }*/

        {
          description: null,
          sectionItems: [
            {
              isRequired: true,
              typology: InputTypes.String,
              displayType: DisplayTypes.Default,
              id: 6,
              label: "field1",
            },
            {
              isRequired: true,
              typology: InputTypes.String,
              displayType: DisplayTypes.Default,
              id: 6,
              label: "field2",
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
              displayType: DisplayTypes.Default,
              id: 6,
              label: "field14",
            }
          ],
        },
      ],
    },
  ],
  ...commonRes,
};