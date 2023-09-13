export interface Order {
  id: number
  orderNumber: string
  timestamp: string
  totalPrice: number
  seat: number
  remark: string
  isActive: string
  takeOrderBy: TakeOrderBy
  orderDetail: OrderDetail[]
  table: Table[]
  inVoice: []
}

export interface TakeOrderBy {
  id: number
  firstName: string
  lastName: string
  phoneNumber: string
  pin: string
  startingDate: string
  image: string
  isActive: boolean
}

export interface OrderDetail {
  id: number
  qty: number
  price: number
  remark: string
  isActive: string
  status: string
  timestamp: string
  priceList: PriceList
  orderDetailStatus: OrderDetailStatus
  optionDetail: OptionDetail[]
}

export interface PriceList {
  id: number
  name: string
  nameEn: string
  price: number
  isBaht: string
  food: Food
}

export interface Food {
  id: number
  name: string
  nameEn: string
  image: string
  isShow: string
  subKitchenId: SubKitchenId
  categoryId: CategoryId
}

export interface SubKitchenId {
  id: number
  name: string
  nameEn: string
  ipPrinter: string
}

export interface CategoryId {
  id: number
  name: string
  nameEn: string
  image: string
}

export interface OrderDetailStatus {
  id: number
  name: string
  nameEn: string
}

export interface OptionDetail {
  id: number
  qty: number
}

export interface Table {
  id: number
  name: string
  seat: number
  zoneId: ZoneId
}

export interface ZoneId {
  id: number
  name: string
  nameEn: string
  status: string
}
