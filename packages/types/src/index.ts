export interface IUser {
  email: string;
  username: string;
  uuid: string;
  stores: IStore[];
}

export interface IStore {
  availabilityState: string;
  config: { brandColor: string };
  name: string;
  providers: string[];
  uuid: string;
}

export interface IProduct {
  uuid: string;
  name: string;
  description: string;
  imageUrl: string;
  legacyId: string;
  price: string;
  alcoholCount: number;
  soldAlone: boolean;
  availability: "AVAILABLE" | "UNAVAILABLE";
  providerAvailability: string | null;
  category: ICategory;
}

export interface ICategory {
  uuid: string;
  name: string;
  sortPosition: number;
  products: IProduct[];
}
