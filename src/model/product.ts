type StockStatus = 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK' | 'DISCONTINUED';

export type VehicleLifecycleStatus =
  | 'INTAKE'
  | 'INSPECTION'
  | 'READY'
  | 'RESERVED'
  | 'SOLD'
  | 'RETIRED';

export type VehicleConditionGrade = 'A+' | 'A' | 'B' | 'C';

export type InspectionStatus = 'PENDING' | 'IN_PROGRESS' | 'PASSED' | 'FAILED';

export interface VehicleLocation {
  city: string;
  hub: string;
  bay?: string;
}

export interface VehicleOwnership {
  acquiredFrom: string;
  acquisitionDate: string;
  acquisitionCost: number;
  ownerName: string;
}

export interface VehicleCertification {
  inspector: string;
  inspectionDate?: string;
  checklistScore?: number;
  notes?: string;
}

export interface IProduct {
  _id?: string;
  name: string; // Vehicle listing title (e.g., "2022 Hyundai Creta SX (O)")
  sku: string; // Repurposed as VIN
  slug: string;
  description: string;
  shortDescription: string;

  mrp: number; // Market price benchmark
  sellingPrice: number; // Listing price
  costPrice?: number; // Acquisition cost
  taxRate?: number;
  hsnCode?: string; // Repurposed as registration / RC reference

  brandId?: string; // Vehicle make
  categoryIds: string[]; // Body type / drivetrain tags
  tags: string[];
  attributes?: IProductAttribute[];

  images: IProductImage[];

  weight?: number;
  dimensions?: IProductDimensions[];

  hasVariants?: boolean;
  variants?: IProductVariant[];

  stockStatus: StockStatus;
  warehouseInventory: IWarehouseInventory[];

  isReturnable?: boolean;
  returnPeriodDays?: number;
  returnPolicyNote: string;

  status: 'DRAFT' | 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
  publishedAt?: string;

  createdAt: string;
  updatedAt: string;

  // --- Vehicle specific metadata ---
  vin: string;
  make: string;
  model: string;
  year: number;
  trim?: string;
  fuelType: 'Petrol' | 'Diesel' | 'CNG' | 'EV' | 'Hybrid';
  transmission: 'Automatic' | 'Manual' | 'IMT';
  drivetrain?: 'FWD' | 'RWD' | 'AWD' | '4WD';
  mileage: number; // kms driven
  color?: string;
  ownershipCount?: number;
  conditionGrade: VehicleConditionGrade;
  vehicleStatus: VehicleLifecycleStatus;
  inspectionStatus: InspectionStatus;
  certification?: VehicleCertification;
  location: VehicleLocation;
  ownership: VehicleOwnership;
  testDriveCount?: number;
  nextAvailability?: string;
  featuredHighlights?: string[];
  financingApr?: number;
  financingTenureMonths?: number;
  reservedBy?: string;
}


export interface IProductImage {
    url: string;
    thumbnailUrl?: string;
    alt?: string;
    caption?: string;
    isPrimary?: boolean;
    displayOrder?: number;
}

export interface IProductAttribute {
  attributeTypeId: string;
  attributeName: string;
  dataType: 'TEXT' | 'NUMBER' | 'BOOLEAN' | 'DATE' | 'ENUM';
  isRequired: boolean;
  value: string | number | boolean | Date;
}

export interface IWarehouseInventory {
  availableQuantity: number;
  // minStockLevel?: number;
  // maxStockLevel?: number;
  // reorderPoint?: number;
  addQuantity: number;
  location?: {
    rack?: string;
    shelf?: string;
    bin?: string;
  };
}
export interface IProductVariant {
  variantSku: string;
  variantName: string;
  attributes: IProductAttribute[];
  pricingOverride?: boolean;
  mrp?: number;
  sellingPrice?: number;
  images?: IProductImage[];
  isActive?: boolean;
}
export interface IProductDimensions {
  length?: number;
  width?: number;
  height?: number;
  unit?: 'cm' | 'inches' | 'mm';
}