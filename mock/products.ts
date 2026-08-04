export type Product = {
  name: string
  price: string
  tag?: string
  description?: string
}

export type Category = {
  id: string
  name: string
  emoji: string
  products: Product[]
}

export type ProductsData = {
  categories: Category[]
}

const products: ProductsData = {
  categories: [
    {
      id: "",
      name: "کوکی",
      emoji: "🍪",
      products: [
        {
          name: "دابل چاکلت با فیلینگ نوتلا",
          tag: "پک 10 تایی",
          price: "900000",
        },
        {
          name: "نیویورکی نوتلا",
          tag: "پک 10 تایی",
          price: "850000",
        },
        {
          name: "نیویورکی شکلات گردو",
          tag: "پک 10 تایی",
          price: "800000",
        },
        {
          name: "نیویورکی رول دارچین با فیلینگ پنیر",
          tag: "پک 10 تایی",
          price: "700000",
        },
        {
          name: "نیویورکی رد ولوت با فیلینگ پنیر",
          tag: "پک 10 تایی",
          price: "800000",
        },
        {
          name: "نیویورکی با کرم لوتوس",
          tag: "پک 10 تایی",
          price: "850000",
        },
        {
          name: "نیویورکی هویج گردو با فیلینگ پنیر",
          tag: "پک 10 تایی",
          price: "800000",
        },
        {
          name: "نیویورکی پسته شکلات",
          tag: "پک 10 تایی",
          price: "1150000",
        },
      ],
    },
    {
      id: "cakes",
      name: "کیک",
      emoji: "🍰",
      products: [
        {
          name: "کیک هویج گردو",
          tag: "اسلایس‌های 8 تایی",
          price: "850000",
        },
        {
          name: "پاوند کیک",
          tag: "اسلایس‌های 8 تایی",
          price: "850000",
        },
        {
          name: "کیک شکلاتی خیس",
          tag: "اسلایس‌های 8 تایی",
          price: "900000",
        },
        {
          name: "رولت ترامیسو",
          tag: "اسلایس‌های 8 تایی",
          price: "1000000",
        },
        {
          name: "رولت شکلاتی",
          tag: "اسلایس‌های 8 تایی",
          price: "1150000",
        },
        {
          name: "رولت موز گردو",
          tag: "اسلایس‌های 8 تایی",
          price: "1200000",
        },
        {
          name: "رولت ساده نوستالژیک",
          tag: "اسلایس‌های 8 تایی",
          price: "1000000",
        },
        {
          name: "رولت هل زعفران",
          tag: "اسلایس‌های 8 تایی",
          price: "1150000",
        },
        {
          name: "کیک تولد",
          tag: "1 کیلو",
          price: "1200000",
          description: "قابل سفارش با فیلینگ‌های مختلف",
        },
        {
          name: "بلوندی سیب دارچین",
          tag: "اسلایس‌های 9 تایی",
          price: "750000",
        },
        {
          name: "بلوندی شکلات چیپسی",
          tag: "اسلایس‌های 9 تایی",
          price: "700000",
        },
        {
          name: "بلوندی توت فرنگی",
          tag: "اسلایس‌های 9 تایی",
          price: "750000",
        },
        {
          name: "براونی",
          tag: "اسلایس‌های 9 تایی",
          price: "850000",
        },
        {
          name: "ماربل براونی",
          tag: "اسلایس‌های 9 تایی",
          price: "950000",
        },
        {
          name: "رد ولوت براونی",
          tag: "اسلایس‌های 9 تایی",
          price: "950000",
        },
        {
          name: "چیز کیک سن سباستین",
          tag: "اسلایس‌های 8 تایی",
          price: "1400000",
        },
      ],
    },
    {
      id: "donuts",
      name: "دونات",
      emoji: "🍩",
      products: [
        {
          name: "دونات شکلاتی",
          tag: "پک 6 تایی",
          price: "540000",
        },
      ],
    },
    {
      id: "diet",
      name: "رژیمی",
      emoji: "✨",
      products: [
        {
          name: "پاوند کیک رژیمی فیری گلوتن",
          tag: "اسلایس‌های 8 تایی",
          price: "800000",
        },
        {
          name: "کوکی رژیمی فیری گلوتن",
          tag: "پک 10 تایی",
          price: "850000",
        },
      ],
    },
  ],
}

export default products
