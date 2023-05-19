import type { restaurantStatusList, dietList } from "@/types/constants";

export type Restaurant = {
    id: string
    name: string
    address: string
    website: string
    status: typeof  restaurantStatusList[number]
}

export type Dish = {
    id: string
    name: string
    status: typeof  restaurantStatusList[number],
    diet?: typeof  dietList[number]
}

