import {commonRes} from "./common-res";
import {IBaseFieldsRes} from "../api_iarena/responses";
import {DisplayTypes, InputTypes} from "../api_iarena/dtos/input-fields";

export const baseFieldsRes: IBaseFieldsRes = {
  data: [
    {
      sections: [
        {
          name: "Question name",
          description: "Description of question",
          sectionItems: [
            {
              isRequired: true,
              typology: InputTypes.Select,
              displayType: DisplayTypes.Default,
              items: [
                {
                  id: 0,
                  displayText: "option 1",
                },
              ],
              label: "label",
              id: 1,
            },
          ],
        },
      ],
    },
  ],
  ...commonRes,
};
