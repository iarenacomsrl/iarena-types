import {e2eUserId1} from "../constants";
import {DealQuestionStatuses, DealQuoteStatuses, IDealInstance} from "../api_deals/dtos/deal";
import {DisplayTypes, InputTypes} from "../api_iarena/dtos/input-fields";

export const deal: IDealInstance = {
  id: 1,
  ownerId: e2eUserId1,
  quoteStatus: DealQuoteStatuses.Default,
  questionStatus: DealQuestionStatuses.Default,
  isLocked: false,
  userDefinedFields: [],
  category: {
    id: 1,
    fullPath: "Tutela legale / Privati",
    description: "RC Auto",
    parentId: 0,
  },
  featuredFields: [
    {
      id: 1,
      value: "Value 1",
      isRequired: true,
      displayType: DisplayTypes.Default,
      typology: InputTypes.String,
      label: "label 1",
    },
    {
      id: 2,
      value: "Value 2",
      isRequired: true,
      displayType: DisplayTypes.Default,
      typology: InputTypes.String,
      label: "label 2",
    },
    {
      id: 3,
      value: "Value 3",
      isRequired: true,
      displayType: DisplayTypes.Default,
      typology: InputTypes.String,
      label: "label 3",
    },
    {
      id: 4,
      value: "Value 4",
      isRequired: true,
      displayType: DisplayTypes.Default,
      typology: InputTypes.String,
      label: "label 4",
    },
  ],
  expireDate: new Date(),
};
