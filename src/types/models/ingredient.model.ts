import { IngredientType } from "../../utils/Enum/ingredient-type.enum";

export interface IngredientModel {
    [IngredientType.salad]: number,
    [IngredientType.bacon]: number,
    [IngredientType.cheese]: number,
    [IngredientType.meat]: number,
}