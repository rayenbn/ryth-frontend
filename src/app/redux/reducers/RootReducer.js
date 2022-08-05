import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import UniversityReducer from "./UniversityReducer";
import ScholarshipReducer from "./ScholarshipReducer";
import InvestorReducer from "./InvestorReducer";
import StartupsReducer from "./StartupsReducer";

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  notification: NotificationReducer,
  ecommerce: EcommerceReducer,
  university: UniversityReducer,
  scholarship: ScholarshipReducer,
  investor: InvestorReducer,
  startup: StartupsReducer
});

export default RootReducer;
